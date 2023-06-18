<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\LanguageLevel;
use App\Models\LanguageSkills;
use Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Soliyev Aziz Mardonovich',
            'login' => 'Ruzzifer',
            'password' => Hash::make('Strelok_1993'),
        ]);

        LanguageLevel::insert([
            [
                'level' => 1,
                'name' => 'Basic level'
            ],
            [
                'level' => 2,
                'name' => 'Middle level'
            ],
            [
                'level' => 3,
                'name' => 'Advanced level'
            ],
            [
                'level' => 4,
                'name' => 'Native'
            ]
        ]);

        LanguageSkills::insert([
            [
                'user_id' => 1,
                'name' => 'Uzbek',
                'level' => 4,
            ],
            [
                'user_id' => 1,
                'name' => 'Russian',
                'level' => 3,
            ],
            [
                'user_id' => 1,
                'name' => 'English',
                'level' => 1,
            ],
        ]);
    }
}
