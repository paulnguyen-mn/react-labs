import './box.scss';
import PropTypes from 'prop-types';

function Box(props) {
  const { color, luckyNumber } = props;
  return (
    <div className="box" style={{ backgroundColor: color }}>
      {luckyNumber}
    </div>
  ); // render number
}

Box.protoTypes = {
  color: PropTypes.string,
  //   truyen vao cung dc ko truyen cung dc, neu ko truyen xuong thi phai co gia tri mac dinh
  luckyNumber: PropTypes.number.isRequired,
  // bat buoc phai truyen vao
};

Box.defaultProps = {
  color: 'black',
};

export default Box;
