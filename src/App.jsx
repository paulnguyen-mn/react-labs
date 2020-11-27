import { Button } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import HomePage from './features/Home';
import MagicBoxFeature from './features/MagicBox';
import RenderingFeature from './features/Rendering';
import StudentFeature from './features/Student';

function App() {
  return (
    <div>
      <Header />

      <Button variant="contained" color="primary">
        Primary
      </Button>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/box" component={MagicBoxFeature} />
        <Route path="/rendering" component={RenderingFeature} />
        <Route path="/students" component={StudentFeature} />
        <Route component={NotFound} />
      </Switch>

      <div style={{ textAlign: 'center' }}>Created by Po with ❤️</div>
    </div>
  );
}

export default App;
