# mcp-server-dify
[![CI Status](https://github.com/yuru-sha/mcp-server-dify/actions/workflows/ci.yml/badge.svg)](https://github.com/yuru-sha/mcp-server-dify/actions)

Model Context Protocol Server for Dify AI. This server enables LLMs to interact with Dify AI's chat completion capabilities through a standardized protocol.

## Features

- Integration with Dify AI chat completion API
- Restaurant recommendation tool (meshi-doko)
- Support for conversation context
- Streaming response support
- TypeScript implementation

## Installation

### Using Docker

```bash
# Build the Docker image
make docker

# Run with Docker
docker run -i --rm mcp/dify https://your-dify-api-endpoint your-dify-api-key
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

## License

This project is released under the [MIT License](LICENSE).

## Security

This server interacts with Dify AI using your provided API key. Ensure to:
- Keep your API credentials secure
- Use HTTPS for the API endpoint
- Never commit API keys to version control

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

