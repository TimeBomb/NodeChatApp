import http from 'http';
import express from 'express';
import session from 'express-session';
import path from 'path';
import sqlite from 'connect-sqlite3';

const STATIC_PATH = path.resolve('./static');
const SqliteStore = sqlite(session);

export default class HttpServer {
	constructor() {
		this.expressServer = express();
		this.httpServer = http.Server(this.expressServer);
		this.expressSession = session({
			store: new SqliteStore(),
			secret: _config.httpServer.session.secret,
			name: _config.httpServer.session.cookieName,
			resave: false,
			saveUninitialized: true
		});

		this.expressServer.use('/static', express.static(STATIC_PATH));
		this.expressServer.use(this.expressSession);
	}

	start() {
		this.httpServer.listen(_config.httpServer.port, function() {
			console.log('HTTP Server now listening on port', _config.httpServer.port);
		});
	}
}
