const fs = require("fs");
const path = require("path");
const pool = require("../config/database");

/**
 * Inicializa o banco de dados executando o schema.sql
 */
async function initDatabase() {
  try {
    console.log("🔄 Iniciando criação das tabelas...");

    const schemaPath = path.join(__dirname, "../config/schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf8");

    await pool.query(schema);

    console.log("✅ Tabelas criadas com sucesso!");
    console.log("✅ Schema do banco de dados inicializado!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao inicializar banco de dados:", error.message);
    process.exit(1);
  }
}

// Executar se este arquivo for chamado diretamente
if (require.main === module) {
  initDatabase();
}

module.exports = initDatabase;
