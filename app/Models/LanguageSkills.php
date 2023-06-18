<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanguageSkills extends Model
{
    use HasFactory;

    protected $with = [
        'langlevels'
    ];

    protected $fillable = ['user_id','name','level'];

    public function langlevels()
    {
        return $this->hasOne(LanguageLevel::class, 'level', 'level');
    }
}
