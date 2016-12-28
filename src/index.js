import httpServer from './server/httpServer.js';
import socketIoServer from './server/socketIoServer.js';

new httpServer().start();
new socketIoServer({
	httpServer: httpServer.expressServer,
	expressSession: httpServer.expressSession
}).start();