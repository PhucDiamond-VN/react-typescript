import conn from "./db";

async function initDB() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      age INT NOT NULL
    )
  `;
  
  try {
    await conn.query(createTableQuery);
    console.log("✅ Table 'users' sẵn sàng!");
  } catch (err) {
    console.error("❌ Lỗi khi tạo bảng:", err);
  }
}

export default initDB;