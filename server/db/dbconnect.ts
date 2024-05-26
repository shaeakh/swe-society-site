import { Pool } from 'pg';

const connectionString = 'postgres://postgres.bhfbufaieuwjkepaoynk:sweSOCIETY$$123@aws-0-ap-south-1.pooler.supabase.com:5432/postgres';

const pool = new Pool({
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
        await pool.connect();
        console.log('Connected to PostgreSQL database');
    } catch (error) {
        console.error('Error connecting to PostgreSQL database:', error);
    }
}

export default pool;
