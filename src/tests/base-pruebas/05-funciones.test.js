import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas 05-funciones', () => {
    test('getUser debe retornar un objecto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        
        expect(testUser).toStrictEqual(user);
    });

    test('getUsuarioActivo debe de retornar un objecto', () => { 
        const userTest = {
            uid: 'ABC567',
            username: 'Adrian'
        };
        const user = getUsuarioActivo(userTest.username);

        expect(userTest).toEqual(user);
     })

})