FROM node:8.9-alpine

RUN npm install --unsafe-perm -g @angular/cli findup-sync typescript
RUN apk --update add bash wget dpkg-dev

USER node
WORKDIR /home/node/project
