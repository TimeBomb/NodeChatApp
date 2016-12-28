import socketIo from 'socket.io';
import http from 'http';
import sessionSocketIo from 'socket.io-express-session';
import socketClient from './socketClient.js';

export default class SocketIoServer {
	constructor(dependencies) {
		this.socketIoServer = socketIo(dependencies.httpServer);
		this.socketIoServer.use(sessionSocketIo(dependencies.expressSession));
	}

	start() {
		try {
			this.socketIoServer.on('connection', socketClient);
		} catch (error) {
			console.error(new Error('socketIoServer socket connection error:'), error);
		}
	}
}