import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const getNumbers = (req: Request, res: Response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    console.log(id);
    const sequence = [2];
    for (let i = 2; i <= parseInt(id); i++ ) {
        let isPrime;

        for(let j = 2;  j < i;  j++ ) {
            if( i % j === 0 ) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
        
        if (isPrime) {
            sequence.push(i);
        }
    }

    return res.json({
        number: id,
        sequence
    })
}