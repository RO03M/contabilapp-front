const sqlite3 = require("sqlite3");
const path = require("path");
const uuid = require("uuid");

class UserController {
    constructor() {
        this.db = new sqlite3.Database(path.join(__dirname, '../../db/contabil.db'));
    }
    
    Get = (search = "", id) => {
        if (id) {
            const sql = `SELECT * FROM users WHERE id = ?`;
            return new Promise((resolve, reject) => {
                this.db.get(sql, id, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                });
                this.db.close();
            });
        }
        const sql = `SELECT * FROM users WHERE lower(name) LIKE lower('%${search}%')`;
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
            this.db.close();
        });
    }

    Create = data => {
        const sql = "INSERT INTO users(id, name, city, address, complement, district, uf, cep, phone, document_number) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const values = [
            uuid.v4(),
            data?.name,
            data?.city,
            data?.address,
            data?.complement,
            data?.district,
            data?.uf,
            data?.cep,
            data?.phone,
            data?.documentNumber
        ];

        this.db.run(sql, values, (err) => {
            if (err) return console.log("err");
            console.log("User inserted");
        });
        this.db.close();
    }

    Alter = data => {
        const sql = "UPDATE users SET name = ?, city = ?, address = ?, complement = ?, district = ?, uf = ?, cep = ?, phone = ?, document_number = ? WHERE id = ?";
        const values = [
            data?.name,
            data?.city,
            data?.address,
            data?.complement,
            data?.district,
            data?.uf,
            data?.cep,
            data?.phone,
            data?.documentNumber,
            data?.id
        ];

        this.db.run(sql, values, (err) => {
            if (err) return console.log("err");
            console.log("User edited");
        });
        this.db.close();
    }

    Delete = ids => {
        const sql = `DELETE FROM users WHERE id IN(${new Array(ids.length).fill('?').join(',')})`;

        this.db.run(sql, ids.map(x => x.toString()), err => {
            console.log(ids.map(x => x.toString()));
            if (err) return console.log(`erro: ${err}`);

            console.log("User(s) deleted");
        });
        this.db.close();
    }
}

module.exports = { UserController };