// Imports section
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify-es').default;

// End imports section
// Define the paths to your CSS files
const paths = {
    scss: ['css/**/*.scss'],
    css: ['css/**/*.css', '!css/site.min.css'],
    cssDest: 'css/',
    js: ['js/**/*.js', '!js/site.min.js'],
    jsDest: 'js/'
};

// Compile SCSS to CSS
function compileSCSS() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
        .pipe(gulp.dest(paths.cssDest)); // Output CSS to the destination folder
}

// Combine and minify CSS task
function combineAndMinifyCSS() {
    return gulp.src([
        'css/**/*.css',
        '!css/site.min.css'
    ], { sourcemaps: true })
        .pipe(concat('site.css')) // Combine all CSS files into one file named site.css
        .pipe(cleanCSS({ compatibility: 'ie8' })) // Minify the combined CSS file
        .pipe(rename({ suffix: '.min' })) // Rename the minified file to site.min.css
        .pipe(gulp.dest(paths.cssDest)); // Save the minified file to the destination folder
}

// Combine and minify js task
function combineAndMinifyJs() {
    return gulp.src([
        'js/**/*.js',
        '!js/site.min.js'
    ])
        .pipe(concat('site.js')) // Combine all JS files into one file named site.js
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' })) // Rename the minified file to site.min.js
        .pipe(gulp.dest(paths.jsDest)); // Save the minified file to the destination folder
}

// Watch files for changes
function watchFiles() {
    gulp.watch(paths.scss, gulp.series(compileSCSS, combineAndMinifyCSS));
    gulp.watch(paths.css, combineAndMinifyCSS);
    gulp.watch(paths.js, combineAndMinifyJs);
}


// Tasks section
gulp.task("default", gulp.series(compileSCSS, combineAndMinifyCSS, combineAndMinifyJs, watchFiles));

gulp.task("build", gulp.series(compileSCSS, combineAndMinifyCSS, combineAndMinifyJs));
// End tasks section

