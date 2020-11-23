<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TaskCategory;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $task_categories = ['Ideas', 'On Going', 'Completed'];

            foreach ($task_categories as $task_category) {
                TaskCategory::create(['name' => $task_category]);
            }
    }
}
