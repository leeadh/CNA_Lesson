# Pre-requisites # 

1) Create a docker hub account here : https://hub.docker.com/

2) create a repo for example ```leexha/node_cna``` in docker hub. it will follow as ```<username>/<repo_name>```

3) Please ensure you have docker installed on your local machine

- if you are using mac you can follow this guide to install: https://docs.docker.com/docker-for-mac/install/
- if you are using windows you can follow this  guide to install: https://docs.docker.com/docker-for-windows/ 

4) To check if you have docker installed please do ```docker ps``` and do a sample ```docker run hello-world```

5) We will now create our docker file as below

# Steps to create docker file # 

1) Creating our Docker file. From the directory of ```CNA_lesson_2```, create a Dockerfile and please ensure your file is named as below ```Dockerfile```. Paste the below inside

```
FROM node:latest
ENV MONGODB_URL=${MONGODB_URL}
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD ["node", "2_node_mongo.js"]
```
2) DO a ```docker build -t leexha/node_cna:latest .``` Depending on what you have named your repo, replace ```leexha/node_cna``` with your own ```<username>/<repo_name>```

3) ```docker push leexha/node_cna```
