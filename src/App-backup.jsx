import { useEffect, useState } from 'react';
import postApi from './api/postApi';
import studentApi from './api/studentApi';
import './App.scss';
import Button from './components/Button';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import MagicBoxFeature from './features/MagicBox';

function App() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);

  const [fetchingStudent, setFetchingStudent] = useState(true);
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await postApi.getAll({
          _page: 1,
          _limit: 10,
        });

        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch post list', error);
      }

      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await studentApi.getAll({
          _page: 1,
          _limit: 10,
        });

        setStudentList(data);
      } catch (error) {
        console.log('Failed to fetch student list', error);
      }

      setFetchingStudent(false);
    })();
  }, []);

  return (
    <div>
      <ColorBox />

      {loading && <p>Loading ...</p>}

      <ul>
        {postList.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {fetchingStudent && <p>Fetching student ...</p>}
      <ul>
        {studentList.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>

      <Counter />

      <Button>Hello</Button>
      <Button onClick={() => alert('Show me!!!')}>
        <span></span> Click to show alert
      </Button>

      <MagicBoxFeature />
    </div>
  );
}

export default App;
