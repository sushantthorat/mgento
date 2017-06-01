/**
* Acumen - Magento Theme
* http://gravitydept.com/to/acumen
*
* @author     Brendan Falkowski
* @package    gravdept_acumen
* @copyright  2010-2016 Gravity Department. All rights reserved.
* @version    2.0.0
*/


// ==============================================
// Require Packages
// ==============================================

var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var del          = require('del');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var jshint       = require('gulp-jshint');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');


// ----------------------------------------------
// Environment Detection
// Run as "gulp --production" to prevent notifications on server.
// See: http://journal.toddsmithsalter.com/a-simple-gulp-build-task/

var flags = require('minimist')(process.argv.slice(2));
var isProduction = flags.production || flags.prod || false;


// ----------------------------------------------
// Config

var path = {
    assets: 'skin/frontend/gravdept/acumen/'
};

var config = {
    tasks: {
        css: {
            autoprefixerOptions: {
                browsers: [
                    'last 2 versions',
                    'safari 6',
                    'ie >= 9',
                    'opera 12.1',
                    'ios 6',
                    'android 4'
                ],
                cascade: false,
                supports: false // See: https://github.com/filamentgroup/select-css/issues/17
            },
            dest: path.assets + 'css',
            sassOptions: {
                outputStyle: 'compressed'
            },
            src: path.assets + 'scss/**/*.scss'
        },
        jsHint: {
            src: [
                path.assets + 'js/src/**/*.js',
                '!' + path.assets + 'js/src/vendor/**',
                '!' + path.assets + 'js/src/opcheckout.js'
            ]
        },
        jsMinify: {
            dest: path.assets + 'js/min',
            src: [
                'js/varien/product.js',
                'skin/frontend/base/default/js/bundle.js',
                path.assets + 'js/src/**/*.js'
            ]
        },
        jsModuleAppPost: {
            dest: path.assets + 'js/build',
            src: [
                path.assets + 'js/src/vendor/jquery-3.2.0.min.js',    //                 Before: app.js
                path.assets + 'js/src/vendor/enquire.min.js',         //                 Before: app.js   Required for "scroll-x" pattern. Also see: /gravdept/js/post.phtml
                path.assets + 'js/src/vendor/gravdept.functions.js',  // After: jQuery   Before: app.js
                path.assets + 'js/src/vendor/gravdept.modal.js',      // After: jQuery   Before: app.js
                path.assets + 'js/src/vendor/gravdept.user-agent.js', //                 Before: app.js
                path.assets + 'js/src/vendor/fitvids.js',             // After: jQuery   Before: app.js
                path.assets + 'js/src/vendor/owl.carousel.min.js',    // After: jQuery   Before: app.js
                path.assets + 'js/src/app.js',                        // After: jQuery
                path.assets + 'js/src/app-header.js',                 // After: jQuery
                path.assets + 'js/src/app-footer.js',                 // After: jQuery
                path.assets + 'js/src/app-ui.js'                      // After: jQuery
            ]
        },
        jsModuleAppPostDefer: {
            dest: path.assets + 'js/build',
            src: [
                path.assets + 'js/src/vendor/picturefill.min.js'
            ]
        },
        jsModuleAppPre: {
            dest: path.assets + 'js/build',
            src: [
                'js/prototype/prototype.js',
                'js/lib/ccard.js',
                'js/prototype/validation.js',
                path.assets + 'js/src/prototype/validation.js', // Override core methods
                'js/scriptaculous/effects.js',
                'js/scriptaculous/controls.js',
                'js/varien/js.js',
                'js/varien/form.js',
                path.assets + 'js/src/varien/form.js', // Override core methods
                'js/mage/translate.js',
                'js/mage/cookies.js',
                'js/varien/weee.js',
                path.assets + 'js/src/vendor/modernizr.custom.min.js'
            ]
        },
        jsModuleCart: {
            dest: path.assets + 'js/build',
            src: [
                path.assets + 'js/src/cart.js'
            ]
        },
        jsModuleCatalog: {
            dest: path.assets + 'js/build',
            src: [
                path.assets + 'js/src/catalog.js'
            ]
        },
        jsModuleCheckout: {
            dest: path.assets + 'js/build',
            src: [
                //'js/mage/directpost.js', // Required for Authorize.net DirectPost. See: authorizenet.xml
                //'js/mage/centinel.js',
                //'js/calendar/calendar.js',
                //'js/calendar/calendar-setup.js',
                'js/varien/accordion.js',
                'skin/frontend/base/default/js/opcheckout.js',
                path.assets + 'js/src/opcheckout.js'
            ]
        },
        jsModuleProduct: {
            dest: path.assets + 'js/build',
            src: [
                path.assets + 'js/src/vendor/photoswipe.min.js',
                path.assets + 'js/src/vendor/photoswipe-ui-default.min.js',
                path.assets + 'js/src/product.js'
            ]
        }
    }
}


