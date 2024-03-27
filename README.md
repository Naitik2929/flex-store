# Flex-Store

Flex-Store is a flexible key-value store solution for Node.js projects, offering easy data storage and retrieval.

## Installation

npm i @naitik/flex-store-store

## Usage

            import DB from '@naitik/flex-store' ;
            const db = new DB();
            
            try {
                db.add('user1', { name: 'John', age: 30 });
                console.log('Data added successfully.');
            } catch (error) {
                console.error('Error adding data:', error.message);
            }

            console.log(db.get('user1'))


## Available commands
            db.add(key, value) - Adds a key-value pair to the database
            db.edit(key, value) - Edits a key-value pair in the database
            db.get(key) - Gets a key-value pair from the database based on input
            db.remove(key) - Removes a key-value pair from the database
            db.dump(consolelog) - Returns the database as JSON - consolelog is optional and will also log the output to the console (useful for testing!)
            db.load(json) - Loads a JSON file into the database
            db.export() - Exports the database to database.bzdb
            db.clear() - Clears the database