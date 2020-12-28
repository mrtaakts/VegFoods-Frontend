import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function EditIngredient(props) {
  const [stateCust, setstateCust] = useState({});
  useEffect(() => {
    let id = props.match.params.id;
    getIngredientById(id);
  }, []);
  const getIngredientById = id => {
    axios
      .get(`https://localhost:44357/api/Ingredients/${id}`)
      .then(d => {
        let Ingredient = d.data;
        console.log(Ingredient);
        setstateCust({
          id: Ingredient.id,
          name: Ingredient.Name,
         
        });
      })
      .catch(err => alert(err));
  };
  const putIngredient = e => {
    axios
      .put(`https://localhost:44357/api/Ingredients`, stateCust)
      .then(d => {
        props.history.push("/Ingredient");
      })
      .catch(err => alert(err));
  };

  return (
    <div className="container my-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          putIngredient(e);
        }}
      >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={stateCust.name}
            onChange={e => {
              let value = e.target.value;
              setstateCust({
                Name: value,
                
                id: stateCust.id,
                
               
              });
            }}
            className="form-control form-control-sm"
          />
        </div>
 


        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(EditIngredient);
