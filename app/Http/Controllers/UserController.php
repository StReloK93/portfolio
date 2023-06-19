<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function index($id){
        $user = User::find($id);
        $user->langskills;
        $user->info;
        $user->specialities;
        $user->skills;
        $user->hobbies;
        $user->works;
        $user->recognitions;
        return $user;
    }
}
