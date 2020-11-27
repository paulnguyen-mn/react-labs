import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StudentDetailPage from './pages/Detail';
import StudentListPage from './pages/List';

function StudentFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <h2>STUDENT FEATURE</h2>

      <Switch>
        <Route exact path={match.path} component={StudentListPage} />
        <Route path={`${match.path}/:studentId`} component={StudentDetailPage} />
      </Switch>
    </div>
  );
}

export default StudentFeature;
