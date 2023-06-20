<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\LanguageLevel;
use App\Models\LanguageSkills;
use App\Models\UserInfo;
use App\Models\Speciality;
use App\Models\EducationAndWorks;
use App\Models\Recognition;
use App\Models\Hobby;
use App\Models\Skills;
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


        UserInfo::create([
            'user_id' => 1,
            'name' => 'Aziz Mardonovich',
            'major' => 'Laravel & Vue - Developer',
            'country' => 'Uzbekistan',
            'city' => 'Uchquduq',
            'address' => '13-19-34',
            'email' => 'strelok0493@gmail.com',
            'phone' => '+99893 660 09 60',
            'telegram' => '@ruzzifer',
            'sitelink' => 'ruzzifer.site',
            'statement' => "Hi. My name is Aziz. I was born  in 1993year, in the city of Uchkuduk,
                            Navai region. In 2015,when i studied second grade of university, I was interested in
                            programming.Since then , my knowledge in this field I'll increase. In these days,
                            I am a Fullstack developer, on the Internet
                            magazine CRM system, ERP system, telegram bots and others
                            I have developed various spreadsheet programs",
        ]);

        Speciality::insert([
            [
                'user_id' => 1,
                'name' => 'Laravel',
                'icon' => 'laravel.png',
                'width' => '30px',
                'created_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Vue',
                'icon' => 'vue.png',
                'width' => '30px',
                'created_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Babylon.js',
                'icon' => 'babylon.png',
                'width' => '45px',
                'created_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Blender',
                'icon' => 'blender.png',
                'width' => '30px',
                'created_at' => now(),
            ],
        ]);


        Skills::insert([
            [
                'user_id' => 1,
                'name' => 'HTML',
                'level' => 8,
            ],
            [
                'user_id' => 1,
                'name' => 'CSS & Frameworks',
                'level' => 8,
            ],
            [
                'user_id' => 1,
                'name' => 'Javascript',
                'level' => 7,
            ],
            [
                'user_id' => 1,
                'name' => 'Vue',
                'level' => 8,
            ],
            [
                'user_id' => 1,
                'name' => 'PHP',
                'level' => 6,
            ],
            [
                'user_id' => 1,
                'name' => 'Laravel',
                'level' => 7,
            ],
            [
                'user_id' => 1,
                'name' => 'Babylon.js',
                'level' => 6,
            ],
            [
                'user_id' => 1,
                'name' => 'Blender',
                'level' => 5,
            ],
            [
                'user_id' => 1,
                'name' => 'Git',
                'level' => 4,
            ],
        ]);




        Hobby::insert([
            [
                'user_id' => 1,
                'icon' => '<i class="fa-solid fa-message-code"></i>',
                'name' => 'Coding',
            ],
            [
                'user_id' => 1,
                'icon' => '<i class="fa-solid fa-cube"></i>',
                'name' => '3d',
            ],
            [
                'user_id' => 1,
                'icon' => '<i class="fa-solid fa-gamepad-modern"></i>',
                'name' => 'Videogames',
            ],
            [
                'user_id' => 1,
                'icon' => '<i class="fa-duotone fa-solar-system"></i>',
                'name' => 'Astronomy',
            ],
            [
                'user_id' => 1,
                'icon' => '<i class="fa-duotone fa-scroll"></i>',
                'name' => 'History',
            ],
            [
                'user_id' => 1,
                'icon' => '<i class="fa-solid fa-kaaba"></i>',
                'name' => 'Religions',
            ],
        ]);



        EducationAndWorks::insert([
            [
                'user_id' => 1,
                'from' => '2009-09-01',
                'to' => '2012-06-01',
                'major' => 'Instrument fitter',
                'company' => 'Uchquduq vocational college',
                'job' => false
            ],
            [
                'user_id' => 1,
                'from' => '2012-06-01',
                'to' => '2014-08-01',
                'major' => 'Instrument fitter',
                'company' => 'Navoi Mining and Metallurgical Company',
                'job' => true
            ],
            [
                'user_id' => 1,
                'from' => '2014-09-01',
                'to' => '2019-06-01',
                'major' => 'Geologist engineer',
                'company' => 'Tashkent State Technical University',
                'job' => false
            ],
            [
                'user_id' => 1,
                'from' => '2019-05-01',
                'to' => '2019-12-01',
                'major' => 'Frontend developer',
                'company' => 'Business explorer',
                'job' => true
            ],
            [
                'user_id' => 1,
                'from' => '2020-08-01',
                'to' => '2021-01-01',
                'major' => 'Backend developer',
                'company' => 'Credo studio',
                'job' => true
            ],
            [
                'user_id' => 1,
                'from' => '2021-05-01',
                'to' => null,
                'major' => 'Software engineer',
                'company' => 'Navoi Mining and Metallurgical Company',
                'job' => true
            ],
        ]);



        Recognition::insert([
            [
                'user_id' => 1,
                'competition' => 'Math Olympiad between schools',
                'position' => '1st place',
                'location' => 'Navoi/Uchquduq',
            ],
            [
                'user_id' => 1,
                'competition' => 'The best innovation proposal',
                'position' => '1st place',
                'location' => 'Navoi Mining and Metallurgical Company',
            ],
        ]);









    }
}
