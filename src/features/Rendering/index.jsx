import './index.scss';

function RenderingFeature() {
  const name = 'Easy Frontend';
  const age = 18;
  const isMale = true;

  const showStudent = true;
  const studentA = {
    name: 'Hau',
    age: 18,
    address: {},
  };

  const studentList = [
    {
      id: 1,
      name: 'Hoang',
      age: 18,
    },
    {
      id: 2,
      name: 'Hau',
      age: 19,
    },
  ];

  const colorList = ['green', 'goldenrod', 'red'];

  return (
    <section className="app">
      <h1>Hello {name}</h1>
      <p>Age: {age + 2}</p>
      <p>Is Male: {isMale ? 'YES' : 'No'}</p>
      <p>
        Render null/undefined: {null} {undefined}
      </p>

      {showStudent && (
        <>
          <h2>Student</h2>
          <p>Name: {studentA.name}</p>
          <p>Age: {studentA.age}</p>
        </>
      )}

      {!showStudent && <p>Don&apos;t show student</p>}

      {true ? <p>OK</p> : null}
      {true ? (
        <div>
          <p>Hello</p>
        </div>
      ) : (
        <div>
          <p>Hello</p>
        </div>
      )}

      {true && <p>RENDER NE</p>}
      {false && <p>KO THAY RENDER NE</p>}
      {null && <p>KO THAY RENDER NE</p>}
      {undefined && <p>KO THAY RENDER NE</p>}
      {0 && <p>KO THAY RENDER NE</p>}
      {123 && <p>NUMBER: 123</p>}
      {'' && <p>Empty string</p>}
      {'Hello' && <p>Hello string</p>}

      <ul className="student-list">
        {studentList.map((student) => (
          <li key={student.id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
          </li>
        ))}
      </ul>

      <h2>Color List</h2>
      <ul className="color-list">
        {colorList.map((color) => (
          <li key={color} style={{ color }}>
            {color}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RenderingFeature;
