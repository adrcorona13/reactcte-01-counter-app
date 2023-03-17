import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-stirng', () => {
    test('getSaludo debe de retornar "Hola Adrian"', () => { 
        const name = 'Adrian';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    })
})