import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Function to retrieve a user from the database
export async function getUserFromDb(email: string, pwHash: string) {
  try {
    const res = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [email, pwHash]
    );

    // If user is found, return user details
    if (res.rows.length > 0) {
      return res.rows[0];
    }

    // If no user is found, return null
    return null;
  } catch (error) {
    console.error('Error fetching user from database:', error);
    throw error;
  }
}

export default pool;