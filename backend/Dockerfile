FROM oven/bun:alpine

WORKDIR /app

COPY bun.lockb package.json ./
RUN bun install

COPY . .

EXPOSE 8000

CMD ["bun", "run", "index.ts"]
