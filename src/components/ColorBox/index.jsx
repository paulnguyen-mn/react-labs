import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {};

const COLOR_LIST = ['deeppink', 'goldenrod', 'marooon', 'lightgreen'];

function ColorBox(props) {
  const [idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx((x) => (x + 1) % COLOR_LIST.length);
  };

  return (
    <div className="color-box" style={{ backgroundColor: COLOR_LIST[idx] }} onClick={handleClick}>
      {COLOR_LIST[idx]}
    </div>
  );
}

export default ColorBox;
