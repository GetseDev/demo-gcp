FROM node:20.1.0 AS DEV 

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 3000

CMD [ "npm", "start" ]