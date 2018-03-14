# lamdba-mongodb
Sample project of ToDo List using Lambda AWS with Node.js, MongoDB, Express and Gateway API

# Setup
## 1 - Install the NODE.JS v6.10.3
The current support [AWS Lambda Node.js Runtime](https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html) is v6.10.1.

To manage different versions of Node.js use the [Node Version Manager - nvm](https://github.com/creationix/nvm).

After installing npm, install version 6.10.3 of Node.js:
```sh
nvm install v6.10.3
```

To use v6.10.3 on the terminal the project will be run, run the following command:
```sh
nvm use v6.10.3
```

## 2 - Install the dependencies
```sh
npm install
```

## 3 - Envirements to running local
### 3.1 Create file .env 
```sh
> touch .env
```
### 3.2 Add env on file .env
```
MONGODB_CONNECTION_STRING=
```

## 4 Running local
```sh
> node scripts/run.debug.js
```

# Deploy on AWS with [Serverless Framework](https://serverless.com/)
Serverless is a toolkit for deploying and operating serverless architectures.
## 1 - Install Serverless Framework and config your credentials
```sh
> npm install -g serverless
> serverless config credentials --provider aws --key YOUR_KEY --secret YOUR_SECRET_KEY
```
## 2 - Create a Buckent to store all the deployment artifacts
## 3 - Deploy
```sh
> MONGODB_CONNECTION_STRING=YOUR_CONNECTION_STRING DEPLOYMENT_BUCKET=YOUR_DEPLOYMENT_BUCKET serverless deploy
```

# Sample of cRUL request to API
## Create a ToDo
```sh

```

## Get ToDo List
```sh

```