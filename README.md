## Modification
在`plugins/myGlobalVariable .ts`配置：`Vue.prototype.$myGlobalVariable = 'YOUR ICP NUMBER';`

图片信息可以在`pages`修改

## Deployment and running

`git clone https://github.com/HanSanCoder/hansan_homepage.git && cd hansan_homepage && ./start.sh`

你可能需要给start.sh可执行权限
`chmod +x start.sh`

## Docker
`docker build -t nuxt-home .`

这将根据 Dockerfile 中的定义构建一个名为 nuxt-home 的 Docker 镜像。

`docker run --name nuxt-homepage --restart=always -p 3000:3000 -d nuxt-home`

这会在端口 3000 上运行 Nuxt.js 项目的容器。
## License
[MIT © HeHanSan-2023](./LICENSE)
