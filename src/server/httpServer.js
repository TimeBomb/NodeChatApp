import http from 'http';
import express from 'express';
import session from 'express-session';
import path from 'path';
import sqlite from 'connect-sqlite3';
import config from '../../config.server.json';

export default class HttpServer {
	constructor() {
		var sqliteStore = sqlite(session);

		this.expressServer = express();
		this.httpServer = http.Server(this.expressServer);
		this.expressSession = session({
			store: new sqliteStore(),
			secret: config.webServer.session.secret,
			name: config.webServer.session.cookieName,
			resave: false,
			saveUninitialized: true
		});

		this.expressServer.use(express.static(path.resolve('../../public')));
		this.expressServer.use(this.expressSession);
	}

	start() {
		this.httpServer.listen(config.webServer.port, function() {
			console.log('Http Server now listening on port', config.webServer.port);
		});
	}
}

