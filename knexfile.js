// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/smurfs.db3'
		},
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
		pool: {
			afterCreate: (connection, done) => {
				connection.run('PRAGMA foreign_keys = ON', done);
			}
		}
	},

	testing: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/test.db3'
		},
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
		pool: {
			// number of connections
			afterCreate: (connection, done) => {
				connection.run('PRAGMA foreign_keys = ON', done);
			}
		}
	}
};
