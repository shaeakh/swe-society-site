import { Request, Response } from "express";
import errorWrapper from "../middlewares/errorWrapper";
import CustomError from "../services/CustomError";
import { sendMail } from "../services/mailService";
import { generateRandomPassword } from "../services/utils";
import {
    generateToken,
    getToken,
    invalidateToken,
    verifyToken,
  } from "../services/Token";

import bcrypt from "bcrypt";
import pool from "../db/dbconnect";

const createUser = errorWrapper(
    async (req: Request, res: Response) => {
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

  const login = errorWrapper(
    async (req: Request, res: Response) => {
      const { email, password } = req.body;
  
      const { rows } = await pool.query('SELECT * FROM Users WHERE email = $1 ', [email]);
        
      if (rows.length === 0) {
             throw new CustomError("This email do not exists", 404);
      } else {
          // User found, return user details
        //  res.json(rows[0]);
      
          const isPasswordValid = await bcrypt.compare(password, rows[0].password);
      
          if (!isPasswordValid) {
            throw new Error("Invalid email or password");
          }
      
          const token = generateToken(
            {
              id: rows[0].id,
              role: rows[0].role,
            },
            "1h"
          );
      
          res.json({ user:rows[0], token });
      }
  
      
    },
    { statusCode: 500, message: `Login Failed` }
  );
  

  const createUserWithMailSend = errorWrapper(
    async (req: Request, res: Response) => {
      const { regno, session, email,  role } = req.body;
      const password = generateRandomPassword(8);
      const hashedPassword = await bcrypt.hash(password, 10);

      const { rows } = await pool.query(
        'INSERT INTO Users (regno, session, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [regno, session, email,  hashedPassword, role]
    );

    sendMail(
      regno,
      email,
      `Welcome To SWE Society!`,
      `Your account has been created by Admin! Here are the Credentials:`,
      `regno: ${regno}<br>email: ${email}<br> password: ${password}<br><br>Regards,<br>SWE Society Committee`
    );

  
     
      res.status(201).json(rows[0]);
    },
    { statusCode: 500, message: `Couldn't create user` }
  );




  export {
    createUser,
    login,
    createUserWithMailSend

  };



