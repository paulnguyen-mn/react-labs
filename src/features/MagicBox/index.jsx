import Box from './components/Box';
import BoxList from './components/BoxList';

function MagicBoxFeature() {
  const box = {
    color: 'goldenrod',
    luckyNumber: 12,
  };

  const boxList = [
    {
      color: 'gold',
      luckyNumber: 1,
    },
    {
      color: 'red',
      luckyNumber: 2,
    },
    {
      color: 'black',
      luckyNumber: 3,
    },
    {
      color: 'pink',
      luckyNumber: 4,
    },
  ];

  return (
    <div>
      <h2>Magic Box Feature</h2>

      <BoxList boxList={boxList} />

      <Box color="green" luckyNumber={11} />
      <Box color={box.color} luckyNumber={box.luckyNumber} />
      <Box luckyNumber={13} />
    </div>
  );
}

export default MagicBoxFeature;
