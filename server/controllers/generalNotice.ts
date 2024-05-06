import { Request, Response } from "express";
import errorWrapper from "../middlewares/errorWrapper";
import CustomError from "../services/CustomError";
import pool from "../db/dbconnect";

const createNotice = errorWrapper(
    async (req: Request, res: Response) => {
      const { notice_provider, notice_date, expire_date, headline, notice_body, picture, file } = req.body;
     

      const { rows } = await pool.query(
        'INSERT INTO GeneralNotices (notice_provider, notice_date, expire_date, headline, notice_body, picture, file) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [notice_provider, notice_date, expire_date, headline, notice_body, picture, file]
    );
  
      res.status(201).json(rows[0]);
    },
    { statusCode: 500, message: `Couldn't create notice` }
  );

 
  const getAllNotices = errorWrapper(
    async (req: Request, res: Response) => {
      const { rows } = await pool.query('SELECT * FROM GeneralNotices');
      res.json(rows);
    },
    { statusCode: 500, message: `Couldn't get notices` }
  );
  
  const updateNotice = errorWrapper(
    async (req: Request, res: Response) => {
      const { noticeId } = req.params;
      const { notice_provider, notice_date, expire_date, headline, notice_body, picture, file } = req.body;
      
      const { rows } = await pool.query(
        'UPDATE GeneralNotices SET notice_provider = $1, notice_date = $2, expire_date = $3, headline = $4, notice_body = $5, picture = $6, file = $7 WHERE noticeId = $8 RETURNING *',
        [notice_provider, notice_date, expire_date, headline, notice_body, picture, file, noticeId]
      );
  
      if (rows.length === 0) {
        throw new CustomError('Notice not found', 404 );
      }
  
      res.json(rows[0]);
    },
    { statusCode: 500, message: `Couldn't update notice` }
  );

  const getNoticeById = errorWrapper(
    async (req: Request, res: Response) => {
      const { noticeId } = req.params;
      const { rows } = await pool.query('SELECT * FROM GeneralNotices WHERE noticeId = $1', [noticeId]);
      
      if (rows.length === 0) {
        throw new CustomError('Notice not found', 404 );
      }
  
      res.json(rows[0]);
    },
    { statusCode: 500, message: `Couldn't get notice by noticeId` }
  );
  
  const deleteNotice = errorWrapper(
    async (req: Request, res: Response) => {
      const { noticeId } = req.params;
      const { rowCount } = await pool.query('DELETE FROM GeneralNotices WHERE noticeId = $1', [noticeId]);
  
      if (rowCount === 0) {
        throw new CustomError('Notice not found', 404 );
      }
  
      res.json({ message: 'Notice deleted successfully' });
    },
    { statusCode: 500, message: `Couldn't delete notice` }
  );
  
  export {
    createNotice,
    getAllNotices,
    updateNotice,
    deleteNotice,
    getNoticeById
  };



