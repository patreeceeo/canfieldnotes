#!/bin/bash
rm -rf data
git clone https://github.com/patreeceeo/canfieldnotes-data data --depth 1

cd data
./run-build.sh
cd ..

solid-start build
