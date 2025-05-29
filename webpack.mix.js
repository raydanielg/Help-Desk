const path = require('path')
const mix = require('laravel-mix')
const cssImport = require('postcss-import')
const cssNesting = require('postcss-nesting')
const tailwindcss = require('tailwindcss');
const autoprefixer = require("autoprefixer");
const webpackConfig = require('./webpack.config')
require('laravel-mix-tailwind')
require('dotenv').config()

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .vue({ runtimeOnly: true })
    .webpackConfig(webpackConfig)
    .alias({ '@': 'resources/js' })
    .sass('resources/css/app.scss', 'public/css')
    .options({
        cssNano: {
            discardComments: {
                removeAll: true,
            },
        },
        postCss: [
            cssNesting(),
            cssImport(),
            tailwindcss('./tailwind.config.js'),
            autoprefixer()
        ]
    })
    // .postCss('resources/css/app.css', 'public/css', [
    //   // prettier-ignore
    //   cssImport(),
    //   cssNesting(),
    //   require('tailwindcss'),
    // ])
    .version()
    .sourceMaps()


mix.sass('public/installer/css/scss/style.scss', 'public/installer/css')

