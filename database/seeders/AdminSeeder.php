<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Jan',
            'email' => 'Jan.Conrad@hs-kl.de',
            'password' => bcrypt('password'),
            'role' => 'adminstrator'
        ]);

        User::create([
            'name' => 'Armin',
            'email' => 'arbe0006@stud.hs-kl.de',
            'password' => bcrypt('password'),
            'role' => 'adminstrator'
        ]);

        User::create([
            'name' => 'Noah',
            'email' => 'nose0001@stud.hs-kl.de',
            'password' => bcrypt('1234'),
            'role' => 'adminstrator'
        ]);
    }
}
