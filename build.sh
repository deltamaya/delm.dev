git pull
npm install
npm run build
cd build
pm2 kill
pm2 start index.js --name 'home'
pm2 save