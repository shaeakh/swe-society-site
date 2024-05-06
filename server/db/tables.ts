import pool from "./dbconnect";

export async function createTables() {
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS Users (
            id SERIAL PRIMARY KEY,
            fullname VARCHAR(100),
            password VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            profile_picture VARCHAR(200),
            regno VARCHAR(20),
            session VARCHAR(10),
            phone_number VARCHAR(15),
            bio TEXT,
            linkedin_id VARCHAR(100),
            github_id VARCHAR(100),
            stop_stalk_id VARCHAR(100),
            whatsapp VARCHAR(20),
            facebook_id VARCHAR(100),
            blood_group VARCHAR(5),
            school VARCHAR(100),
            college VARCHAR(100),
            hometown VARCHAR(100),
            CV VARCHAR(200),
            experience TEXT[],
            projects TEXT[],
            is_alumni BOOLEAN DEFAULT FALSE,
            role VARCHAR(20) DEFAULT 'general_member'
        );

        `);
        console.log('Tables created successfully');
    } catch (error) {
        console.error('Unable to create any table:', error);
    }
}