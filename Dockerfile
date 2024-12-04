FROM node:18.20.5-alpine

WORKDIR /app

EXPOSE 3000

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm run build

CMD ["node", ".next/standalone/server.js"]
