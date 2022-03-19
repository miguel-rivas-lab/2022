echo "Getting ready for deployment"
git push git@github.com:miguel-rivas/2022.git --delete gh-pages
npm run build
cd dist || exit
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:miguel-rivas/2022.git master:gh-pages