#!/bin/bash
if [[ ! -d data ]]; then
  git clone https://github.com/patreeceeo/canfieldnotes-data data
fi

solid-start build
