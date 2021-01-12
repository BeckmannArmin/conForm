<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;

class UserController extends Controller
{

    /**
     * Login Method: in here we call Auth::attempt with the credentials the user supplied. 
     * If authentication is successful, we create access tokens and return them to the user. 
     * This access token is what the user would always send along with all API calls to have access to the APIs.
     * Register Method: like the login method, we validated the user information, 
     * created an account for the user and generated an access token for the user.
     */
    
    public function login(Request $request)
        {
            $credentials =  $request->validate([
                'email' => 'required|string|email',
                'password' => 'required|string',
            ]);
            
            if (Auth::attempt($credentials)) {

                $user = Auth::user();
                if ($user->role == 'adminstrator') {
                    $success['token'] = $user->createToken('MyApp', ['do_anything'])->accessToken;
                } else {
                    $success['token'] = $user->createToken('MyApp', ['can_create'])->accessToken;
                }
              
                return response()->json(['success' => $success,
                'user' => $user,
                ]);
            } else {
                return response()->json([
                    'message' => 'Invalid user name or password',
                    'status_code' => 401
                ], 401);
            }
        }

        public function logout()
        {
            
        //$request->user()->token()->revoke();

        auth()->user()->token()->delete();
        
        return response()->json([
            'message' => 'Logged out successfully!',
            'status_code' => 200
        ], 200);
        }

        public function register(Request $request)
        {
          $request->validate([
              'name' => 'required|string|max:255',
              'email' => 'required|string|email',
              'password' => 'required|string|confirmed',
          ]);

          $user = new User();
          $user->name = $request->name;
          $user->email = $request->email;
          $user->password = bcrypt($request->password);

          if ($user ->save()) {
              
            $userData = array(
                'email' => $user->email,
                'full_name' => $user->name,
            );

            Mail::send('emails.welcome', $userData, function ($message) use ($userData) {
                $message->from('no-reply@conform.de', 'Welcome');
                $message->to($userData['email'], $userData['full_name']);
                $message->subject('Welcome to conForm');
            });

            if (Mail::failures()) {
                return response()->json([
                    'message' => 'Some error occured. Please try it again.',
                    'status_code' => 500
                ], 500);
            } else {
                return response()->json([
                    'message' => 'We have sent a welcome email',
                    'status_code' => 200
                ], 200);
            }

          } else {
            return response()->json([
                'message' => 'Some error occured, please try again',
                'status_code' => 500
            ], 500);
          }
        }

        public function profile(Request $request) 
        {
            if ($request->user()){
                return response()->json($request->user(),200);
            }

            return response()->json([
                'message' => 'Not logged in',
                'status_code' => 500
            ],500);
        }

        public function getDetails()
        {
            return response()->json(['success' => Auth::user()]);
        }
        
        public function requestPassword(Request $request) 
        {
            $request->validate([
                'email' => 'required|email'
            ]);

            $user = User::where('email', $request->email)->first();
            if (!$user) {
                return response()->json([
                    'message' => 'We have sent a verfication code to your email adress',
                    'status_code' => 200
                ], 200);
            } else {
                $random = rand(11111,99999);
                $user->verfication_code = $random;
                if ($user->save()) {
                    $userData = array(
                        'email' => $user->email,
                        'full_name' => $user->name,
                        'random' => $random
                    );

                    Mail::send('emails.reset_password', $userData, function ($message) use ($userData) {
                        $message->from('no-reply@conform.de', 'Password request');
                        $message->to($userData['email'], $userData['full_name']);
                        $message->subject('Reset password request (conForm)');
                    });

                    if (Mail::failures()) {
                        return response()->json([
                            'message' => 'Some error occured. Please try it again.',
                            'status_code' => 500
                        ], 500);
                    } else {
                        return response()->json([
                            'message' => 'We have sent a verfication code to your email adress',
                            'status_code' => 200
                        ], 200);
                    }
                } else {
                    return response()->json([
                        'message' => 'Some error occured. Please try it again.',
                        'status_code' => 500
                    ], 500);
                }
            }
        }

        public function reset(Request $request) 
        {
            $request->validate([
                'email' => 'required|email',
                'verfication_code' => 'required|integer',
                'password' => 'required|confirmed|min:4',
            ]);

            $user = User::where('email', $request->email)->where('verfication_code', $request->verfication_code)->first();
            if (!$user) {
                return response()->json([
                    'message' => 'User not found/Invalid code',
                    'status_code' => 401
                ], 401);
            } else {
                $user->password = bcrypt(trim($request->password));
                $user->verfication_code = Null;

                if ($user->save()) {
                    return response()->json([
                        'message' => 'Password updated successfully',
                        'status_code' => 200
                    ], 200);
                } else {
                    return response()->json([
                        'message' => 'Some error occured. Please try it again.',
                        'status_code' => 500
                    ], 500);
                }
            }
        }
}