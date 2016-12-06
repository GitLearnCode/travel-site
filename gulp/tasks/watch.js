var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssUpdate');
	});

	watch('./app/assets/js/**/*.js', function() {
		gulp.start('scriptsUpdate');
	})
});

gulp.task('cssUpdate', ['styles'] ,function(){
	gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsUpdate', ['scripts'], function() {
	browserSync.reload();
});

