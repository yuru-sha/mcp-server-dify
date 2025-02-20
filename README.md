# mcp-server-dify

[![smithery badge](https://smithery.ai/badge/@yuru-sha/mcp-server-dify)](https://smithery.ai/server/@yuru-sha/mcp-server-dify)

Model Context Protocol Server for Dify AI. This server enables LLMs to interact with Dify AI's chat completion capabilities through a standardized protocol.

## Features

- Integration with Dify AI chat completion API
- Restaurant recommendation tool (meshi-doko)
- Support for conversation context
- Streaming response support
- TypeScript implementation

## Installation

### Installing via Smithery

To install MCP Server (Dify AI) for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@yuru-sha/mcp-server-dify):

```bash
npx -y @smithery/cli install @yuru-sha/mcp-server-dify --client claude
```

### Using NPM

```bash
npm install @modelcontextprotocol/server-dify
```

## Usage

### With Claude Desktop

Add the following configuration to your `claude_desktop_config.json`:

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

Replace `your-dify-api-endpoint` and `your-dify-api-key` with your actual Dify API credentials.

### Tools

#### meshi-doko

Restaurant recommendation tool that interfaces with Dify AI:

Parameters:
- `LOCATION` (string): Location of the restaurant
- `BUDGET` (string): Budget constraints
- `query` (string): Query to send to Dify AI
- `conversation_id` (string, optional): For maintaining chat context

## Development

This project uses a monorepo structure with workspaces. The main server implementation is in the `src/dify` directory.

### Setup

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Development mode with watch
npm run watch

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

### Publishing

```bash
# Publish all packages
npm run publish-all
```

## Security

This server interacts with Dify AI using your provided API key. Ensure to:
- Keep your API credentials secure
- Use HTTPS for the API endpoint
- Never commit API keys to version control

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

