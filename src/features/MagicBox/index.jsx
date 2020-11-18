import { useState } from 'react';
import BoxList from './components/BoxList';

const FAKE_DATA = [
  {
    color: 'goldenrod',
    luckyNumber: 1,
    size: 'small',
  },
  {
    color: 'deeppink',
    luckyNumber: 2,
    size: 'medium',
  },
  {
    color: 'black',
    luckyNumber: 3,
    size: 'large',
  },
  {
    color: 'yellow',
    luckyNumber: 4,
  },
  {
    color: 'red',
    luckyNumber: 5,
  },
];

function MagicBoxFeature() {
  const [boxList, setBoxList] = useState(FAKE_DATA);

  const handleBoxClick = (box, idx) => {
    // Remove box from list
    console.log(box, idx);
    const newBoxList = [...boxList];
    newBoxList.splice(idx, 1);

    setBoxList(newBoxList);
  };

  return (
    <div>
      <h2>Magic Box Feature</h2>

      <BoxList boxList={boxList} onBoxClick={handleBoxClick} />
    </div>
  );
}

export default MagicBoxFeature;
