<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class KnowledgeBaseFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $randomDate = $this->faker->dateTime();
        return [
            'title' => $this->faker->sentence,
            'details' => '<p>'.$this->faker->text(400).'</p>'.'<p>'.$this->faker->text(400).'</p>'.'<p>'.$this->faker->text(400).'</p>',
            'type_id' => null,
            'created_at' => $randomDate,
            'updated_at' => $randomDate,
        ];
    }
}
