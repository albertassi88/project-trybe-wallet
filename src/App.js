import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './pages/Login';
import Wallet from './pages/Watter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={ store }>
            <Switch>
              <Route exact path='/' component={ Login } />
              <Route path='/wallet' component={ Wallet } />
            </Switch>
        </Provider>      
      </BrowserRouter>
    </div>
  );
}

export default App;
