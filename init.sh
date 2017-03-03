#! /bin/bash

mkdir fonts
pushd fonts
for i in ../vendor/fontawesome/fonts/* ; do
  ln -sf $i;
done
popd

cp -r vendor/fontawesome/scss/ src/sass/libs/fontawesome
