<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FrontPageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->word;
        return [
            'title' => $title,
            'slug' => strtolower(str_replace(' ','_',$title)),
            'is_active' => 1,
            'html' => [
                'title' => $this->faker->sentence,
                'content' => $this->faker->sentence(10)
            ],
        ];
    }
}
