<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmailTemplateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->name;
        return [
            'name' => $name,
            'slug' => strtolower(str_replace(' ','_',$name)),
            'details' => $this->faker->text,
            'html' => $this->faker->randomHtml,
            //
        ];
    }
}
