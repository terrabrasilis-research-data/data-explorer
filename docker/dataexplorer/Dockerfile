FROM node:12.16.0

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
COPY . /app

RUN npm install && npm install -g @angular/cli@7.3.9 --unsafe-perm

ENTRYPOINT [ "ng" ]
CMD [ "serve", "--host", "0.0.0.0" ]
