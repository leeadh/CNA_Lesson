FROM node:latest
ENV MONGODB_URL=${MONGODB_URL}
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD ["node", "2_node_mongo.js"]
