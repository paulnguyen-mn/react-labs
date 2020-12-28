import CounterFeature from 'features/Counter';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeContext, { themes } from 'themeContext';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import HomePage from './features/Home';
import MagicBoxFeature from './features/MagicBox';
import RenderingFeature from './features/Rendering';
import StudentFeature from './features/Student';
import TodoFeature from './features/Todo';

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const value = { currentTheme, setCurrentTheme };

  return (
    <div>
      <ThemeContext.Provider value={value}>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/box" component={MagicBoxFeature} />
          <Route path="/rendering" component={RenderingFeature} />
          <Route path="/students" component={StudentFeature} />
          <Route path="/todos" component={TodoFeature} />
          <Route path="/counter" component={CounterFeature} />
          <Route component={NotFound} />
        </Switch>

        <div style={{ textAlign: 'center' }}>Created by Po with ❤️</div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
