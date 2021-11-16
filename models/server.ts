import express, { Application } from "express";
import numberRoutes from '../routes/numbers';
import cors from 'cors';

class Server {
    private app: express.Application;
    private port: string;
    private apiPaths = {
        numbers: '/api/numbers'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at port ${this.port}`);
        })
    }

    middlewares() {
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.apiPaths.numbers, numberRoutes);
    }
}

export default Server;