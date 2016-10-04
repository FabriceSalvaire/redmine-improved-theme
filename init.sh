#! /bin/bash

cp -r ../../images/ .

mkdir fonts
pushd fonts
for i in ../vendor/fontawesome/fonts/* ; do
  ln -sf $i;
done
popd

cp -r vendor/fontawesome/scss/ private/sass/libs/fontawesome
