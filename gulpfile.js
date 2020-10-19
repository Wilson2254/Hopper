const gulp = require('gulp');
const sass = require('gulp-sass');
//Для правильного просмотра стилей
const sourcemaps = require('gulp-sourcemaps');
//Плагин для автоматиеского обновления контента
const browserSync = require('browser-sync').create();

//Работа с SCSS
function css_stye(done) {
    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream())
    done();
}

//Указываю папку в которой будет обновление
function sync(done) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    done();
}

//Обновляю страницу при любом изменении документа
function watchAll() {
    gulp.watch('./scss/**/*', css_stye);
    gulp.watch('./**/*.html', browserSync.reload());
    gulp.watch('./**/*.js', browserSync.reload());
}

//Тут я задачу на просмотр и обновление параллелю
gulp.task('default', gulp.parallel(sync, watchAll))