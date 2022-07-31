cd ./.vitepress/dist
/usr/bin/rm -rf .git
git init
git remote add origin git@github.com:rbookr/RBook.git
git add .
git commit -m "gitpage"
git push origin master:gh-pages -f
