global._config = require('../../config.server.json');

import HttpServer from './http/server.js';
import SocketIoServer from './socketio/server.js';
import RenderReactToServer from './http/react/render.jsx';

var httpServer = new HttpServer();
var socketIoServer = new SocketIoServer({
	httpServer: httpServer.httpServer,
	expressSession: httpServer.expressSession
});
RenderReactToServer({
	expressServer: httpServer.expressServer
});

httpServer.start();
socketIoServer.start();
