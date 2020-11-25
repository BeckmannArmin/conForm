<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserController extends Controller
{

    /**
     * Login Method: in here we call Auth::attempt with the credentials the user supplied. 
     * If authentication is successful, we create access tokens and return them to the user. 
     * This access token is what the user would always send along with all API calls to have access to the APIs.
     * Register Method: like the login method, we validated the user information, 
     * created an account for the user and generated an access token for the user.
     */
    
    public function login()
        {
            $credentials = [
                'email' => request('email'), 
                'password' => request('password')
            ];

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
            }

            $status = 401;
            $response = ['error' => 'Unauthorized'];

            return response()->json($response, $status);
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
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }

            $input = $request->all();
            $input['password'] = bcrypt($input['password']);

            $user = User::create($input);
            $success['token'] = $user->createToken('MyApp')->accessToken;
            $success['name'] = $user->name;

            return response()->json(['success' => $success]);
        }

        public function profile(Request $request) {
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
}
