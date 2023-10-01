# NaokoLeveling
> A Standard leveling system for forgescript extensions

[![NaokoLeveling](https://img.shields.io/github/package-json/v/KairoKunazuki/NaokoLeveling/main?label=naoko-leveling&color=5c16d4)](https://github.com/KairoKunazuki/NaokoLeveling/)
[![forgescript](https://img.shields.io/github/package-json/v/tryforge/ForgeScript/main?label=forgescript&color=5c16d4)](https://github.com/tryforge/ForgeScript/)
[![Discord](https://img.shields.io/discord/739934735387721768?logo=discord)](https://discord.gg/hcJgjzPvqb)

## How to use
You can download this from github repo
```bash
npm i https://github.com/KairoKunazuki/NaokoLeveling.git
```
NPM
```bash
npm i naoko-leveling
```

Adding extension to your client initialization
```js
const { NaokoLeveling } = require("naoko-leveling")
const client = new ForgeClient({
    ...options // The options you have passed
    extensions: [
        new NaokoLeveling()
    ]
});
```

### Using databases
This package is based on [quick.db](https://github.com/plexidev/quick.db) and it is possible to save your data using their Database Drivers.

Different type of Database Drivers requires additional packages as listed:
- SQLiteDriver requires [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- MySQLDriver requires [mysql2](https://github.com/sidorares/node-mysql2)
- JSONDriver requires [write-file-atomic](https://github.com/npm/write-file-atomic)
- MongoDriver requires [mongoose](https://github.com/Automattic/mongoose)

Example of using SQLite database
```js
const { NaokoLeveling } = require("naoko-leveling")
const { SQLiteDriver } = require("quick.db");
const client = new ForgeClient({
    ...options // The options you have passed,
    extensions: [
        new NaokoLeveling(
            new SQLiteDriver('./leveling.db') // Driver
        )
    ]
})
```