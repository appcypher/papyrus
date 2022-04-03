module.exports = {
	extension: ['ts'],
	spec: ['tests/**/*.test.ts', 'tests/*.test.ts', 'src/**/*.test.ts', 'src/*.test.ts'],
	timeout: 120000,
	loader: 'ts-node/esm'
};
