rm -r -f -v public/**.html

routes=("buttons" "car" "colors" "css" "cube" "drakkar" "gallery" "gear" "grid" "house" "images" "index" "list" "locations" "minivan" "pills" "projects" "spirit" "stargaze" "statistics" "threejs" "videos" "wheel" "window" "xwing")

for f in ${routes[@]}; do
  echo "
<meta http-equiv='refresh' content='0; URL=https://miguel-rivas.github.io/2022-vue/'>
<link rel='canonical' href='https://miguel-rivas.github.io/2022-vue/'>" > public/${f}.html
done

echo "Getting ready for deployment"
git push git@github.com:miguel-rivas/2022-vue.git --delete gh-pages
npm run build
cd dist || exit
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:miguel-rivas/2022-vue.git master:gh-pages