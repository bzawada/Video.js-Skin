const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const onError = (err) => {
  console.log(err);
};

gulp.task('watch', ['sass', 'js-uglify'], () => {
  gulp.watch('scss/video-player.scss', ['sass']);
  gulp.watch('js/videojs-custom-skin.js', ['js-uglify']);
});

gulp.task('sass', () => {
  return gulp.src('scss/video-player.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
        outputStyle: 'compressed'
    })) 
    .pipe(rename('videojs-custom-skin.css'))
    .pipe(autoprefixer({
	  browsers: ['> 1%', 'last 2 versions', 'IE 10'],
      cascade: false
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('js-uglify', () => {
    return gulp.src('js/videojs-custom-skin.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(uglify())
    .pipe(rename('videojs-custom-skin.min.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('default', ['watch']);
 