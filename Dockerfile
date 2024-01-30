FROM node:16-alpine

# Path: /app
WORKDIR /app

# Path: /app/package.json
COPY package.json .

# Path: /app
# RUN pnpm install
RUN npm install -g pnpm
COPY pnpm-lock.yaml .
RUN pnpm fetch
# RUN npm install pm2 -g

# Path: /app
COPY . .

# Path: /app
CMD [ "pnpm",  "dev"]