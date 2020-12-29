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
    let token = localStorage.getItem("jwtToken");
    axios
      .get("https://localhost:44357/api/ingredients", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
      }, 
      })
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
    let token = localStorage.getItem("jwtToken");
    axios
      .delete(`https://localhost:44357/api/ingredients/${arrayids}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
      })
      .then(data => {
        console.log(data);
        getIngredient();
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
                  setIngredientState(
                    stateIngredient.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th>
            <th scope="col">#Id</th>
            <th scope="col">Malzeme İsmi</th>
          
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <IngredientRow
            stateIngredient={stateIngredient}
            setIngredientState={setIngredientState}
          />
        </tbody>
      </table>

      <div className="text-right">

      <Link to="/addIngredient">
        <button className="btn btn-primary btn-sm m-2">Malzeme Ekle</button>
      </Link>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteIngredientByIds();
        }}
      >
        Malzeme Sil
      </button>
   </div>

    </div>
  );
}

export default Ingredient;
