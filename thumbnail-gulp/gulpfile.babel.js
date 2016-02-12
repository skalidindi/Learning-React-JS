'use strict';

import gulp from 'gulp';
import react from 'gulp-react';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import del from 'del';

const dirs = {
  src: './src',
  dest: './build'
};
//
// const sassPaths = {
//   src: `${dirs.src}/app.scss`,
//   dest: `${dirs.dest}/styles/`
// };

gulp.task('clean', () => {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(dirs.dest);
});

gulp.task('build', () => {
   return gulp.src(dirs.src + '**/*.jsx')
         .pipe(react({harmony: false, es6module: true}))
         .pipe(concat('application.js'))
         .pipe(babel())
         .pipe(gulp.dest(dirs.dest));

});

gulp.task('default', ['build']);
