let mix = require('laravel-mix');

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

mix.js(['resources/assets/js/modernizr-2.6.2.min.js',
	'resources/assets/js/easyResponsiveTabs.js',
	'resources/assets/js/jquery.waypoints.min.js',
	'resources/assets/js/jquery.countup.js',
	'resources/assets/js/jquery.magnific-popup.js',
	'resources/assets/js/owl.carousel.js',
	'resources/assets/js/move-top.js',
	'resources/assets/js/easing.js',
	], 'public/js/all.js');

mix.styles(['resources/assets/css/bootstrap.css',
	'resources/assets/css/font-awesome.min.css',
	'resources/assets/css/popuo-box.css',
	'resources/assets/css/easy-responsive-tabs.css',
	'resources/assets/css/owl.carousel.css',
	'resources/assets/css/style.css',
	'resources/assets/css/app.css',
	], 'public/css/all.css');
