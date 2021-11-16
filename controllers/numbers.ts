import { Request, Response } from 'express';

export const getNumbers = (req: Request, res: Response) => {
    const { id } = req.params;

    const primeNumbers = [];
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
            primeNumbers.push(i);
        }
    }

    res.json({
        msg: 'getPrimeNumbers',
        number: id,
        primeNumbers
    })
}