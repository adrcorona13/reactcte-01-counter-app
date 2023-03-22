import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en FirstApp', () => { 
    test('debe de hacer match con el snapshot', () => { 
        const title = 'titulo';
        const { container } = render(<FirstApp title={title}/>);
        expect( container ).toMatchSnapshot();
        // console.log(container);
     })

     test('debe de mostrar el titulo en un h1', () => { 
        const title = 'titulo';
        const { container, getByText } = render(<FirstApp title={title}/>);
        expect( container ).toMatchSnapshot();
        expect( getByText(title) ).toBeTruthy();
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toBe(title);
        expect(h1.innerHTML).toContain(title);
     })
 })   