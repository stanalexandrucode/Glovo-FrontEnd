import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound";
import NavBar from "./components/Navbar";
import Categories from "./components/category/Categories";
import Meals from "./components/meals/Meals";
import Favorites from "./components/Favorites";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar/>
      <main className="container">
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route path="/categories" component={Categories} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/meals/:strCategory" component={Meals} />
          <Redirect from="/" exact to="/categories" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

//   {/* <Route path="/search/:country" component={HotelsList} />
//           <Route path="/search" component={Search} /> */}
