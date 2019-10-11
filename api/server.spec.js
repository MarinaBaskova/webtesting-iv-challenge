const request = require('supertest');
const db = require('../config/dbConfig');
const server = require('./server.js');

describe('server', () => {
	afterEach(async () => {
		await db('smurfs').truncate();
	});

	it('sets the environment to testing', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});
	describe('GET/', () => {
		it('should respond with 200 ok', () => {
			return request(server).get('/api/smurfs').expect(200);
		});
		it('should return json', () => {
			return request(server).get('/api/smurfs').then((res) => {
				expect(res.type).toBe('application/json');
			});
		});
		it('should return an array of smurfs', () => {
			return request(server).get('/api/smurfs').then((res) => {
				expect(Array.isArray(res.body)).toBeTruthy();
			});
		});
	});

	describe('POST', () => {
		it('should create new smurf and send back created smurf', () => {
			return request(server).post('/api/smurfs').send({ name: 'Smurf' }).then((res) => {
				expect(res.body).toHaveProperty('id');
				expect(res.body.name).toBe('Smurf');
				expect(res.status).toBe(201);
				return request(server).get('/api/smurfs').then((res) => {
					expect(res.body.length).toBe(1);
				});
			});
		});
	});

	describe('DELETE', () => {
		it('should delete smurf with 204', () => {
			return request(server).post('/api/smurfs').send({ name: 'Smurf' }).then((res) => {
				expect(res.body).toHaveProperty('id');
				expect(res.body.name).toBe('Smurf');
				expect(res.status).toBe(201);
				return request(server).delete(`/api/smurfs/${res.body.id}`).then((res) => {
					expect(res.status).toBe(204);
				});
			});
		});
	});

	// open client, make a request and inspect the response
});
