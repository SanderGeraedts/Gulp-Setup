@echo off
mkdir dist
mkdir src
cd src
mkdir img
mkdir js
mkdir scss
echo <html></html> > index.html
cd scss
echo //Sander Geraedts - Code Panda > style.scss
mkdir _partials
cd _partials
echo //Sander Geraedts - Code Panda > _header.scss
echo //Sander Geraedts - Code Panda > _content.scss
echo //Sander Geraedts - Code Panda > _footer.scss
cd ..
cd ..
cd ..
call npm init
call npm install gulp --save-dev
call npm install gulp-imagemin --save-dev
call npm install imagemin-pngquant --save-dev
call npm install gulp-uncss --save-dev
call npm install gulp-sass --save-dev
call npm install gulp-concat --save-dev
call npm install gulp-cssnano --save-dev
call npm install gulp-autoprefixer --save-dev
call npm install browser-sync --save-dev
call npm install gulp-pretty-url --save-dev
call npm install gulp-htmlmin --save-dev