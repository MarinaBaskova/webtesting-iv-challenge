const db = require('../../config/dbConfig');

module.exports = {
	find,
	add,
	remove
};

function find() {
	return db('smurfs');
}

function add(smurf) {
	return db('smurfs').insert(smurf, 'id').then(([ id ]) => {
		const smurf = db('smurfs').where({ id }).first();
		return smurf;
	});
}

function remove(id) {
	return db('smurfs').where({ id }).del();
}
