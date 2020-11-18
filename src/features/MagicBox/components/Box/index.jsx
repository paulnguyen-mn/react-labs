import './Box.scss';
import PropTypes from 'prop-types';

const sizeMap = {
  small: '40px',
  medium: '60px',
  large: '80px',
};

function Box({ box }) {
  const { color = 'black', luckyNumber, size = 'medium' } = box;
  const height = sizeMap[size];

  return (
    <div className="box" style={{ backgroundColor: color, height }}>
      {luckyNumber}
    </div>
  );
}

Box.propTypes = {
  box: PropTypes.object,
};

Box.defaultProps = {
  box: {},
};

export default Box;
