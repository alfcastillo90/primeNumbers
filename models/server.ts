import express, { Application } from "express";
import numberRoutes from '../routes/numbers';

class Server {
    private app: express.Application;
    private port: string;
    private paths = {
        numbers: 'ms/numbers'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at port ${this.port}`)
        })
    }

    routes() {
        this.app.use(this.paths.numbers, numberRoutes);
    }
}

export default Server;