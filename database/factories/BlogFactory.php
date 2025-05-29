<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class BlogFactory extends Factory
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
            'title' => $this->faker->sentence(5),
            'details' => '<p>'.$this->faker->text(400).'</p>'.'<p>'.$this->faker->text(400).'</p>'.'<p>'.$this->faker->text(400).'</p>'.'<p>'.$this->faker->text(400).'</p>',
            'is_active' => 1,
            'image' => $this->faker->randomElement([
                'https://res.cloudinary.com/robinbd/image/upload/v1671118646/codecanyon/pro-schedule/post_images/pexels-lukas-669619.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118645/codecanyon/pro-schedule/post_images/pexels-lukas-917463.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118641/codecanyon/pro-schedule/post_images/pexels-lukas-669615.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118639/codecanyon/pro-schedule/post_images/pexels-lukas-349610.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118639/codecanyon/pro-schedule/post_images/pexels-lukas-306059.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118639/codecanyon/pro-schedule/post_images/pexels-lukas-1420709.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118639/codecanyon/pro-schedule/post_images/pexels-lukas-296084.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118639/codecanyon/pro-schedule/post_images/pexels-pixabay-159394.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118384/codecanyon/pro-schedule/post_images/pexels-pixabay-459653.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118382/codecanyon/pro-schedule/post_images/pexels-pixabay-38568.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118375/codecanyon/pro-schedule/post_images/pexels-craig-adderley-1563356.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118376/codecanyon/pro-schedule/post_images/pexels-pixabay-415590.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118378/codecanyon/pro-schedule/post_images/pexels-pixabay-509922.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118379/codecanyon/pro-schedule/post_images/pexels-pixabay-162616.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118380/codecanyon/pro-schedule/post_images/pexels-pixabay-265004.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118375/codecanyon/pro-schedule/post_images/pexels-konevi-2159549.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118375/codecanyon/pro-schedule/post_images/pexels-manprit-kalsi-1537086.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118373/codecanyon/pro-schedule/post_images/pexels-felix-mittermeier-957011.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118368/codecanyon/pro-schedule/post_images/pexels-ken-tomita-389819.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118368/codecanyon/pro-schedule/post_images/pexels-pixabay-434337.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118360/codecanyon/pro-schedule/post_images/pexels-craig-adderley-1652303.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118361/codecanyon/pro-schedule/post_images/pexels-fauxels-3184454.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118362/codecanyon/pro-schedule/post_images/pexels-designecologist-1779487.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118364/codecanyon/pro-schedule/post_images/pexels-jeshootscom-442575.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118365/codecanyon/pro-schedule/post_images/pexels-kedar-bhave-2427797.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118356/codecanyon/pro-schedule/post_images/pexels-craig-adderley-1858213.jpg',
                'https://res.cloudinary.com/robinbd/image/upload/v1671118356/codecanyon/pro-schedule/post_images/pexels-craig-adderley-1917838.jpg',
            ]),
            'created_at' => $randomDate,
            'updated_at' => $randomDate,
        ];
    }
}
