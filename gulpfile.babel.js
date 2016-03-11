import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';


const PATHS = {
    javascripts: ['source/**/*.js'],
    stylesheets: ['source/**/*.scss'],
    staticfiles: [
        'source/**/images/**/*',
        'source/**/fonts/**/*',
        'source/**/templates/**/*'
    ]
};
const BUILD_DIRECTORY = 'distribution';


gulp.task('javascripts', () => {
    return gulp.src(PATHS.javascripts)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(BUILD_DIRECTORY));
});


gulp.task('stylesheets', () => {
    return gulp.src(PATHS.stylesheets)
        .pipe(plumber())
        .pipe(sass().on('error', console.log))
        .pipe(autoprefixer())
        .pipe(gulp.dest(BUILD_DIRECTORY));
});


gulp.task('staticfiles', () => {
    return gulp.src(PATHS.staticfiles)
        .pipe(gulp.dest(BUILD_DIRECTORY));
});


gulp.task('build', ['javascripts', 'stylesheets', 'staticfiles']);


gulp.task('watch', () => {
    gulp.watch(PATHS.javascripts, ['javascripts']);
    gulp.watch(PATHS.stylesheets, ['stylesheets']);
    gulp.watch(PATHS.staticfiles, ['staticfiles']);
});


gulp.task('default', ['build', 'watch']);
