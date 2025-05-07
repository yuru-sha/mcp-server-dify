FROM node:22.12-alpine AS builder

WORKDIR /app

# ソースコードをコピー
COPY . .

# npmキャッシュをクリア
RUN npm cache clean --force

# 依存関係をインストール
RUN npm install

# アプリケーションをビルド
RUN npm run build

# リリース用イメージ
FROM node:22-alpine AS release

WORKDIR /app

# 必要なファイルをコピー
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/package-lock.json /app/package-lock.json
COPY --from=builder /app/dist /app/dist

ENV NODE_ENV=production

# 本番用の依存関係をインストール
RUN npm ci --ignore-scripts --omit-dev

# Use a non-root user for security (optional)
RUN adduser -D mcpuser
USER mcpuser

# アプリケーションを実行
ENTRYPOINT ["node", "dist/index.js"]
