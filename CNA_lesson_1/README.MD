# Pre-requisites # 
1) ```npm install --save```

# Run the first application to do hello world # 

1) ```node 1_hello_world_server.js```

2) go to chrome and type in ```localhost:3000```

you should see a hello world on your main page

# Run the second application to connect to mongoDB # 

1) ```MONGODB_URL='mongodb://<db_ip>:27017/' node 2_node_mongo.js```

2) go to ```<ip>:3000```. If you are running locally its ```localhost:3000```

You should see the image as below

![alt text](https://github.com/leeadh/CNA_Lesson/blob/master/CNA_lesson_1/public/images/hrapp.png)

# Run our chat room application connected to mongoDB # 

1) ```MONGODB_URL='mongodb://<db_ip>:27017/' node 3_node_chatroom_mongo.js```

2) go to ```<ip>:3000```. If you are running locally its ```localhost:3000```

![alt text](https://github.com/leeadh/CNA_Lesson/blob/master/CNA_lesson_1/public/images/chatapp.png)

# Deploying our application to cloud # 

1) create an instance on AWS/vsphere/Azure. This assumes you know how to create instances. 

2) Perform the necessary steps as above

![alt text](https://github.com/leeadh/CNA_Lesson/blob/master/CNA_lesson_2/public/images/Party-Poppers-icon.png)
***Congratulations! you have completed module 1***