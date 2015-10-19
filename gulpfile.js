var gulp = require('gulp'),
		mocha = require('gulp-mocha');

gulp.task('default', function(){
	console.log('Hello Gulp');
});

gulp.task('test', function(){
	return gulp
		.src(['test/bootstrap.js', 'test/scripts/**/*.js'])
		.pipe(mocha({reporter:'spec'}));
});

gulp.task('test-watch', function(){
	return gulp.watch(['src/scripts/**/*.js', 'test/scripts/**/*.js'],['test']);
});
