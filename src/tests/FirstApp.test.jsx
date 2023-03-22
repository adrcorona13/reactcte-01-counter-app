import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en FirstApp', () => { 
    // test('debe de hacer match con el snapshot', () => { 
    //     const title = 'titulo';
    //     const { container } = render(<FirstApp title={title}/>);
    //     expect( container ).toMatchSnapshot();
    //     // console.log(container);
    //  })

     test('debe de mostrar el titulo en un h1', () => { 
        const title = 'titulo';
        const { getByText, getByTestId } = render(<FirstApp title={title}/>);
        expect( getByText(title) ).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toBe(title);

     });

     test('debe de mostrar el subtitulo enviado por props', () => { 
        const title = 'titulo';
        const subtitle ='subtitulo';
        const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle}/>);

        expect(getAllByText(subtitle).length).toBe(2);
      })
 })   