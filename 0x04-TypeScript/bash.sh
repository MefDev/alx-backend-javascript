#!/bin/bash
npx eslint --fix *.js
git add .
git commit -m "pushing all files"
git push origin main
