
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('connect', function() {
    connect.server({
        port: 8001,
        livereload: true
    });
});

/* Concat multi js files, and uglify them. */
function minJs(filename, dir, files) {
  return gulp.src(files)
    .pipe(concat(filename))
    .pipe(gulp.dest(dir))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir));
}

var files = {
  mainJs: [
    'app/library/domReady.js',
    'app/library/bootstrap.js',
    'app/library/app.js',
    'app/library/ngRoute.js',
    'app/library/main.js',
    'app/library/routes.js'
  ],
  angular: [
    'bower_components/angular/angular.min.js',
    'bower_components/angular-cookies/angular-cookies.min.js',
    // 'bower_components/angular-translate/angular-translate.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'bower_components/oclazyload/dist/ocLazyLoad.require.min.js'
  ]
}

var frameworks = [
  'app/framework/**/*.js'
];

var require = [
  'bower_components/requirejs/require.js'
];

gulp.task('angular', function() {
  return minJs('angular.lib.min.js', 'dist/lib', files.angular);
});

/* Get main.min.js for require.js data-main */
gulp.task('require-main', function() {
  return minJs('main.min.js', 'app', files.mainJs);
});

gulp.task('require', function() {
  return minJs('require.min.js', 'dist/lib', require);
});

gulp.task('framework', function() {
  return minJs('framework.min.js', 'dist/lib', frameworks);
});

gulp.task('watch-require-main', function() {
  gulp.watch(files.mainJs, [ 'require-main' ]);
});

gulp.task('watch-framework', function() {
  gulp.watch(frameworks, [ 'framework' ]);
})

gulp.task('watch', [ 'watch-require-main', 'watch-framework' ]);

gulp.task('build', [ 'require-main' ]);

gulp.task('server', ['connect']);
