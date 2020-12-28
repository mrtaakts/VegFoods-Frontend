import React from "react";
import Header from "./layout/header/Header";
import Category from "./component/Category/Category";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCategory from "./component/Category/AddCategory/AddCategory";
import EditCategory from "./component/Category/EditCategory/EditCategory";
import AddIngredient from "./component/Ingredient/AddIngredient/AddIngredient";
import Ingredient from "./component/Ingredient/Ingredient";
import EditIngredient from "./component/Ingredient/EditIngredient/EditIngredient";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Category />
          </Route>
          <Route exact path="/add">
            <AddCategory />
          </Route>
          <Route exact path="/addIngredient">
            <AddIngredient />
          </Route>
          <Route exact path="/Ingredient">
            <Ingredient />
          </Route>
          <Route exact path="/edit/:id" render={props => <EditCategory />} />
          <Route exact path="/editIngredient/:id" render={props => <EditIngredient />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
