FROM node:8-alpine

# PREPARE
RUN mkdir /app
WORKDIR /app

# INSTALL NPM
COPY package.json /app
COPY yarn.lock /app
RUN yarn install

# BUILD
ADD ./ /app
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
