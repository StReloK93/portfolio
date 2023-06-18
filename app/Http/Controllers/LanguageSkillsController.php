<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\LanguageSkills;
class LanguageSkillsController extends Controller
{
    public function userLanguages(){
        return User::find(1)->with('langskills');
    }
}
