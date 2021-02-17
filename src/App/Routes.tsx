import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import routes from '../config/routes'
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
interface IProps{

}
 const Routes = (props: IProps) => {
    return (
        <Router>
            <Switch>
            <Route path={routes.profile} exact component={Profile} />
                <Route path={routes.home} exact component={Home} />
                
            </Switch>
        </Router>
    )
}

export default Routes;
