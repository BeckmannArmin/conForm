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
            'name' => 'Armin',
            'email' => 'timeline279@gmail.com',
            'password' => bcrypt('password'),
            'role' => 'adminstrator'
        ]);
    }
}
