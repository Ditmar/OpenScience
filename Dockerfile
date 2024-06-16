FROM node:18-alpine
WORKDIR /app
RUN echo "node version " && node -v
COPY package.json yarn.lock ./
COPY . .
RUN yarn install --frozen-lockfile
EXPOSE 3000
CMD ["node", "app-server/server.mjs"]