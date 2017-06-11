import request from 'request-promise';

export default {
	backend: request.defaults({
		baseUrl: _config.backend.address
	})
};
