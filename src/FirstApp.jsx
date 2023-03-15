export const FirstApp = () => {
  return (
    <>
      <h1>{Message(name)}</h1>
      <code>{JSON.stringify(obj)}</code>
      <p>subtitulo</p>
    </>
  );
};

const name = 'Adrian';
const obj = {
    a: 'a',
    b: 2
}

const Message = (name) => `Hola ${name}`;
