FROM node:23-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

FROM nginx:alpine

COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.sh"]