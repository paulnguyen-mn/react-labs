import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './features/Home';
import MagicBoxFeature from './features/MagicBox';
import RenderingFeature from './features/Rendering';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/box" component={MagicBoxFeature} />
        <Route path="/rendering" component={RenderingFeature} />
      </Switch>

      <div style={{ textAlign: 'center' }}>Created by Po with ❤️</div>
    </div>
  );
}

export default App;
