import PropTypes from "prop-types";

JunoAntd.propTypes = {
  name: PropTypes.string,
};

function JunoAntd({ name }) {
  return <div>day la {name}</div>;
}

export default JunoAntd;
