FROM node:alpine

LABEL version="1.0"
LABEL description="This is a base docker image for my targeted portfolio react app."

WORKDIR /app/portfolio

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]