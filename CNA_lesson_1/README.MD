# Run the first application to do hello world # 

1) node 1_hello_world_server.js

2) go to localhost:3000

you should see a hello world on your main page

# Run the second application to connect to mongoDB # 

1) MONGODB_URL='mongodb://<db_ip>:27017/' node 2_node_mongo.js

2) go to <ip>:3000. If you are running locally its localhost:3000

![alt text](https://github.com/leeadh/CNA_Lesson/blob/master/CNA_lesson_1/public/images/hrapp.png)

# Deploying our application to  cloud # 

1) create an instance on AWS/vsphere/Azure

2) git clone https://github.com/leeadh/CNA_Lesson.git

3) cd CNA_lesson_1 and do npm install --save

4) node 2_node_mongo.js

5) server at your public url:4000
