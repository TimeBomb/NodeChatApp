function SocketIoClient(socket) {
	socket.on('message', function(data) {
		console.log('Message:', data);
	});

	socket.on('error', function(data) {
		console.error(new Error('SocketIoClient Error:'), data);
	});
}

export default SocketIoClient;
