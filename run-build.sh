#!/bin/bash
rm -rf data
git clone https://github.com/patreeceeo/canfieldnotes-data data --depth 1

cp -an data/assets public/a

cd data
./run-build.sh
cd ..

solid-start build
