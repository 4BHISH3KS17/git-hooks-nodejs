const mult = require('../src/mult');

it('Should return correct product', () => {
	const result = mult(5, 7);
	expect(result).toBe(35);
});
