# Production build combining the two apps
# Build the react app phase

FROM node:alpine 
WORKDIR /app/portfolio
COPY /target-portfolio/package.json ./
RUN yarn install
COPY /target-portfolio .
RUN yarn build

# Start second phase

FROM node:alpine
COPY --from=0 /app/portfolio/build /app/portfolio/client/build
WORKDIR /app/portfolio

COPY /portfolio-backend/package.json ./

RUN yarn install

COPY /portfolio-backend .

EXPOSE 2888

CMD [ "yarn", "start:backend" ]
