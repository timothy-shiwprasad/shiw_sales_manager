
FROM  node:18-bullseye

RUN apt-get update
WORKDIR  /app

COPY . ./

<<<<<<< HEAD
RUN npm i
=======
RUN npm install
RUN npm install create-remix@latest --save-dev

>>>>>>> ff5394892a194844c4b71d81b7b95f8f152d0efd
# RUN npm run build


CMD ["npm","run","dev"] # will launch the remix app when we run this Docker image.