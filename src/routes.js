import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Account from './Components/Account';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound404 from './Components/NotFound404';

export default (
    <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Contact} path='/about/contact' />
          <Route component={About} path='/about' />
          <Route component={Account} path='/account/:userId' />
          <Route render={() => <h1>This is banana page</h1>} path='/banana' />
          <Route component={NotFound404} />
    </Switch>
)