#!/bin/sh

echo 'Building index.html ...'
node ./node_modules/markdown-to-html/bin/github-markdown README.md > index.html

