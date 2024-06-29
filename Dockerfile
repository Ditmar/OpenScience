FROM node:18-alpine
ARG WEB_APP
ENV COMMIT_HASH=${WEB_APP}
RUN echo "Commit hash: ${COMMIT_HASH}"
WORKDIR /app
RUN echo ${COMMIT_HASH} > /app/commit.txt
RUN echo "node version " && node -v
COPY package.json yarn.lock ./
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build
EXPOSE 3000
CMD ["node", "app-server/server.mjs"]