var gulp =require("gulp"),
    uglify=require("gulp-uglify"),
    sass=require("gulp-sass"),
    plumber=require("gulp-plumber"),
    livereload=require("gulp-livereload"),
    imagemin=require("gulp-imagemin"),
    prefix=require("gulp-autoprefixer");

//Scripts Task
//uglify
gulp.task("scripts",function () {
    gulp.src("js/*.js")
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest("build/js"));
});

//Style Task
gulp.task("styles", function() {
    gulp.src("sass/**/*.scss")
        .pipe(plumber())
        .pipe(sass({
            outputStyle:"compressed"
        }).on("error", sass.logError))
        .pipe(prefix("last 2 versions"))
        .pipe(gulp.dest("./css"))
        .pipe(livereload());
});

//Image Task
gulp.task("image", function() {
    gulp.src("img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("build/img"));

});

//watch Task
//watch Js css
gulp.task("watch",function () {
    //need to setup liveReload in client browser
    livereload.listen();

    gulp.watch("js/*.js",["scripts"]);
    gulp.watch("sass/**/*.scss",['styles']);
});

gulp.task("default",["scripts","styles","watch"]);

default",["style"]);