import HttpServer from './server/httpServer.js';
import SocketIoServer from './server/socketIoServer.js';

var httpServer = new HttpServer();
var socketIoServer = new SocketIoServer({
	httpServer: httpServer.httpServer,
	expressSession: httpServer.expressSession
});

httpServer.start();
socketIoServer.start();
