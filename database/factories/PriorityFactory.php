<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PriorityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->randomElement(['Generally', 'Less Urgent','Urgent','Very Urgent']),
        ];
    }
}
