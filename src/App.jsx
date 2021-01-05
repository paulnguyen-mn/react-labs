import { Typography } from '@material-ui/core';
import CartFeature from 'features/Cart';
import CounterFeature from 'features/Counter';
import { useCountDown } from 'hooks/useCountDown';
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

  const seconds = useCountDown({ initialSeconds: 10 });

  return (
    <div>
      <ThemeContext.Provider value={value}>
        <Header />
        <Typography variant="h1">{seconds}</Typography>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/box" component={MagicBoxFeature} />
          <Route path="/rendering" component={RenderingFeature} />
          <Route path="/students" component={StudentFeature} />
          <Route path="/todos" component={TodoFeature} />
          <Route path="/counter" component={CounterFeature} />
          <Route path="/cart" component={CartFeature} />
          <Route component={NotFound} />
        </Switch>

        <div style={{ textAlign: 'center' }}>Created by Po with ❤️</div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
