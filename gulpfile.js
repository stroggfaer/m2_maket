/**
 * Версия 2.0.0
 * ------Конфигурация GULP-----
 * Автор Rendzhifaer
 * */

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
 //   uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
 //   cssnano = require('gulp-cssnano'),
    less = require('gulp-less'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    debug = require('gulp-debug'), // Отслеживание тасков в терминале
    imagemin = require('gulp-imagemin');

var path = {
    build: { // Куда складывать готовые файлы после сборки
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/images/',
        fonts: 'build/css/fonts/'
    },
    src: { // Откуда брать исходники
        html: 'src/*.html',
        js: 'src/js/*.js',
        css: 'src/less/*.less',
        img: 'src/images/**/*.*',
        fonts: 'src/css/fonts/**/*.*'
    },
    watch: { // За изменениями каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        css: 'src/less/**/*.less',
        img: 'src/images/**/*.*',
        fonts: 'src/css/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    })
});

// Запуск предпроцессор;
gulp.task('less', function() {
    return gulp.src('src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(debug({title: 'LESS source'})) // Отслеживание исходника styles
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('html:build', function () {
    gulp.src(path.src.html) // Выберем файлы по нужному пути
        .pipe(rigger()) // Прогоним через rigger
        .pipe(gulp.dest(path.build.html)); // Переместим их в папку build
        //.pipe(browserSync.reload({stream:true}));
});


gulp.task('js:build', function () {
    gulp.src(path.src.js) // Выберем файлы по нужному пути
        .pipe(rigger()) // Прогоним через rigger
       // .pipe(uglify()) // Сожмем js
        .pipe(gulp.dest(path.build.js)); // Переместим готовый файл в build
});


gulp.task('css:build', function () {
    gulp.src(path.src.css) // Выберем наш style.less
        .pipe(less()) // Скомпилируем
        .pipe(prefixer()) // Добавим вендорные префиксы
      //  .pipe(cssnano({zindex: false})) // Сожмем
        .pipe(gulp.dest(path.build.css)); // Переместим в build
});


gulp.task('image:build', function () {
    gulp.src(path.src.img) // Выберем наши картинки
        .pipe(imagemin({ // Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))

        .pipe(gulp.dest(path.build.img)); // Переместим в build
});


gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts)) // Переместим шрифты в build
});

// Очистка папки;
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});


gulp.task('build', [
    'html:build',
    'js:build',
    'css:build',
    'fonts:build',
    'image:build'
]);

// Запускаем обе команды;
gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
    // ...

});

// Компиляция проект;
gulp.task('watch',['browserSync', 'less'], function() {

     // Автообновления браузер;
    gulp.watch('src/less/**/*.less', ['less']);

    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build',browserSync.reload);
    });

    watch([path.watch.css], function(event, cb) {
        gulp.start('css:build',browserSync.reload);
    });

    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build',browserSync.reload);
    });

    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });

    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });

});

