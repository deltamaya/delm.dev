#!/bin/zsh

# 定义变量
PROJECT_DIR=~/home_site
BUILD_DIR=build
SERVICE_NAME=home

# 切换到项目目录
cd $PROJECT_DIR || { echo "目录 $PROJECT_DIR 不存在！"; exit 1; }

# 加载环境变量
source ~/.zshrc
export PATH=$PATH:/usr/local/bin
# 更新代码
echo "拉取最新代码..."
git pull || { echo "git pull 失败！"; exit 1; }

# 安装依赖
echo "安装依赖..."
npm install || { echo "npm install 失败！"; exit 1; }

# 构建项目
echo "开始构建..."
npm run build || { echo "构建失败！"; exit 1; }

# 切换到构建目录
cd $BUILD_DIR || { echo "目录 $BUILD_DIR 不存在！"; exit 1; }

# 重启服务
echo "重启服务 $SERVICE_NAME..."
pm2 restart $SERVICE_NAME || { echo "pm2 重启服务失败！"; exit 1; }

# 保存 pm2 配置
echo "保存 pm2 配置..."
pm2 save || { echo "pm2 配置保存失败！"; exit 1; }

echo "部署完成！"