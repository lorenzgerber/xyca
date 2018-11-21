FROM node:10

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get upgrade -y

ARG UNAME=testuser
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID -o $UNAME
RUN useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME
USER $UNAME
WORKDIR /home/$UNAME/

COPY  app/* ./
COPY package.json ./

RUN npm install
ENTRYPOINT ["node", "index.js"]

