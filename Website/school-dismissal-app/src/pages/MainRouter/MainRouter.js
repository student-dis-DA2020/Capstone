import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AboutUs from '../AboutUs/AboutUs'

// Controls pathways to pages 
const MainRouter = () => (
    <BrowserRouter>
        <Switch>
            {/* exact path leads to homepage: localhost:3000 */}
            <Route exact path="/" component={LandingPage} />
            {/* path leads to about us page: localhost:3000/aboutus */}
            <Route path="/aboutus" component={AboutUs} />
        </Switch>

    </BrowserRouter>
);

export default MainRouter;