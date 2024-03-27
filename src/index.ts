import * as fs from 'fs';

export default class DB {
    JSONObject: {
        [key: string]: any; 
    };

    constructor() {
        this.JSONObject = {
            "vaultdb": {
                "storage": {}
            }
        };
    }

    add(key: string, value: any) {
        if (key === "vaultdb") {
            throw new Error("Reserved key used");
        }
        if (this.JSONObject[key] === undefined) {
            this.JSONObject[key] = value;
        } else {
            throw new Error("Key already exists");
        }
    }

    edit(key: string, value: any) {
        if (key === "vaultdb") {
            throw new Error("Reserved key used");
        }
        if (this.JSONObject[key] === undefined) {
            throw new Error("Key does not exist");
        } else {
            this.JSONObject[key] = value;
        }
    }

    get(key: string | number) {
        if (this.JSONObject[key] === undefined) {
            throw new Error("Key does not exist");
        } else {
            return this.JSONObject[key];
        }
    }

    remove(key: string | number) {
        if (this.JSONObject[key] === undefined) {
            throw new Error("Key does not exist");
        } else {
            delete this.JSONObject[key];
        }
    }

    dump(consoleLog: any) {
        if (consoleLog) {
            console.log(this.JSONObject);
        }
        return this.JSONObject;
    }

    load(filename: any) {
        this.JSONObject = JSON.parse(fs.readFileSync(filename, 'utf8'));
    }

    export() {
        fs.writeFileSync('database.vaultdb', JSON.stringify(this.JSONObject));
    }

    clear() {
        this.JSONObject = {};
    }
}
