# Utiliser l'image Node
FROM node:20.6.1

# Créer un répertoire de travail
WORKDIR /app

# Copier le package.json et le package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application dans le répertoire de travail
COPY . /app

# Exposer le port
EXPOSE 3001

# Commande pour démarrer
CMD [ "npm", "run", "start:dev" ]

# Pour lancer : docker build -t vulnerable-website .
# Puis : docker run -p 3000:3000 vulnerable-website