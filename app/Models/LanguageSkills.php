<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanguageSkills extends Model
{
    use HasFactory;

    protected $with = [
        'levels'
    ];

    protected $fillable = ['user_id','name','level'];

    public function levels()
    {
        return $this->hasOne(LanguageLevel::class, 'level', 'level');
    }
}
