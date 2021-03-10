FROM node:alpine 
WORKDIR /app/portfolio
COPY ./portfolio-frontend/package.json ./
RUN yarn install
COPY ./portfolio-frontend .
RUN yarn build

# Start second phase

FROM node:14.14.0-alpine
COPY --from=0 /app/portfolio/build /app/portfolio/client/build
WORKDIR /app/portfolio

COPY ./portfolio-backend/package.json ./

RUN yarn install

COPY ./portfolio-backend .

EXPOSE 2888

CMD [ "yarn", "start:backend" ]
