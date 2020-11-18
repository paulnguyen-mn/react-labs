import { useState } from 'react';
import BoxList from './components/BoxList';

const FAKE_DATA = [
  {
    color: 'gold',
    luckyNumber: 1,
    size: 'small',
  },
  {
    color: 'red',
    luckyNumber: 2,
    size: 'medium',
  },
  {
    color: 'black',
    luckyNumber: 3,
    size: 'large',
  },
  {
    color: 'pink',
    luckyNumber: 4,
  },
];

function MagicBoxFeature() {
  const [boxList, setBoxList] = useState(FAKE_DATA);

  const handleBoxClick = (box, idx) => {
    // Remove box from list
    // console.log(box, idx);
    const newBoxList = [...boxList];
    newBoxList.splice(idx, 1);

    setBoxList(newBoxList);
  };

  return (
    <div>
      <h2>Magic Box Feature</h2>

      <BoxList boxList={boxList} onBoxClick={handleBoxClick} />

      {/* <Box color="green" luckyNumber={11} />
      <Box color={box.color} luckyNumber={box.luckyNumber} />
      <Box luckyNumber={13} /> */}
    </div>
  );
}

export default MagicBoxFeature;
