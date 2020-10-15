<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CountController extends Controller
{
    public function paragraph(Request $request)
    {
        $int = $request->input('');
    }
}
