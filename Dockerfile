FROM node:slim
RUN ls
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci --only=production
COPY . /app/
EXPOSE 3000
CMD [ "npm", "run", "start"]
