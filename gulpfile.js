var gulp			= require('gulp');
var imagemin		= require('gulp-imagemin');
var pngquant		= require('imagemin-pngquant');
var uncss			= require('gulp-uncss');
var sass			= require('gulp-sass');
var concat			= require('gulp-concat');
var nano			= require('gulp-cssnano');
var autoprefix		= require('gulp-autoprefixer');
var browsersync		= require('browser-sync');
var prettyurl		= require('gulp-pretty-url');
var htmlmin			= require('gulp-htmlmin');

gulp.task('watch', function() {
	browsersync({
		server: {
			baseDir: './dist'
		}
	});
	gulp.watch('./src/scss/*.scss', ['sass-watch']);
	gulp.watch('./src/scss/_partials/*.scss', ['sass-watch']);
	gulp.watch('./src/img/*', ['img-watch']);
	gulp.watch('./src/*.html', ['html-watch']);
});

gulp.task('sass', function() {
	gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(autoprefix())
		.pipe(concat('style.css'))
		.pipe(uncss({
			html: ['./src/*.html']
		}))
		.pipe(nano())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('img', function() {
	gulp.src('./src/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [
				{removeViewBox: false},
				{cleanupIDs: false}
			],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('html', function() {
	gulp.src('./src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(prettyurl())
		.pipe(gulp.dest('./dist'));
});

gulp.task('sass-watch', ['sass'], browsersync.reload);
gulp.task('img-watch', ['img'], browsersync.reload);
gulp.task('html-watch', ['html'], browsersync.reload);
