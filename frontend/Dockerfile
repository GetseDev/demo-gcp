FROM node:20.1.0 AS DEV 

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 5173

CMD [ "npm", "run", "dev" ]