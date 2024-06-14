
#todo: fix dockerfile
FROM node:18-alpine
WORKDIR /app
RUN node -v
COPY package.json yarn.lock ./
COPY . .
EXPOSE 3000
CMD ["node", "app-server/server.mjs"]