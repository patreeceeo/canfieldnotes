#!/bin/bash
if [[ ! -d data ]]; then
  git clone https://github.com/patreeceeo/canfieldnotes-data data
fi

cd data
npm install
npm run build
cd ..

solid-start build
