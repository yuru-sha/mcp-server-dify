# MCP Server for Dify AI

A Model Context Protocol server that provides integration with Dify AI chat completion API. This server enables LLMs to interact with Dify AI's chat completion capabilities.

## Components

### Tools

- **meshi-doko**
  - Send a message to Dify chat completion API
  - Input parameters:
    - `LOCATION` (string): Location of the restaurant
    - `BUDGET` (string): Budget of the restaurant
    - `query` (string): Query to send to Dify chat completion API
    - `conversation_id` (string, optional): Conversation ID for maintaining chat context

## Usage with Claude Desktop

To use this server with the Claude Desktop app, add the following configuration to the "mcpServers" section of your `claude_desktop_config.json`:

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

Replace `https://your-dify-api-endpoint` with your Dify API endpoint and `your-dify-api-key` with your Dify API key.

## Development

### Installation

```sh
npm install
```

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```

To automatically fix linting issues:

```sh
npm run lint:fix
```

### Watch Mode

For development, you can use watch mode to automatically rebuild on changes:

```sh
npm run watch
```

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository. 