// ==============================================
// Report Error
// See: https://github.com/mikaelbr/gulp-notify/issues/81
// ==============================================

var reportError = function (error) {
    // [log]
    //console.log(error);

    // Format and ouput the whole error object
    //console.log(error.toString());


    // ----------------------------------------------
    // Pretty error reporting

    var report = '\n';
    var chalk = gutil.colors.white.bgRed;

    if (error.plugin) {
        report += chalk('PLUGIN:') + ' [' + error.plugin + ']\n';
    }

    if (error.message) {
        report += chalk('ERROR:\040') + ' ' + error.message + '\n';
    }

    console.error(report);


    // ----------------------------------------------
    // Notification

    if (error.line && error.column) {
        var notifyMessage = 'LINE ' + error.line + ':' + error.column + ' -- ';
    } else {
        var notifyMessage = '';
    }

    notify({
        title: 'FAIL: ' + error.plugin,
        message: notifyMessage + 'See console.',
        sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
    }).write(error);

    gutil.beep(); // System beep (backup)


    // ----------------------------------------------
    // Prevent the 'watch' task from stopping

    this.emit('end');
}



// ==============================================
// Default
// ==============================================

gulp.task('default', ['clean'], function () {
    gulp.start('css');
    gulp.start('jsMinify');
    gulp.start('jsModuleAppPost');
    gulp.start('jsModuleAppPostDefer');
    gulp.start('jsModuleAppPre');
    gulp.start('jsModuleCart');
    gulp.start('jsModuleCatalog');
    gulp.start('jsModuleCheckout');
    gulp.start('jsModuleProduct');
});



// ==============================================
// Clean
// ==============================================

// Delete old generated files.
// Return a "promise" to ensure completion before proceeding to generation tasks.
// See: https://github.com/sindresorhus/del/releases/tag/v2.0.0

gulp.task('clean', function () {
    return del([
        path.assets + 'js/build',
        path.assets + 'js/min'
    ]);
});



// ==============================================
// CSS
// ==============================================

gulp.task('css', function () {
    return gulp.src(config.tasks.css.src)
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: reportError
        }))
        .pipe(sass(config.tasks.css.sassOptions))
        .pipe(autoprefixer(config.tasks.css.autoprefixerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tasks.css.dest))
        .pipe(gulpif(!isProduction, notify({
            title: 'CSS',
            message: '<%= file.relative %>',
            onLast: true
        })));
});



// ==============================================
// JS - Hint
// ==============================================

gulp.task('jsHint', function () {
    return gulp.src(config.tasks.jsHint.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .on('error', reportError);
});



// ==============================================
// JS - Minify
// ==============================================

gulp.task('jsMinify', function () {
    return gulp.src(config.tasks.jsMinify.src)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.tasks.jsMinify.dest))
        .pipe(gulpif(!isProduction, notify({
            title: 'JS: Minify',
            message: 'Done',
            onLast: true
        })))
        .on('error', reportError);
});



// ==============================================
// JS - Module - App Post
// ==============================================

gulp.task('jsModuleAppPost', function () {
    return gulp.src(config.tasks.jsModuleAppPost.src)
        .pipe(concat('module-app-post.js'))
        //.pipe(gulp.dest(path.assets + 'js/build'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.tasks.jsModuleAppPost.dest))
        .pipe(gulpif(!isProduction, notify({
            title: 'JS: Module: App Post',
            message: '<%= file.relative %>'
        })))
        .on('error', reportError);
});



