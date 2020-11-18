import './index.scss';

function RenderingFeature() {
  const name = 'Easy Front-end';
  const age = 18;
  const isMale = true;

  const showStudent = true;
  const studentA = {
    name: 'ha',
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

  const colorList = ['green', 'goldenrod', 'violet'];

  return (
    <section className="app">
      <h1>Hello World {name}</h1>
      <p>Age: {age + 2}</p>
      <p>Is Male: {isMale ? 'YES' : 'NO'}</p>
      <p>
        Render null/undefined: {null} {undefined}
      </p>

      {/* {showStudent && ()}
      {!showStudent && ()} */}

      {/* {true ? <p>OK</p> : null}
      {true ? (
        <div>
          <p>Hello</p>
        </div>
      )} */}

      {true && <p>RENDER NE</p>}
      {false && <p>No Render</p>}
      {null && <p>No Render</p>}
      {undefined && <p>No Render</p>}
      {!!0 && <p>No Render</p>}
      {!!123 && <p>Number: 123</p>}
      {!!'' && <p>Empty string</p>}
      {!!'hello' && <p>Hello string</p>}

      {showStudent && (
        <div>
          <h2>Student</h2>
          <p>Name: {studentA.name}</p>
          <p>Age: {studentA.age}</p>
        </div>
      )}

      {/* {showStudent && (
        <>
          <h2>Student</h2>
          <p>Name: {studentA.name}</p>
          <p>Age: {studentA.age}</p>
        </>
      )} */}
      {/* gia vo de trinh duyet ko chui */}

      {!showStudent && <p>Don&apos;t show student</p>}
      {/* nen dung kieu nay thay vi dung toan tu 3 ngoi, de nhin hon */}

      <p>Name: {studentA.name}</p>
      <p>Age: {studentA.age}</p>

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
          <li key={color} style={{ color: color }}>
            {color}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RenderingFeature;
