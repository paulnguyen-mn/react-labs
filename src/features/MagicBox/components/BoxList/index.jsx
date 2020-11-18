import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import './BoxList.scss';

//rsfp
BoxList.propTypes = {
  boxList: PropTypes.array,
  onBoxClick: PropTypes.func,
};

BoxList.defaultProps = {
  boxList: [],
  onBoxClick: null,
};

function BoxList({ boxList, onBoxClick }) {
  return (
    <ul className="box-list">
      {boxList.map((box, idx) => (
        <li key={box.luckyNumber}>
          {/* <Box color={box.color} luckyNumber={box.luckyNumber} size={box.size} /> */}
          <Box box={box} onClick={(box) => onBoxClick && onBoxClick(box, idx)} />
        </li>
      ))}
    </ul>
  );
}

export default BoxList;
