import React, { useContext } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthContext';
import { Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Categories from '../category/Categories';
import Favorites from '../Favorites';
import Meals from '../meals/Meals';
import DetailMeal from '../meals/DetailMeal';
import Login from '../authentication/Login';
import ProtectedRoute from '../authentication/ProtectedRoute';
import Register from '../authentication/Register';
import Payment from '../authentication/Payment';
import ProtectedLogin from '../authentication/ProtectedLogin';
import Logout from '../authentication/Logout';

const Routes = () => {
  const Auth = useContext(AuthContext);

  return (
    <React.Fragment>
      <Switch>
        <ProtectedRoute
          exact
          path="/pay"
          auth={Auth.auth}
          component={Payment}
        />
        <ProtectedLogin
          exact
          path="/login"
          auth={Auth.auth}
          component={Login}
        />
        <Route path="/not-found" component={NotFound} />
        <Route path="/categories" component={Categories} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/meals/:strCategory" component={Meals} />
        <Route path="/meal/:id" component={DetailMeal} />
        <Redirect from="/" exact to="/categories" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
