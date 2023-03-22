import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas de 11-async-await', () => { 
    test('getImagen debe retornar la URL de la imagen', async () => { 
        const url = await getImagen();
        expect(typeof url).toBe('string');
        expect(url).toContain('giphy');
     })

    //  test('getImagen debe retornar un error si no cuenta con ApiKey', async () => { 
    //     const url = await getImagen();
    //     expect(typeof url).toBe('string');
    //     expect(url).toBe('No se encontro la imagen');
    //  })
 })