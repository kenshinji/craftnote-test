# Directions Steering Application

## **How to run this application**

### **Run this application as development mode.**

 ```
 npm install && npm run dev
 ```

### **Run this application as production mode.**

 ```
 npm install && npm start
 ```

### **Run this application as Docker container.**
 
First build the docker image.

 ```
 docker build -t <tag_name> .
 ```
   
Then run it as below

 ```
 docker run -p <EXTERNAL_MAPPING_PORT>:<SERVER_PORT> <tag_name>
 ```

### **Configuration**

You can configure server's port by specify environment variable `PORT`, or by `ENV PORT={SERVER_PORT}` from `Dockerfile`, and if you are going to run this applicaiton as Docker container.

## **How to run tests**

Make sure your node.js version >= 10.0.0, then run tests by following command.

```
npm test
```
