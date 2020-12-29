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
    let token = localStorage.getItem("jwtToken");
    axios
      .post("https://localhost:44357/api/ingredients", ingredient, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
      })
      .then(d => {
        props.history.push("/Ingredient"); // REDIRECT
        console.log(d);
      })
      .catch(err => alert(err));
  };

  return (
    <div className="col-md-9 mx-auto mt-5 pt-2 pb-3" style={{marginBottom:"30vh"}}>
      <form className="col-md-9 mx-auto pt-2 pb-2" style={{ backgroundColor:"white", color:"#737373", marginTop:"5vh"}}
        onSubmit={e => {
          e.preventDefault();
          submit(e);
         
        }}
      >
        <h3 style={{marginTop:"2vh", marginBottom:"2vh"}}>Malzeme Ekle</h3>
        <div className="form-group">
          <label> <b> Malzeme İsmi </b></label>
          <input type="text" className="form-control form-control-sm" placeholder="Malzeme İsmini Giriniz" />
        </div>
   
        <div className="text-center">
        <button type="submit" className="btn btn-secondary " >
          Ekle
        </button>
        </div>
       
      </form>
    </div>
  );
}

export default withRouter(AddIngredient);
