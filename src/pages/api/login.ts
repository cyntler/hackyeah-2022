// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiError } from '../../utils/apiErrors';
import { handleApiErrors } from '../../utils/handleApiErrors';

type LoginResponse = {
  token: string;
};

export default handleApiErrors(
  (req: NextApiRequest, res: NextApiResponse<LoginResponse>) => {
    if (req.method !== 'POST') {
      throw new ApiError('The login endpoint required a POST method!');
    }

    return res.status(200).json({ token: 'jkh1k2j3hkj12h3kj12lk3j1lk2' });
  },
);
