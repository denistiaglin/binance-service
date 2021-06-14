FROM node:10

ENV TZ Europe/London
RUN apt update
#RUN apt upgrade -y
#RUN apt dist-upgrade -y
#RUN apt install imagemagick -y
RUN mkdir /www
RUN mkdir /www/binance-service
WORKDIR /www/binance-service
COPY package*.json ./

RUN npm install
COPY .  .

RUN npm run build
CMD [ "npm", "run", "start" ]