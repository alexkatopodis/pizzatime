import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/homePage';
import HomeOrder from './pages/Home';
import Pasta from './pages/Order/Pasta';
import Size from './pages/Order/Size';
import Filling from './pages/Order/Filling';
import Complete from './pages/Complete';



export default function Routes() {
    return (
      <BrowserRouter>      
        <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Order" exact component={HomeOrder} />
                <Route path="/Pasta" component={Pasta} />
                <Route path="/Size" component={Size} />
                <Route path="/Filling" component={Filling} />  
                <Route path="/Complete" component={Complete} />              
            </Switch>
      </BrowserRouter>
    );
}