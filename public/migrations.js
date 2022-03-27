const sqlite3 = require("sqlite3");
const path = require("path");

const migrate = () => {
    const db = new sqlite3.Database(
        path.join(__dirname, '../db/contabil.db'),
        (err) => {
            if (err) {
                console.log(`Database Error: ${err}`);
            } else {
                console.log('Database Loaded');
            }
        }
    );

    db.run("CREATE TABLE IF NOT EXISTS users (id VARCHAR, name VARCHAR, city VARCHAR, address VARCHAR, complement VARCHAR, district VARCHAR, uf VARCHAR, cep VARCHAR, phone VARCHAR, document_number VARCHAR)");
}

module.exports = { migrate };