// ==============================================
// JS - Module - App Post Defer
// ==============================================

gulp.task('jsModuleAppPostDefer', function () {
    return gulp.src(config.tasks.jsModuleAppPostDefer.src)
        .pipe(concat('module-app-post-defer.js'))
        //.pipe(gulp.dest(path.assets + 'js/build'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.tasks.jsModuleAppPostDefer.dest))
        .pipe(gulpif(!isProduction, notify({
            title: 'JS: Module: App Post Defer',
            message: '<%= file.relative %>'
        })))
        .on('error', reportError);
});



// ==============================================
// JS - Module - App Pre
// ==============================================

gulp.task('jsModuleAppPre', function () {
    return gulp.src(config.tasks.jsModuleAppPre.src)
        .pipe(concat('module-app-pre.js'))
        //.pipe(gulp.dest(path.assets + 'js/build'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.tasks.jsModuleAppPre.dest))
        .pipe(gulpif(!isProduction, notify({
            title: 'JS: Module: App Pre',
            message: '<%= file.relative %>'
        })))
        .on('error', reportError);
});



// ==============================================
// JS - Module - Cart
// ==============================================

gulp.task('jsModuleCart', function () {
    return gulp.src(config.tasks.jsModuleCart.src)
        .pipe(concat('module-cart.js'))
        //.pipe(gulp.dest(path.assets + 'js/build'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.tasks.jsModuleCart.dest))
        .pipe(gulpif(!isProduction, notify({
            title: 'JS: Module: Cart',
            message: '<%= file.relative %>'
        })))
        .on('error', reportError);
});



// ==============================================
// JS - Module - Catalog
// ==============================================

gulp.task('jsModuleCatalog', function () {
    return gulp.src(config.tasks.jsModuleCatalog.src)
        .pipe(concat('module-catalog.js'))
        //.pipe(gulp.dest(path.assets + 'js/build'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.tasks.jsModuleCatalog.dest))
        .pipe(gulpif(!isProduction, notify({
            title: 'JS: Module: Catalog',
            message: '<%= file.relative %>'
        })))
        .on('error', reportError);
});



// ==============================================
// JS - Module - Checkout
// ==============================================

gulp.task('jsModuleCheckout', function () {
    return gulp.src(config.tasks.jsModuleCheckout.src)
        .pipe(concat('module-checkout.js'))
        //.pipe(gulp.dest(path.assets + 'js/build'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.tasks.jsModuleCheckout.dest))
        .pipe(gulpif(!isProduction, notify({
            title: 'JS: Module: Checkout',
            message: '<%= file.relative %>'
        })))
        .on('error', reportError);
});



// ==============================================
// JS - Module - Product
// ==============================================

gulp.task('jsModuleProduct', function () {
    return gulp.src(config.tasks.jsModuleProduct.src)
        .pipe(concat('module-product.js'))
        //.pipe(gulp.dest(path.assets + 'js/build'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.tasks.jsModuleProduct.dest))
        .pipe(gulpif(!isProduction, notify({
            title: 'JS: Module: Product',
            message: '<%= file.relative %>'
        })))
        .on('error', reportError);
});



// ==============================================
// Watch
// ==============================================

gulp.task('watch', function () {
    // Run "default" immediately
    gulp.start('default');

    // CSS
    gulp.watch(config.tasks.css.src, ['css']);

    // JS
    gulp.watch(config.tasks.jsMinify.src,             ['jsMinify']);
    gulp.watch(config.tasks.jsModuleAppPre.src,       ['jsModuleAppPre']);
    gulp.watch(config.tasks.jsModuleAppPost.src,      ['jsModuleAppPost']);
    gulp.watch(config.tasks.jsModuleAppPostDefer.src, ['jsModuleAppPostDefer']);
    gulp.watch(config.tasks.jsModuleCart.src,         ['jsModuleCart']);
    gulp.watch(config.tasks.jsModuleCatalog.src,      ['jsModuleCatalog']);
    gulp.watch(config.tasks.jsModuleCheckout.src,     ['jsModuleCheckout']);
    gulp.watch(config.tasks.jsModuleProduct.src,      ['jsModuleProduct']);
});
