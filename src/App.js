import React from 'react';
import './App.css';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Drinks from './Drinks';
import Filter from './Filter';

const App = () => (
  <div className="App">
    <header className="header">Cocktails</header>
    <HashRouter>
      <Switch>
      <Route exact path="/" component={Filter} />
        <Route path="/:categories" component={Drinks} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;