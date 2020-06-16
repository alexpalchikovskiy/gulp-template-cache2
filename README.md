# gulp-template-cache2
Gulp plugin that converts HTML files into JavaScript strings that can then be accessed through a global variable.

```sh
npm i gulp-template-cache2
```

## Usage example


```javascript
const { src, dest } = require('gulp');
const cache = require('gulp-template-cache2');

exports.default = function(){
  return src('src/**/*.html')
    .pipe(cache({fileName: 'index.js'}))
    .pipe(dest('templates/'));
}
```

## And with PUG 🙂

```javascript
const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const cache = require('gulp-template-cache2');

exports.default = function(){
  return src('src/**/*.pug')
    .pipe(pug())
    .pipe(cache({fileName: 'index.js'}))
    .pipe(dest('templates/'));
}
```

## Get template

```javascript
let tmp = TemplateCache.get( 'file-name-without-extension' );
console.log( tmp )
```