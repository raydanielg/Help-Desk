<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement(['Website', 'Email','Hosting','Domain', 'Internet', 'Social', 'Technical']),
            'color' => $this->faker->randomElement([
                '#EA445A', '#6BB77B', '#D76F30', '#172D13', '#DE5935', '#F7CD46',
                '#F92C85', '#D6A3FB', '#ABF62D', '#2568FB','#A0AECD','#9DAAF2','#FF6A3D','#4A5FC1','#394F8A',
                '#9CF6FB', '#BD1E51', '#F1B814', '#490B3D', '#161F6D', '#8DA242', '#A7BC5B', '#00458B', '#3FD2C7',
                '#FB8122', '#D48166', '#5626C4', '#E60576', '#0B4141', '#3F6844', '#7D3780', '#4A2C40', '#0049FF',
                '#182978', '#252669', '#425664', '#A350A3', '#4FCBE9'
            ])
        ];
    }
}
