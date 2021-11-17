import { getNumbers } from "./numbers";

describe('getNumbers', () => {

    it('OK result', () => {
        const request = {
            params: {
                id: 7
            }
        };
    
        const responseParam = {
            json: (body?: any) => body,
            status: (code: number) => responseParam
        };
        const result: any = getNumbers(request as any, responseParam as any);
        expect(result).toEqual({
            number: 7,
            sequence: [
                2,
                3,
                5,
                7
            ]
        })
    });
})