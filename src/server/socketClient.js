function SocketClient(socket) {
	socket.on('message', function(data) {
		console.log('Message:', data);
	});

	socket.on('error', function(data) {
		console.error(new Error('socketClient Error:'), data);
	})
}

export default SocketClient;