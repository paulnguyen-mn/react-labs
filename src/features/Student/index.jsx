import studentApi from 'api/studentApi';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import StudentList from './components/StudentList';

function StudentFeature(props) {
  const match = useRouteMatch();
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await studentApi.getAll(filters);
        setStudentList(data);
      } catch (error) {
        console.log('Failed to fetch student list:', error);
      }
    })();
  }, [filters]);

  return (
    <div>
      <h2>STUDENT FEATURE</h2>

      <StudentList data={studentList} />
    </div>
  );
}

export default StudentFeature;
