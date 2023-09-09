
FROM  node:18-bullseye

RUN apt-get update
WORKDIR  /app

COPY . ./

RUN npm install
RUN npm install create-remix@latest --save-dev

# RUN npm run build


CMD ["npm","run","dev"] # will launch the remix app when we run this Docker image.