import PropTypes from 'prop-types';

// export const FirstApp = (props) => {
export const FirstApp = ({ 
  title, 
  subtitle, 
  value,
}) => {
  
  // if (!title) {
  //   throw new Error('El titulo no existe')
  // }

  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{value}</p>
    </>
  );
};


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  value: PropTypes.number
}

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
  value: 0
}