const app = require('./app.js');

test('Server is created correctly', () => {
    expect(app).toBeDefined();
});

afterAll(() => {
    app.close();
});