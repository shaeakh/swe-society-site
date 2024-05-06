import { Pool, Client } from 'pg';

const connectionString = 'postgresql://mypostgres:iictSUST1060@society-db-1.cpsw4s4as3ri.us-east-1.rds.amazonaws.com:5432/societysite';

const pool = new Pool({
    // user: "mypostgres",
    // password: "iictSUST1060",
    // host: "society-db-1.cpsw4s4as3ri.us-east-1.rds.amazonaws.com",
    // port: 5432,
    // database: "societysite"
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "societysite"
});

const client = new Client({
    connectionString: connectionString
});


export async function testDatabaseConnection() {
    try {
        await pool.query('SELECT 1');
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export async function connectToDB() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
    } catch (error) {
        console.error('Error connecting to PostgreSQL database:');
    }
}

export default pool;


//psql -h society-db-1.cpsw4s4as3ri.us-east-1.rds.amazonaws.com -U mypostgres -d societysite -p 5432
