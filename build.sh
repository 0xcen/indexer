#!/bin/bash

# Variables
SCRIPT_NAME="triggr-indexer"
TS_FILE="src/main.ts"
JS_FILE="dir/main.js"
TARGET="node19-macos-x64"
BIN_DIR="/usr/local/bin"

# Install dependencies
echo "Installing dependencies..."
yarn install

# Compile TypeScript
echo "Compiling TypeScript..."
npx tsc $TS_FILE

# Package application
echo "Packaging application..."
npx pkg -t $TARGET $JS_FILE

# Move executable
echo "Moving executable..."
sudo mv $SCRIPT_NAME $BIN_DIR/$SCRIPT_NAME

echo "Done! You can now run your CLI tool by typing '$SCRIPT_NAME' in the terminal."
