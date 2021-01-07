<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => ['required', 'string', 'max:56']
        ]);

        return $request->user()
            ->statuses()
            ->create($request->only('title','slug'));
    }
}
