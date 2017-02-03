var gulp = require('gulp'),
	modernizr = require('gulp-modernizr');

// build custom copy of modernizr and only test for
// features we want to test for, to keep the modernizr
// file as small as possible to load the site as possible.
gulp.task('modernizr', function() {
	return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest('./app/temp/scripts'));
});