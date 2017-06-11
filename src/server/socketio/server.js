import socketIo from 'socket.io';
import sessionSocketIo from 'socket.io-express-session';
import socketIoClient from './client.js';

export default class SocketIoServer {
	constructor(dependencies) {
		if (!dependencies.httpServer || !dependencies.expressSession) {
			throw new Error('Must pass required dependencies to SocketIoServer');
		}
		this.socketIoServer = socketIo(dependencies.httpServer);
		this.socketIoServer.use(sessionSocketIo(dependencies.expressSession));
	}

	start() {
		try {
			this.socketIoServer.on('connection', socketIoClient);
		} catch (error) {
			console.error(new Error('SocketIoServer socket connection error:'), error);
		}
	}
}
