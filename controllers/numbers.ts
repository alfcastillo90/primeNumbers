import { Request, Response } from 'express';

export const getNumbers = (req: Request, res: Response) => {
    const { number } = req.params;
    res.json({
        msg: 'getPrimeNumbers',
        number
    })
}