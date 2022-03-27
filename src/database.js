const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("../db/prefs.db", err => err ? console.log(err) : console.log("db loaded"));