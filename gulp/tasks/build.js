var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	del = require('del'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin');

var paths = {
	root: {
		dest: './dist'
	}
}
// task to preview the build dist folder
gulp.task('previewDist', function() {
	browserSync.init({
		server: {
			baseDir: paths.root.dest
		}
	});
});

gulp.task('deleteDistFolder',['icons'], function() {
	return del(paths.root.dest);
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/js',
		'!./app/assets/js/**',
		'!./app/temp',
		'!./app/temp/**'
	]
	return gulp.src(pathsToCopy)
		.pipe(gulp.dest(paths.root.dest));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function () {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icon', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
    	progressive: true, // will optimize jpeg images
    	interlaced: true,  // will optimize gif images
    	multipass: true    // will optimize svg 
    }))
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function() {
	return gulp.src("./app/index.html")
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest(paths.root.dest));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);



