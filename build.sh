cd ~/home_site
source ~/.zshrc
git pull
npm install
npm run build
cd build
pm2 restart home
pm2 save