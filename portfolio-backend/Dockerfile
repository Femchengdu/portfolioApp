FROM node:alpine

LABEL version="1.0"
LABEL description="This is a base docker image for Targeted portfolio API"

WORKDIR /app/portfolio

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 2888

CMD [ "yarn", "start:backend" ]