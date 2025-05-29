<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->firstName,
            'country_id' => $this->faker->numberBetween(1,240),
            'city' => $this->faker->city,
            'locale' => 'en',
            'address' => $this->faker->address,
            'phone' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'photo_path' => $this->faker->randomElement([
                '/images/profiles/1.svg',
                '/images/profiles/2.svg',
                '/images/profiles/3.svg',
                '/images/profiles/4.svg',
                '/images/profiles/5.svg',
                '/images/profiles/6.svg',
                '/images/profiles/7.svg',
                '/images/profiles/8.svg',
                '/images/profiles/9.svg',
                '/images/profiles/10.svg',
                '/images/profiles/11.svg',
                '/images/profiles/12.svg',
            ]),
            'password' => 'secret',
            'remember_token' => Str::random(10),
            'role_id' => $this->faker->randomElement([1,2,3,4]),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }

    private function clean($string) {
        $string = str_replace(' ', '-', $string);
        return strtolower(preg_replace('/[^A-Za-z0-9\-]/', '', $string));
    }
}
