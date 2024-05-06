import { Request, Response } from "express";
import errorWrapper from "../middlewares/errorWrapper";
import CustomError from "../services/CustomError";
import bcrypt from "bcrypt";
import pool from "../db/dbconnect";

const createUser = errorWrapper(
    async (req: Request, res: Response) => {
        console.log("hi boss");
      const { regno, session, email, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const { rows } = await pool.query(
        'INSERT INTO Users (regno, session, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [regno, session, email,  hashedPassword, role]
    );
  
     
  
      res.status(201).json(rows[0]);
    },
    { statusCode: 500, message: `Couldn't create user` }
  );


  export {
    createUser
  };



