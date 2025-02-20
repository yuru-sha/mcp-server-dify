.PHONY: all clean install build test lint format docker

# デフォルトターゲット
all: install build test

# 依存関係のインストール
install:
	npm ci

# ビルド
build:
	npm run build

# テスト実行
test:
	npm test

# リント実行
lint:
	npm run lint

# コードフォーマット
format:
	npm run format

# クリーンアップ
clean:
	rm -rf node_modules
	rm -rf dist
	rm -f package-lock.json

# Dockerイメージのビルド
docker:
	docker build -t mcp/dify -f src/dify/Dockerfile .

# 開発用のセットアップ
setup: clean install

# # パッケージの公開
# publish:
# 	npm run publish-all

# 継続的な開発用のウォッチモード
watch:
	npm run watch

.DEFAULT_GOAL := all 