# clash.service
Linux Clash + PM2 Quick Deploy

## 依赖环境
- Nodejs
  - apt install nodejs or use nvm
- PM2
  - npm install -g pm2

## 使用操作
1. git clone git@github.com:ImChrisChen/clash.service.git
2. cd ./clash.service
3. chmod +x ./clash
4. pm2 start ecosystem.config.js


## 更新clash版本
下载替换最新的 https://github.com/Dreamacro/clash/releases

按照对应版本下载即可，然后解压完成重命名为clash，替换仓库内的clash

<img width="1358" alt="image" src="https://github.com/ImChrisChen/clash.service/assets/34195404/b9b938b4-588a-4b87-8900-643f09ffd079">
