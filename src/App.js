import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './Containers/HomePage/HomePage';

import './App.css';
import Topbar from './Components/Topbar/Topbar';
import WatchPage from './Containers/WatchPage/WatchPage';
import LoginPage from './Containers/LoginPage/Login';
import HistoryPage from './Containers/HistoryPage/HistoryPage'
import { watchUrl } from './Utilities/Utils';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Topbar />
        <Switch>
          <Route path={watchUrl + ':id'} component={WatchPage} />
          <Route exact path={'/'} component={HomePage} />
          <Route path={"/login"} component={LoginPage} />
          <Route path={"/history"} component={HistoryPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
