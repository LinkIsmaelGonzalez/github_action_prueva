// test/unit/userController.test.js
const {createUser} = require ('../../src/controller/userController');

describe('createUser'), ()=> {
    it('debe crear un usuario con datos validos', () => {
        const userData = { name:'Juan', email: 'juan@example.com'};
        const user = createUser(userData);
        expect(user).toHaveProperty('id');
        expect(user.name).toBe('Juan');
    });
    it('debe lanzar un error si faltan datos'), ()=> {
        expect(() => createUser({})).toThrow('Nombre y mail son requeridos');
    });
});