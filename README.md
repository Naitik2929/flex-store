# Flex-Store

Flex-Store is a flexible key-value store solution for Node.js projects, offering easy data storage and retrieval.

## Installation

```bash
npm i @naitik/flex-store

Usage

const FlexStore = require('flex-store');
const store = new FlexStore();

store.set('message', 'Hello World!');
console.log(store.get('message'));

Available Commands
store.set(key, value): Sets a key-value pair in the store.
store.get(key): Retrieves the value associated with the specified key.
store.has(key): Checks if a key exists in the store.
store.delete(key): Deletes the key-value pair associated with the specified key.
store.clear(): Clears all key-value pairs from the store.