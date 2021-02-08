# FROM node:14.14.0-alpine

# LABEL version="1.0"
# LABEL description="This is a base docker image for Targeted portfolio API"

# WORKDIR /app/portfolio

# COPY package.json ./

# RUN yarn install

# COPY . .

# EXPOSE 2888

# CMD [ "yarn", "start:backend" ]

# Production build combining the two apps
# Build the react app phase

FROM node:alpine 
WORKDIR /app/portfolio
COPY /target-portfolio/package.json ./
RUN yarn install
COPY /target-portfolio .
RUN yarn build

# Start second phase

FROM node:14.14.0-alpine
COPY --from=0 /app/portfolio/build /app/portfolio/client/build
WORKDIR /app/portfolio

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 2888

CMD [ "yarn", "start:backend" ]
