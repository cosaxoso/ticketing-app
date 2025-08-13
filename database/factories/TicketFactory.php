<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $urgency = ['High', 'Low', 'Medium'];
        $department = ['Department of Home', 'Department of Health', 'Department of Education', 'Department of Security', 
                'Department of Finance', 'Department of Information and International Relations'];
        $status =['Pending', 'In progress', 'Resolved'];

        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'ip_address' => fake()->unique()->ipv4(),
            'urgency' => $this->faker->randomElement($urgency), 
            'details' => fake()->paragraph(3), 
            'subject' => fake()->sentence(),
            'department' => $this->faker->randomElement($department),
            'assigned_name' => fake()->name(),
            'status' => $this->faker->randomElement($status),

        ];
    }
}
