FROM node:8-alpine

RUN mkdir /app

WORKDIR /app

ADD ./ /app

RUN yarn install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start:prod"]
