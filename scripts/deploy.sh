#!/bin/bash

clear

start_time=$(date +%s)

git add .
git commit -m "Deploying a new version"

new_version=$(npm version patch)

npm run build

git add .
git commit -m "Deploy v$new_version"

git push

end_time=$(date +%s)

execution_time=$((end_time - start_time))

echo
echo
echo
echo
echo
echo "Total execution global time: $execution_time seconds"
echo "New version: $new_version"
echo
echo
echo
echo
echo