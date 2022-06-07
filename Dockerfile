FROM node AS builder
ARG BASE_URL
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run parcel build src/index.html

FROM joseluisq/static-web-server:2-alpine

COPY --from=builder /app/dist /public

CMD ["static-web-server", "--port=80", "--root=/public", "--page-fallback=/public/index.html"]

ENTRYPOINT []

