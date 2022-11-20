import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError } from './apiErrors';

export const handleApiErrors =
  <T>(handler: (req: NextApiRequest, res: NextApiResponse<T>) => void) =>
  (req: NextApiRequest, res: NextApiResponse<T>) => {
    try {
      return handler(req, res);
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(500).json({ error: err.message } as T);
      }
    }
  };
