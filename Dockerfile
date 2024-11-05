# Dockerfile

FROM node:18-alpine AS builder

WORKDIR /app

COPY my-ecommerce-site/package.json my-ecommerce-site/package-lock.json ./
RUN npm install

COPY my-ecommerce-site/ .
RUN npm run build

FROM node:18-alpine AS runner

ENV NODE_ENV=production
ENV OTEL_LOG_LEVEL=debug
ENV NEXT_TELEMETRY_DEBUG=1

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
RUN npm install --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/server.js ./

EXPOSE 4000

CMD ["node", "--require", "@opentelemetry/auto-instrumentations-node/register", "server.js"]
