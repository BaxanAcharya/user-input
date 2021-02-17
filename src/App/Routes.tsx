import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import routes from '../config/routes'
import Home from '../pages/Home/Home';
interface IProps{

}
 const Routes = (props: IProps) => {
    return (
        <Router>
            <Switch>
                <Route path={routes.home} component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes;
