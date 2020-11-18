import PropTypes from 'prop-types';
import React from 'react';
import Box from '../Box';
import './BoxList.scss';

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
          <Box box={box} />
        </li>
      ))}
    </ul>
  );
}

export default BoxList;
