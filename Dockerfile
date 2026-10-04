# Stage 1: Build Frontend and Server
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build Vite frontend
RUN npm run build

# Stage 2: Production Runner
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy dependencies and build outputs
COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/src ./src

# Install tsx globally or locally to run TypeScript server
RUN npm install -g tsx

EXPOSE 3000

CMD ["tsx", "server.ts"]
