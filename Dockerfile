FROM node:20-alpine
WORKDIR /app
COPY package*.json ./

#В случае ошибки SELF_SIGNED_CERT_IN_CHAIN во время запуска "npm install"
#RUN npm set strict-ssl false
#RUN npm config set registry="http://registry.npmjs.org/"

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    zlib-dev \
    autoconf \
    automake \
    libtool \
    nasm \
    bash


RUN npm install -f
COPY . .

#RUN npm run build

ENV PORT 443

CMD ["npm", "run", "dev"]
