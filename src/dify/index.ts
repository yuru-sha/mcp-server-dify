#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  // ListResourcesRequestSchema,
  ListToolsRequestSchema,
  // ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";

const server = new Server(
  {
    name: "mcp-server-dify",
    version: "0.1.0",
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error(
    "Please provide a Dify API endpoint and API key as a command-line argument"
  );
  process.exit(1);
}

const [apiEndpoint, apiKey] = args;

const axiosInstance = axios.create({
  baseURL: apiEndpoint,
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "meshi-doko",
        description: "Send a message to Dify chat completion API",
        inputSchema: {
          type: "object",
          properties: {
            inputs: {
              LOCATION: {
                type: "string",
                description: "Location of the restaurant",
              },
              BUDGET: {
                type: "string",
                description: "Budget of the restaurant",
              },
            },
            query: {
              type: "string",
              description: "Query to send to Dify chat completion API",
            },
            conversation_id: {
              type: "string",
              optional: true,
              description:
                "Conversation ID to send to Dify chat completion API",
            },
            user: "MCP Server for Dify AI",
          },
          required: ["LOCATION", "BUDGET", "query"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "meshi-doko") {
    const { location, budget, query, conversation_id } = request.params
      .arguments as any;
    try {
      const response = await axiosInstance.post(`/chat-messages`, {
        inputs: { LOCATION: location, BUDGET: budget },
        query,
        conversation_id,
        response_mode: "streaming",
      });
      return {
        content: [
          { type: "text", text: JSON.stringify(response.data, null, 2) },
        ],
        isError: false,
      };
    } catch (error) {
      console.error("Error in chat completion:", error);
      throw error;
    }
  }
  throw new Error(`Unknown tool: ${request.params.name}`);
});

async function runServer(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

runServer().catch(console.error);
