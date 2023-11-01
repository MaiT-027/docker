FROM node:20-alpine

RUN apk add --no-cache yarn

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile

COPY . /app

ENTRYPOINT [ "yarn", "start" ]