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
      .delete(`https://localhost:44357/api/recipes/${arrayids}`)
      .then(data => {
        console.log(data);
        getRecipe();
      })
      .catch(err => alert(err));
  };

  return (
    <div className="col-md-9 mx-auto mt-5">

 
      <table className="table table-striped text-center" style={{marginTop:"3vh" , backgroundColor:"white", color:"#737373"}}>
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
            <th scope="col">#Id</th>
            <th scope="col">Tarif İsmi</th>
            <th scope="col">Kategori</th>
            <th scope="col">İçerik</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        <RecipeRow
            stateRecipe={stateRecipe}
            setRecipeState={setRecipeState}
          />
        </tbody>
      </table>

      <div className="text-right" style={{color:"#737373"}}>
      <Link to="/addRecipe">
        <button className="btn btn-primary btn-sm m-2">Tarif Ekle</button>
      </Link>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteRecipeByIds();
        }}
      >
        Tarif Sil
      </button>
    
      </div>
    </div>
  );
}

export default Recipe;
