import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Pruebas de CounterApp", () => {
  const initialValue = 100;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor inicial de 100", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.queryByRole("heading", { level: 2 }).innerHTML).toEqual(
      initialValue.toString()
    );
  });

  test("el valor debe incrementar al presionar el boton de +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.queryByRole("heading", { level: 2 }).innerHTML).toEqual(
      (initialValue + 1).toString()
    );
  });
  test("el valor debe decrementar al presionar el boton de -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.queryByRole("heading", { level: 2 }).innerHTML).toEqual(
      (initialValue - 1).toString()
    );
  });
  test("el valor debe regresar al original al presionar el boton reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    expect(screen.queryByRole("heading", { level: 2 }).innerHTML).toEqual(
      (initialValue).toString()
    );
  });
});
