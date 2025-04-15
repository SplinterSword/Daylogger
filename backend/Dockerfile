FROM oven/bun:alpine

WORKDIR /app

COPY bun.lock package.json ./

RUN bun install

COPY . .

EXPOSE 8080

CMD ["bun", "run", "index.ts"]
