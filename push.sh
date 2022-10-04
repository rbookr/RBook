# push to vps
rsync -av --progress --delete --exclude '.git' ./.vitepress/dist/  rbook:~/RBook/www
cd ./.vitepress/dist
/usr/bin/rm -rf .git
git init
git remote add origin git@github.com:rbookr/RBook.git
git remote add gitee git@gitee.com:Rainboy/RBook.git
git add .
git commit -m "gitpage"
git push origin master:gh-pages -f
git push gitee master:gh-pages -f
ssh jifang_server2 "~/scripts/update_rbook.sh"
#rsync -av --progress --delete --exclude '.git' ./.vitepress/dist/  jifang_server2:~/RBook/
