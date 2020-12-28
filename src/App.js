import React, { Component } from "react";
import Header from "./layout/header/Header";
import Category from "./component/Category/Category";
import { Switch, Route } from "react-router-dom";
import AddCategory from "./component/Category/AddCategory/AddCategory";
import EditCategory from "./component/Category/EditCategory/EditCategory";
import AddIngredient from "./component/Ingredient/AddIngredient/AddIngredient";
import Ingredient from "./component/Ingredient/Ingredient";
import EditIngredient from "./component/Ingredient/EditIngredient/EditIngredient";
import Register from "./component/User/Register";
import Recipe from "./component/Recipe/Recipe";
import Login from "./component/Login/Login";
import history from './helpers/history';
import {isLoggedIn} from './actions/authAction';
import {connect} from 'react-redux';
import { Router } from "react-router-dom";



class App extends Component {
  componentDidMount(){
    this.props.isLoggedIn();
}
  render(){
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact component={Category} path="/Category">
          
          </Route>
          <Route exact component={AddCategory} path="/addCategory">
          
          </Route>
          <Route exact component={AddIngredient} path="/addIngredient">
         
          </Route>
          <Route exact component={Ingredient} path="/Ingredient">
         
          </Route>
          <Route exact component={Register} path="/Register">
       
          </Route>
          <Route exact component={Recipe} path="/Recipe">
        
          </Route>
          <Route exact component={Login} path="/Login">
         
          </Route>
          <Route exact path="/edit/:id" render={props => <EditCategory />} />
          <Route exact path="/editIngredient/:id" render={props => <EditIngredient />} />
        </Switch>
      </Router>
    </div>
  );
  }
}

export default connect(null,{isLoggedIn})(App);
