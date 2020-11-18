import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

//rsfp
BoxList.propTypes = {
  boxList: PropTypes.array,
};

BoxList.defaultProps = {
  boxList: [],
};

function BoxList({ boxList }) {
  return (
    <ul className="box-list">
      {boxList.map((box) => (
        <li key={box.luckyNumber}>
          <Box color={box.color} luckyNumber={box.luckyNumber} />
        </li>
      ))}
    </ul>
  );
}

export default BoxList;
