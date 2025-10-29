const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function applicationAssessmentTable() {

    try {
        const connection = await mysql.createConnection(databaseConfig);

        await connection.query(`USE ${databaseConfig.database}`);

        await connection.query(`CREATE TABLE IF NOT EXISTS CREATE TABLE avaliacao (
    id_avaliacao INT PRIMARY KEY,
    id_solicitacao INT,
    id_empresa INT,
    nota INT,
    comentario TEX,
    data_avaliacao DATIME
)`);

        await connection.end();

        console.log(`Table Collector created !`);
    } catch (error) {
        console.log(`Error creating table: ${error}`);
    }
};

applicationAssessmentTable();