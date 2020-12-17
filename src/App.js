import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound";
import NavBar from "./components/navbar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Categories from "./components/category/Categories";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route path="/categories" component={Categories}/>
          <Redirect from="/" exact to="/" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

//   {/* <Route path="/search/:country" component={HotelsList} />
//           <Route path="/search" component={Search} /> */}
