const smurfs = require('./smurfsModel.js');
const db = require('../../config/dbConfig');

describe('smurfs model', () => {
	afterEach(async () => {
		await db('smurfs').truncate();
	});

	describe('add()', () => {
		it('should add new smurf', async () => {
			await smurfs.add({ name: 'smurfy' });

			const allSmurfs = await smurfs.find();

			expect(allSmurfs).toHaveLength(1);
		});
	});

	describe('delete', () => {
		it('should delete smurf', async () => {
			const newSmurf = await smurfs.add({ name: 'smurfy' });
			await smurfs.add({ name: 'funnny' });
			await smurfs.add({ name: 'brainy' });
			const deletedSmurf = await smurfs.remove(newSmurf.id);
			// returns 1 or 0
			expect(deletedSmurf).toBeTruthy();
			const smurfsList = await smurfs.find();
			expect(smurfsList).toHaveLength(2);
		});
	});
});
