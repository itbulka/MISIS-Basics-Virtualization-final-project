FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY tsconfig.json ./
RUN npm run build

FROM node:16-alpine
WORKDIR /app
RUN npm install -g pm2
COPY --from=build /app/dist ./dist
COPY package*.json ./
COPY ecosystem.config.js ./
RUN npm install --only=production
EXPOSE 3001
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
