import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import About from '../components/about/About';
import Contacts from '../components/contacts/Contacts';
import CarWash from '../components/carwash/CarWash';
import Cleaning from '../components/cleaning/Cleaning';
import SnowRemoval from '../components/snow_removal/SnowRemoval';
import Lawn from '../components/lawn/Lawn';

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/carwash' component={CarWash} />
        <Route exact path='/cleaning' component={Cleaning} />
        <Route exact path='/snow-removal' component={SnowRemoval} />
        <Route exact path='/lawn-services' component={Lawn} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;