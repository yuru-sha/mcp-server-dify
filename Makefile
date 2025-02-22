.PHONY: build lint format clean setup build docker help

# Initial setup
setup:
	npm install

# Build the project
build:
	npm run build

# Run linter
lint:
	npm run lint

# Format code
format:
	npm run format

# Clean up
clean:
	rm -rf dist
	
# Build Docker image
docker:
	docker build -t mcp/mysql .

# Show help
help:
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@echo '  setup    Initial setup'
	@echo '  build    Build the project'
	@echo '  lint     Run linter'
	@echo '  format   Format code'
	@echo '  clean    Clean up build artifacts'
	@echo '  docker   Build Docker image'
	@echo '  help     Show this help message'

.DEFAULT_GOAL := build