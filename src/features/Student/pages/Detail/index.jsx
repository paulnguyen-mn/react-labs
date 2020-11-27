import React from 'react';
import { useRouteMatch } from 'react-router-dom';

StudentDetailPage.propTypes = {};

function StudentDetailPage(props) {
  const { params } = useRouteMatch();

  return <div>Student Detail Page - {params.studentId}</div>;
}

export default StudentDetailPage;
