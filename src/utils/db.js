import initSqlJs from 'sql.js';

    let db = null;

    const initDB = async () => {
      if (db) return db;
      const SQL = await initSqlJs({
        locateFile: file => `https://sql.js.org/dist/${file}`
      });
      db = new SQL.Database();
      db.run(`
        CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          available INTEGER DEFAULT 1
        )
      `);
      return db;
    };

    export const getItems = async () => {
      const db = await initDB();
      const result = db.exec('SELECT * FROM items');
      if (result && result[0]) {
        const columns = result[0].columns;
        const values = result[0].values;
        return values.map(row => {
          const item = {};
          columns.forEach((column, index) => {
            item[column] = row[index];
          });
          return item;
        });
      }
      return [];
    };

    export const addItem = async (name) => {
      const db = await initDB();
      db.run('INSERT INTO items (name) VALUES (?)', [name]);
    };

    export const rentItem = async (id) => {
      const db = await initDB();
      db.run('UPDATE items SET available = 0 WHERE id = ?', [id]);
    };
