const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("blog.sqlite", (err) => {
  if (err) return console.error(`error creating db ${err.message}`);
  console.log('connected to database');
});

process.on('SIGINT', () => {
  console.log('calling db close');
  db.close();
});

module.exports = db;
