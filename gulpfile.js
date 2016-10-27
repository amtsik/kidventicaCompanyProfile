var gulp = require('gulp'),
    brovserSync = require('browser-sync').create(),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');

var paths = {
    cssSource: 'src/css/',
    cssDestination: 'dist/css/'
};

gulp.task('serve', function () {
    brovserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
    gulp.watch('index.html', function(){gulp.src('index.html').pipe(gulp.dest('./')).pipe(brovserSync.stream());});
    gulp.watch('css/less/*.css',['css']);
});

gulp.task('css', function (){
    gulp.src('css/less/*.css')
        .pipe(postcss([lost]))
        .pipe(gulp.dest('css'))
        .pipe(brovserSync.stream())
});

// ////////////////////////////////////////////////
// Browser-Sync
// // /////////////////////////////////////////////
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});


gulp.task('styles', function() {
    return gulp.src(paths.cssSource + 'css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            lost(),
            autoprefixer()
        ]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.cssDestination));
});

gulp.watch(paths.cssSource + '**/*.css', ['styles']);

gulp.task('default', ['serve']);