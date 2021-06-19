import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/homePage';
import Pasta from './page/orderPage/Pasta';
import Size from './page/orderPage/Size';
import Filling from './page/orderPage/Filling';
// import Complete from './page/orderPage/Complete';


export default function Routes() {
    return (
      <BrowserRouter>      
        <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Pasta" component={Pasta} />
                <Route path="/Size" component={Size} />
                <Route path="/Filling" component={Filling} />
                {/* <Route path="/Complete" component={Complete} /> */}
            </Switch>
      </BrowserRouter>
    );
}