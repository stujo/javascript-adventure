#!/bin/sh

echo 'Pushing master to origin/master...'
git push origin master

echo 'Pushing origin/master to origin/gh-pages...'
git push origin origin/master:gh-pages

