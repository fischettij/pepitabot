# Builder stage
FROM node:13-alpine as builder
ENV NODE_ENV=production

WORKDIR /opt/app

COPY package.json package-lock.json /opt/app/
COPY public/ /opt/app/public
COPY src/ /opt/app/src

RUN npm install
RUN npm run build

# Deploy stage
FROM node:13-alpine
RUN apk add --no-cache bash=~5

ENV NODE_ENV=production


COPY --from=builder /opt/app/build /opt/app/
RUN npm install -g serve
WORKDIR /opt/app

EXPOSE 5000

CMD [ "serve", "-s", "."]
