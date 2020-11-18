import './box.scss';
import PropTypes from 'prop-types';

const sizeMap = {
  small: '40px',
  medium: '60px',
  large: '80px',
};

// function Box(props) {
//   const { color, luckyNumber, size } = props;
//   const height = sizeMap[size];

//   return (
//     <div className="box" style={{ backgroundColor: color, height }}>
//       {luckyNumber}
//     </div>
//   ); // render number
// }
function Box({ box, onClick }) {
  const { color = 'black', luckyNumber, size = 'medium' } = box;
  const height = sizeMap[size];

  const handleRemoveClick = () => {
    if (onClick) onClick(box);
  };

  return (
    <div className="box" style={{ backgroundColor: color, height }}>
      {luckyNumber}

      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  ); // render number
}

// Box.protoTypes = {
//   color: PropTypes.string,
//   //   truyen vao cung dc ko truyen cung dc, neu ko truyen xuong thi phai co gia tri mac dinh
//   luckyNumber: PropTypes.number.isRequired,
//   // bat buoc phai truyen vao
//   size: PropTypes.string,
// };

Box.protoTypes = {
  box: PropTypes.object,
  onClick: PropTypes.func,
};

Box.defaultProps = {
  box: {},
  onClick: null,
};

export default Box;
