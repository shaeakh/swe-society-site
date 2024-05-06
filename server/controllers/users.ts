import { Request, Response } from "express";
import errorWrapper from "../middlewares/errorWrapper";
import CustomError from "../services/CustomError";
import pool from "../db/dbconnect";
const updateUser = errorWrapper(
    async (req: Request, res: Response) => {
      const { userId } = req.params;
      const updates = req.body;
  
      // Construct SET clause dynamically from the updates object
      let setClause = '';
      const values = [];
  
      for (const key in updates) {
        if (key !== 'userId') { // Exclude userId from updates
          setClause += `${key} = $${values.length + 1}, `;
          values.push(updates[key]);
        }
      }
  
      // Remove trailing comma and space
      setClause = setClause.slice(0, -2);
  
      if (values.length === 0) {
        throw new CustomError("No fields provided for update", 404);
      }
  
      // Construct the SQL query
      const query = {
        text: `UPDATE Users SET ${setClause} WHERE userId = $${values.length + 1} RETURNING *`,
        values: [...values, userId]
      };
  
      try {
        const { rows } = await pool.query(query);
        
        if (rows.length === 0) {
          throw new CustomError( 'User not found', 404);
        }
  
        res.json(rows[0]);
      } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Error updating user' });
      }
    },
    { statusCode: 500, message: `Couldn't update user` }
  );
  
  const getAllUsers = errorWrapper(
    async (req: Request, res: Response) => {
      const { rows } = await pool.query('SELECT * FROM Users');
      res.json(rows);
    },
    { statusCode: 500, message: `Couldn't get notices` }
  );

  
  export {
    updateUser,
    getAllUsers
  };



