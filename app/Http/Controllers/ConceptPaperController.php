<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\ConceptPaper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class ConceptPaperController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $conceptPapers = auth()->user()->conceptPapers()->get();

        /*
        ConceptPaper::orderBy('created_at', 'desc')->paginate(5);
        */

        return response()->json($conceptPapers, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:1',
            'course' => 'required|min:1',
            'currentSemester' => 'required|min:2',
            'image' => 'image|mimes:jpeg,png,jpg',
            'join_code' => 'min:4'
        ]);

        $conceptPaper = new ConceptPaper();
        $conceptPaper->name = $request->name;
        $conceptPaper->course = $request->course;
        $conceptPaper->currentSemester = $request->currentSemester;

        $path = $request->file('image')->store('conceptPaper_images');

        $conceptPaper->image = $path;
        $conceptPaper->idea = "";
        $conceptPaper->basics = "";
        $conceptPaper->niceToHave = "";
        $conceptPaper->technologies = "";
        $conceptPaper->team = "";
        $conceptPaper->join_code = $request->uuid;
        $conceptPaper->user_id = Auth::user()->id;

        if ($conceptPaper->save()) {
            return response()->json($conceptPaper, 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ConceptPaper  $conceptPaper
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ConceptPaper $conceptPaper)
    {
        $request->validate([
            'name' => 'required|min:2',
            'course' => 'required|min:2',
            'currentSemester' => 'required|min:2',
            'join_code' => 'min:4',

        ]);

        $conceptPaper->name = $request->name;
        $conceptPaper->course = $request->course;
        $conceptPaper->currentSemester = $request->currentSemester;
        $oldPath = $conceptPaper->image;

        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg',
            ]);

            $path = $request->file('image')->store('conceptPaper_images');
            $conceptPaper->image = $path;

            Storage::delete($oldPath);
        }

        if ($request->idea == "") {
            $conceptPaper->idea = "";
        } else {
            $conceptPaper->idea = $request->idea;
        }

        if ($request->basics == "") {
            $conceptPaper->basics = "";
        } else {
            $conceptPaper->basics = $request->basics;
        }

        if ($request->niceToHave == "") {
            $conceptPaper->niceToHave = "";
        } else {
            $conceptPaper->niceToHave = $request->niceToHave;
        }

        if ($request->technologies == "") {
            $conceptPaper->technologies = "";
        } else {
            $conceptPaper->technologies = $request->technologies;
        }

        if ($request->team == "") {
            $conceptPaper->team = "";
        } else {
            $conceptPaper->team = $request->team;
        }

        $conceptPaper->join_code = $request->join_code;

        $conceptPaper->user_id = $request->user_id;

        if ($conceptPaper->save()) {
            return response()->json($conceptPaper, 200);
        } else {
            Storage::delete($path);
            return response()->json([
                'message' => 'Some error occured, please try again!',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ConceptPaper  $conceptPaper
     * @return \Illuminate\Http\Response
     */
    public function destroy(ConceptPaper $conceptPaper)
    {
        if ($conceptPaper->delete()) {
            Storage::delete($conceptPaper->image);

            return response()->json([
                'message' => 'ConceptPaper was deleted successfully',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occured, please try again',
                'status_code' => 500
            ], 500);
        }
    }

    public function join($joincode)
    {
        $conceptPaper = ConceptPaper::where('join_code', $joincode)->firstOrFail();
        return response()->json($conceptPaper);
    }
}