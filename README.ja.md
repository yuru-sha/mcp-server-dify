# mcp-server-dify
[![CI Status](https://github.com/yuru-sha/mcp-server-dify/actions/workflows/ci.yml/badge.svg)](https://github.com/yuru-sha/mcp-server-dify/actions)

Dify AI用のModel Context Protocolサーバーです。このサーバーは、LLMが標準化されたプロトコルを通じてDify AIのチャット完了機能と対話できるようにします。

## 特徴

- Dify AIチャット完了APIとの統合
- レストラン推薦ツール（meshi-doko）
- 会話コンテキストのサポート
- ストリーミングレスポンスのサポート
- TypeScriptによる実装

## インストール

### Dockerを使用する場合

```bash
# Dockerイメージのビルド
make docker

# コンテナの起動
docker run -i --rm mcp/dify https://your-dify-api-endpoint your-dify-api-key
```

## 使用方法

### Claude Desktopとの連携

`claude_desktop_config.json`に以下の設定を追加してください：

```json
{
  "mcpServers": {
    "dify": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-dify",
        "https://your-dify-api-endpoint",
        "your-dify-api-key"
      ]
    }
  }
}
```

`your-dify-api-endpoint`と`your-dify-api-key`を実際のDify API認証情報に置き換えてください。

### ツール

#### meshi-doko

Dify AIと連携するレストラン推薦ツール：

パラメータ：
- `LOCATION` (文字列): レストランの場所
- `BUDGET` (文字列): 予算の制約
- `query` (文字列): Dify AIに送信するクエリ
- `conversation_id` (文字列, オプション): チャットコンテキストを維持するため

## 開発

```bash
# Initial setup
make setup

# Build the project
make build

# Format code
make format

# Run linter
make lint
```

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下でリリースされています。

## セキュリティ

このサーバーは提供されたAPIキーを使用してDify AIと対話します。以下を確認してください：
- API認証情報を安全に保管する
- APIエンドポイントにはHTTPSを使用する
- APIキーをバージョン管理にコミットしない

## 貢献

貢献は歓迎します！お気軽にプルリクエストを提出してください。
