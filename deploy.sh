#!/usr/bin/env sh
echo "Getting ready for deployment"
git push git@github.com:miguel-rivas/2021-vue.git --delete gh-pages
npm run build
cd dist || exit
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:miguel-rivas/2021-vue.git master:gh-pages