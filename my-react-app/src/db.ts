import mysql, { type ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
  user: 'test',
  database: 'test',
};

const conn = mysql.createConnection(access);
export default conn;