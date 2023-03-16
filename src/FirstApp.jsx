// export const FirstApp = (props) => {
export const FirstApp = ({ title, subtitle, valor }) => {
  // console.log('props', props);
  return (
    <>
      <h1>{Message(name)}</h1>
      {/* <h2>{props.title}</h2> */}
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <h4>{valor}</h4>
      <code>{JSON.stringify(obj)}</code>
      <p>subtitulo</p>
    </>
  );
};

const name = "Adrian";
const obj = {
  a: "a",
  b: 2,
};

const Message = (name) => `Hola ${name}`;
