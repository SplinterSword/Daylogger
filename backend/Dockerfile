FROM oven/bun:alpine

WORKDIR /app

COPY bun.lockb package.json ./

RUN bun install

COPY . .

EXPOSE 8080

CMD ["bun", "run", "index.ts"]
