const express = require('express');
const router = express.Router();
const db = require('./smurfsModel');

router.get('/', (req, res) => {
	db
		.find()
		.then((smurfs) => {
			res.status(200).json(smurfs);
		})
		.catch((err) => {
			res.status(500).json({
				error: 'The smurf information could not be retrieved'
			});
		});
});

router.post('/', (req, res) => {
	const newSmurf = req.body;
	db
		.add(newSmurf)
		.then((newSmurf) => {
			res.status(201).json(newSmurf);
		})
		.catch((error) => {
			res.status(500).json({ message: `Your smurf could not be posted ${error}.` });
		});
});

router.delete('/:id', (req, res) => {
	db
		.remove(req.params.id)
		.then((numOfDeleted) => {
			if (!numOfDeleted) {
				res.status(404).json({ error: 'The smurf with the specified ID does not exist.' });
			} else {
				res.status(204).end();
			}
		})
		.catch((error) => {
			res.status(500).json({
				message: `The smurfs's information could not be deleted: ${error}.`
			});
		});
});

module.exports = router;
