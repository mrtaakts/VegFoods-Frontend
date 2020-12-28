import React, { useState, useEffect } from "react";
import axios from "axios";
import IngredientRow from "./IngredientRow";
import { Link } from "react-router-dom";

function Ingredient() {
  const [stateIngredient, setIngredientState] = useState([]);

  useEffect(() => {
    getIngredient();
  }, []);

  const getIngredient = () => {
    axios
      .get("https://localhost:44357/api/ingredients")
      .then(data => {
        let categories = data.data;
        setIngredientState(
          categories.map(d => {
            return {
              select: false,
              id: d.id,
              name: d.name,
           
            };
          })
        );
      })
      .catch(err => alert(err));
  };

  const deleteIngredientByIds = () => {
    let arrayids = [];
    stateIngredient.forEach(d => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    axios
      .delete(`https://localhost:44357/api/ingredients/${arrayids}`)
      .then(data => {
        console.log(data);
        getIngredient();
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <Link to="/addIngredient">
        <button className="btn btn-primary btn-sm m-2">Add Ingredient</button>
      </Link>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteIngredientByIds();
        }}
      >
        Delete Ingredient
      </button>
   
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  setIngredientState(
                    stateIngredient.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <IngredientRow
            stateIngredient={stateIngredient}
            setIngredientState={setIngredientState}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Ingredient;
