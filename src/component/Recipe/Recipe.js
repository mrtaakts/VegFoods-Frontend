import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeRow from "./RecipeRow"

function Recipe() {
  const [stateRecipe, setRecipeState] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = () => {
    axios
      .get("https://localhost:44357/api/recipes/ingredient")
      .then(data => {
        let recipes = data.data;
        setRecipeState(
          recipes.map(d => {
            return {
              select: false,
              id: d.id,
              name: d.name,
              categoryId : d.categoryId,
              description : d.description,
              ingredients: d.ingredients
           
            };
          })
        );
      })
      .catch(err => alert(err));
  };

  const deleteRecipeByIds = () => {
    let arrayids = [];
    stateRecipe.forEach(d => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    axios
      .delete(`https://localhost:44357/api/categories/${arrayids}`)
      .then(data => {
        console.log(data);
        getRecipe();
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <div>
      <Link to="/addRecipe">
        <button className="btn btn-primary btn-sm m-2">Add Recipe</button>
      </Link>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteRecipeByIds();
        }}
      >
        Delete Recipe
      </button>
    
      </div>
 
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  setRecipeState(
                    stateRecipe.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">categoryId</th>
            <th scope="col">Description</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
        <RecipeRow
            stateCategory={stateRecipe}
            setCategoryState={setRecipeState}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Recipe;
