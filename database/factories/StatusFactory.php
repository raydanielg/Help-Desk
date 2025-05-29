<?php

namespace Database\Factories;

use App\Models\Status;
use Illuminate\Database\Eloquent\Factories\Factory;

class StatusFactory extends Factory
{
    protected $model = Status::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->unique()->randomElement(['Pending', 'Processing','Completed','Delay processing', 'Waiting for confirmation', 'Closed']);
        return [
            'name' => $name,
            'slug' => strtolower(str_replace(' ','_',$name)),
        ];
    }
}
