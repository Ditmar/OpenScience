
FROM node:18-alpine
WORKDIR /app
RUN npm  install -g yarn@1.22.19
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["node", "app-server/server.mjs"]