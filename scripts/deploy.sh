#!/bin/bash

clear

start_time=$(date +%s)

npm run build

git add .
git commit -m "Deploy"

new_version=$(npm version patch)

git push

end_time=$(date +%s)

execution_time=$((end_time - start_time))

echo
echo
echo
echo
echo
echo "Total execution global time: $execution_time seconds"
echo
echo
echo
echo
echo
echo