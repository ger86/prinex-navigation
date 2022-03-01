import {enablePromise, openDatabase} from 'react-native-sqlite-storage';

enablePromise(true);

const DATABASE_NAME = 'task.db';

export async function getDbConnection() {
  const db = await openDatabase({name: DATABASE_NAME, location: 'default'});
  return db;
}

export async function createTables(db) {
  const query =
    'CREATE TABLE IF NOT EXISTS task(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(512))';
  await db.executeSql(query);
}

export async function initDatabase() {
  const db = await getDbConnection();
  createTables(db);
}

export async function getTasks(db) {
  const tasks = [];
  const results = await db.executeSql('SELECT id, title FROM task');
  results.forEach(function (result) {
    for (let index = 0; index < result.rows.length; index++) {
      tasks.push(result.rows.item(index));
    }
  });
  return tasks;
}

export async function insertTask(db, title) {
  const insertQuery = `INSERT INTO task (title) values ('${title}')`;
  const result = await db.executeSql(insertQuery);
  return result;
}

export async function deleteTask(db, taskId) {
  const deleteQuery = `DELETE FROM task WHERE id = ${taskId}`;
  const result = await db.executeSql(deleteQuery);
  return result;
}
