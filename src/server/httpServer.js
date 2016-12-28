import http from 'http';
import express from 'express';
import session from 'express-session';
import path from 'path';
import sqlite from 'connect-sqlite3';
import config from '../../config.server.json';

export default class HttpServer {
	constructor() {
		var SqliteStore = sqlite(session);

		this.expressServer = express();
		this.httpServer = http.Server(this.expressServer);
		this.expressSession = session({
			store: new SqliteStore(),
			secret: config.httpServer.session.secret,
			name: config.httpServer.session.cookieName,
			resave: false,
			saveUninitialized: true
		});

		this.expressServer.use(express.static(path.resolve('../../public')));
		this.expressServer.use(this.expressSession);
	}

	start() {
		this.httpServer.listen(config.httpServer.port, function() {
			console.log('HTTP Server now listening on port', config.httpServer.port);
		});
	}
}
