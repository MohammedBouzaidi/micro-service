FROM node:20.13.0-alpine3.18
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD [ "node", "index.js" ]