#!/bin/bash

npm run build

git add .
git commit -m "Deploy"
git push

