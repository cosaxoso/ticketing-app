<?php

namespace Database\Seeders;

use App\Models\Ticket;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Ticket::factory(24)->create();

        User::factory()->create([
            'name' => 'Tenzin Choezom',
            'email' => 'tsongatenzin@gmail.com',
            'password' => bcrypt('Tenzin10'),
        ]);

        User::factory()-> create([
            'name' => 'Tenzin Sonam',
            'email' => 'tenzinsonam@gmail.com',
            'password' => bcrypt('Tenzin10'),
        ]);

        // Role::create(attributes: ['Tenzin Choezom', 'admin']);
    }
}
