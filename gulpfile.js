var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function () {
    gulp.src('./_site/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./_site/css'));
});

gulp.task('watch', function() {
    gulp.watch(['./_site/css/*'], ['autoprefixer']);
});

gulp.task('default', ['autoprefixer', 'watch']);