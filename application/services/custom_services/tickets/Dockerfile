FROM node:14.11.0-alpine
COPY . /tickets
WORKDIR /tickets
RUN npm install
RUN npm i -g ts-node
CMD npm run prod