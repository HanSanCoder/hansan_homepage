# 使用Node.js 16作为基础镜像
FROM node:16-alpine

# 设置工作目录
WORKDIR /app

# 复制项目文件到工作目录
COPY . .

# 安装依赖
RUN npm install

# 构建项目
RUN npm run build

# 设置运行时环境变量
ENV HOST 0.0.0.0

# 设置容器启动命令
CMD [ "npm", "start" ]
