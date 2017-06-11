module.exports = {
	httpServer: {
		port: 9000,
		session: {
			secret: 'SESSION_SECRET',
			cookieName: '__SESSION'
		}
	},
	socketIoServer: {
		port: 9001
	},
	backend: {
		address: 'http://localhost:9002'
	}
};
