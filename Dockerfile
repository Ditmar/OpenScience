FROM node:18-alpine
WORKDIR /app
RUN echo "node version " && node -v
COPY package.json yarn.lock ./
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build
EXPOSE 3000
CMD ["node", "app-server/server.mjs"]