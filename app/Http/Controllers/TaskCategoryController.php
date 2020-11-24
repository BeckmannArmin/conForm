<?php

namespace App\Http\Controllers;

use App\Models\TaskCategory;
use Illuminate\Http\Request;

class TaskCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(TaskCategory::all()->toArray());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $taskCategory = TaskCategory::create($request->only('name'));

            return response()->json([
                'status' => (bool) $taskCategory,
                'message'=> $taskCategory ? 'Category Created' : 'Error Creating Category'
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TaskCategory  $taskCategory
     * @return \Illuminate\Http\Response
     */
    public function show(TaskCategory $taskCategory)
    {
        return response()->json($taskCategory);
    }

    /**
     * return tasks associated with a category
     */
    public function tasks(TaskCategory $taskCategory)
    {
        return response()->json($taskCategory->tasks()->orderBy('order')->get());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TaskCategory  $taskCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(TaskCategory $taskCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TaskCategory  $taskCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaskCategory $taskCategory)
    {
        $status = $taskCategory->update($request->only('name'));

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Category Updated!' : 'Error Updating Category'      
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TaskCategory  $taskCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaskCategory $taskCategory)
    {
        $status  = $taskCategory->delete();

            return response()->json([
                'status' => $status,
                'message' => $status ? 'Category Deleted' : 'Error Deleting Category'
            ]);
    }
}
