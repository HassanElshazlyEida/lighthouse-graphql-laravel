<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\BookSeeder;
use Database\Seeders\CategorySeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategorySeeder::class);
        $this->call(BookSeeder::class);
    }
}
