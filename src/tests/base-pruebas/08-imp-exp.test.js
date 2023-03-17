import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';

describe('Test 08-imp-exp', () => { 
    test('getHeroesById debe retornar un heroe por id', () => { 
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'});
    });
    test('getHeroesById debe retornar undefined si no existe el id', () => { 
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toEqual(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }  
        ]);
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });
    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        expect(heroes.length).toEqual(2)
        expect(heroes).toEqual([
            {"id": 2, "name": "Spiderman", "owner": "Marvel"}, 
            {"id": 5, "name": "Wolverine", "owner": "Marvel"}
        ]);

        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });
 })