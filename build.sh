#!/bin/sh

echo 'Building index.html ...'
node ./node_modules/markdown-to-html/bin/github-markdown -s https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css README.md > index.html

