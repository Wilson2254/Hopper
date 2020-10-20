const { reload } = require('browser-sync');
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

//Работа с обновлением
function sync(done) {
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    });
    done();
}

//Обновляю всё
function reloadAll(done) {
    browserSync.reload();
    done();
}

//Обновляю страницу при любом изменении документа
function watchAll() {
    gulp.watch('./scss/**/*', css_stye);
    gulp.watch('./**/*.html', reloadAll);
    gulp.watch('./**/*.js', reloadAll);
}

//Тут я делаю задачу на просмотр и обновление параллелю
gulp.task('default', gulp.parallel(sync, watchAll))