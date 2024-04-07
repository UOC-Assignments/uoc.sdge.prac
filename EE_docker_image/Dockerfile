#Download base image ubuntu 18.04
FROM ubuntu:18.04

# LABEL about the custom image
LABEL maintainer="jbericat@uoc.edu"
LABEL version="0.1"
LABEL description="Custom docker image to run MapReduce functions on mongoDB 3.12.0 with python 3.6.9"

# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive

# Install base packages

RUN apt update
RUN apt install -y vim python3.6 python3-pip curl supervisor openssh-server git
# RUN curl -fsSL https://www.mongodb.org/static/pgp/server-4.0.asc | apt-key add -
RUN echo "deb [ trusted=yes ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" > /etc/apt/sources.list.d/mongodb-org-4.0.list
RUN apt update
RUN apt install -y mongodb-org*
RUN python3 -m pip install pymongo==3.12.0

# Define the ENV variable
ENV supervisor_conf /etc/supervisor/supervisord.conf

# Copy supervisor configuration
COPY supervisord.conf ${supervisor_conf}

# Volume configuration
VOLUME ["/home/runner"]

# Copy mongoDB config & data
COPY mongod.conf /etc/mongod.conf
COPY mongo_db_data.agz /tmp/mongo_db_data.agz

# Copy ssh authorization
RUN mkdir /root/.ssh \
    && echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIItUOzJSb469SS48SwUY37nKC9hMNIAGWW+IqQfymqae [beri.lab]" > /root/.ssh/authorized_keys \
    && chmod 600 /root/.ssh/authorized_keys

# Copy start.sh script and define default command for the container
COPY start.sh /start.sh
CMD ["./start.sh"]

# Expose Port for mongoDB
EXPOSE 7017 27017
EXPOSE 2222 22
