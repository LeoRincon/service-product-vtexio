import dotenv from 'dotenv';
dotenv.config();

import Server from './server/productServer';

const server = new Server();

server.listen();
