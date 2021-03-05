import React, { useContext } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthContext';
import { Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Categories from '../category/Categories';
import Meals from '../meals/Meals';
import DetailMeal from '../meals/DetailMeal';
import Login from '../login/Login';
import ProtectedRoute from '../authentication/ProtectedRoute';
import Payment from '../authentication/Payment';
import ProtectedLogin from '../authentication/ProtectedLogin';
import Logout from '../authentication/Logout';
import MainPage from './../MainPage';
import AppLogin from './../login/AppLogin';
import SearchItems from '../search/SearchItems';
import AddRecipes from './../recipe/AddRecipes';
import Recipes from './../recipe/Recipes';
import Cart from '../cart/Cart';
import Favorites from '../meals/Favorites';

const Routes = () => {
  const Auth = useContext(AuthContext);

  return (
    <React.Fragment>
      <Switch>
        <ProtectedRoute
          exact
          path="/pay"
          auth={Auth.authorization}
          component={Payment}
        />
        <ProtectedLogin
          exact
          path="/login"
          auth={Auth.authorization}
          component={Login}
        />

        <Route path="/meals/:strCategory" component={Meals} />
        <Route path="/meal/:id" component={DetailMeal} />
        <Route path="/search/:mainIngredient" component={SearchItems} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/register" component={AppLogin} />
        <Route path="/logout" component={Logout} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/categories" component={Categories} />
        <Route path="/recipes/all" component={Recipes} />
        <Route path="/recipes/addRecipe" component={AddRecipes} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={MainPage} />
        <Redirect from="/" exact to="/categories" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
