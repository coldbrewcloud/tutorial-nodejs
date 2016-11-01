# Tutorial: Running Node.JS app on AWS using coldbrew-cli

This is a sample project to demonstrate how to run a Node.JS application on AWS using [coldbrew-cli](https://github.com/coldbrewcloud/coldbrew-cli).

## Getting Started

### Install Docker

[coldbrew-cli](https://github.com/coldbrewcloud/coldbrew-cli) deploys your applicaiton in [Docker containers](https://www.docker.com/what-docker). So the first step is to [install Docker](https://docs.docker.com/engine/installation/) in your system if you don't have it yet.

### Install coldbrew-cli

Download the package for your system at [here](https://github.com/coldbrewcloud/coldbrew-cli/wiki/Downloads). It makes things easier if you copy the downloaded binary `coldbrew` (or `coldbrew.exe` on Windows) in your `$PATH`, so you can run `coldbrew` from anywhere. _But it's also okay to keep `coldbrew` executable in your application directory if you want._

### AWS Account

As you will be deploying your application on AWS, you will need AWS account for sure. [Sign up](https://aws.amazon.com/) if you haven't yet, and, get your [AWS access keys](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html). You can pass AWS access keys to **coldbrew-cli** either in [environment variables](https://github.com/coldbrewcloud/coldbrew-cli/wiki/CLI-Environment-Variables) or using [CLI flags](https://github.com/coldbrewcloud/coldbrew-cli/wiki/CLI-Global-Flags), but, we will assume that you set the follow environment variables through out the turorial:

- `$AWS_ACCESS_KEY_ID`: AWS Access Key ID
- `$AWS_SECRET_ACCESS_KEY`: AWS Secret Access Key
- `$AWS_REGION`: AWS region name
- `$AWS_VPC`: AWS VPC ID _(this is completely optional. If you don't specify or don't know your VPC ID, **coldbrew-cli** will automatically use the [default VPC](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html) of your AWS account.)_

### Clone This Repo

This tutorial project contains the bare minimum _(but fully functional)_ sample resources so you can get started right away.

- A sample Node.JS application, [hello.js](https://github.com/coldbrewcloud/tutorial-nodejs/blob/master/hello.js) and [package.json](https://github.com/coldbrewcloud/tutorial-nodejs/blob/master/package.json)
- A sample [Dockerfile](https://github.com/coldbrewcloud/tutorial-nodejs/blob/master/Dockerfile) _(based on [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) article)_
- A sample **coldbrew-cli** app configuration file, [coldbrew.conf](https://github.com/coldbrewcloud/tutorial-nodejs/blob/master/coldbrew.conf)

Clone this repo:
```bash
git clone https://github.com/coldbrewcloud/tutorial-nodejs.git
cd tutorial-nodejs
```

## Creating Your First Cluster

.... (working on it)
