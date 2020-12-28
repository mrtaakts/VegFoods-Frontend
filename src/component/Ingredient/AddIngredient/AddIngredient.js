import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Ingredient from "../Ingredient";
import { Redirect } from "react-router-dom";
import { browserHistory } from 'react-router';
function AddIngredient(props) {
  const submit = e => {
    let name = e.target[0].value;
    let ingredient = {
      name

    };
    postIngredient(ingredient);
  };


  
  const postIngredient = ingredient => {
    axios
      .post("https://localhost:44357/api/ingredients", ingredient)
      .then(d => {
        window.location.pathname= '/Ingredient'; // REDIRECT
        console.log(d);
      })
      .catch(err => alert(err));
  };

  return (
    <div className="container my-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          submit(e);
         
        }}
      >
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
   

        <button type="submit" className="btn btn-primary btn-sm" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(AddIngredient);
