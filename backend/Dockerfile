FROM node:20.6.1

RUN mkdir -p /node/app/node_modules

WORKDIR /node/app

COPY package*.json ./

RUN chown -R node:node /node/app

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "npm", "run", "start:dev" ]

# Pour lancer : docker build -t online-command-shell .
# Puis : docker run -p 3000:3000 online-command-shell