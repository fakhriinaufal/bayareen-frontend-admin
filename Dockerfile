FROM node:12-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]