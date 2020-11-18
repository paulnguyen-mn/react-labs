import BoxList from './components/BoxList';

function MagicBoxFeature() {
  const boxList = [
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

  return (
    <div>
      <h2>Magic Box Feature</h2>

      <BoxList boxList={boxList} />
    </div>
  );
}

export default MagicBoxFeature;
