import React, { useContext } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import AuthApi from '../authentication/AuthApi';
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

const Routes = () => {
  const Auth = useContext(AuthApi);

  return (
    <React.Fragment>
      <Switch>
        <ProtectedRoute path="/pay" auth={Auth.auth} component={Payment} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/categories" component={Categories} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/register" component={Register} />
        <Route path="/login" auth={Auth.auth} component={Login} />
        <Route path="/meals/:strCategory" component={Meals} />
        <Route path="/meal/:id" component={DetailMeal} />
        <Redirect from="/" exact to="/categories" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
