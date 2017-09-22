
# sass

## install

install [ruby](http://rubyinstaller.org/downloads/) with `Add Ruby executables to your PATH`, start command prompt with ruby

```shell
$ gem install sass
# install from Taobao RubyGems
$ gem install sass --pre
# install from Git
$ git clone git://github.com/nex3/sass.git
$ cd sass
$ rake install
# updata
$ gem updata sass
```

# sass command

```shell
# single file
$ sass style.scss style.css
# watch file
$ sass --watch style.scss:style.css
# watch directory
$ sass --watch sassDir:cssDir
# watch directory with cd path
$ sass --watch .:.
# convert css into sass/scss
$ sass-convert style.css style.sass   
$ sass-convert style.css style.scss
# config
$ sass --watch style.scss:style.css --style compact              # nested | expanded | compact | compressed
$ sass --watch style.scss:style.css --sourcemap                  # .css.map
$ sass --watch style.scss:style.css --style expanded --sourcemap
$ sass --watch style.scss:style.css --debug-info
# vision
$ sass -v
# help
$ sass -h
```
## sass with gulp

```js
// sass
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('sass', function() {
    sass('src/sass/*.scss', {
            sourcemap: true
        })
        .on('error', sass.logError)
        .pipe(sourcemaps.init({debug: true}))
        .pipe(sourcemaps.write('', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('src/css'));
});
gulp.task('sass:watch', function() {
    gulp.watch('src/sass/*.scss', ['sass']);
});
```

[syntax]
postfix sass/scss
single-line comments will not be compile
</code>

<style>
/* import */
@import 'reset.css'; /* css import */
@import 'reset';     /* without postfix, sass import reset.scss or _reset.scss */
/* variables */
$fontSize: 12px;
$baseLineHeight: 2;
$baseLineHeight: 1.5 !default; /* default variables with minimum weight */
$color: #fff !global; /* global variables */
$borderDirection: top;
body {
    font-size: $fontSize;
}
.border-#{$borderDirection} {
    border-#{$borderDirection}: 1px solid #ccc; /* #{$variables} is a variables for special position */
}
$px: 5px 10px 20px 30px;                   /* array */
$px: 5px 10px, 20px 30px;                  /* multi-array */
$px: (5px 10px) (20px 30px);               /* multi-array */
a {
    height: nth($$px, 1);
}
$heading: (h1: 2em, h2: 1.5em, h3: 1.2em); /* map */
@each $header, $size in $headings {
  #{$header} {
    font-size: $size;
  }
}
/* nesting */
a{
    color: #fff;
    /* & == parent selector */
    &:hover { 
        color: #ddd;
    }
    border: {
        style: solid;
        left: {
            width: 4px;
            color: #888;
        }
    }
}
/**/
@at-root
</style>

<code-bash>

[gui]
koala http://koala-app.com/

[links]
http://www.w3cplus.com/sassguide/
http://sass-lang.com/documentation/Sass.html

http://bourbon.io/
</code>
