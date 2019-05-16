const express = require('express');
const server = express();
const helmet = require('helmet');

const smurfsRouter = require('./routes/smurfsRoutes');

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello World' });
});

server.use('/api/smurfs', smurfsRouter);

module.exports = server;
