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
    let token = localStorage.getItem("jwtToken");

    axios
      .get(`https://localhost:44357/api/Ingredients/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        }
      })
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
    <div className="col-md-9 mx-auto mt-5 pt-2 pb-3" style={{marginBottom:"30vh"}}>
      <form className="col-md-9 mx-auto pt-2 pb-2" style={{ backgroundColor:"white", color:"#737373", marginTop:"5vh"}}
        onSubmit={e => {
          e.preventDefault();
          putIngredient(e);
        }}
      >
        <h3 style={{marginTop:"2vh", marginBottom:"2vh"}}>Malzeme Düzenle</h3>
        <div className="form-group">
          <label><b> Malzeme İsmi</b></label>
          <input
            type="text"
            value={stateCust.name}
            placeholder = "Güncel Malzeme İsmini Giriniz"
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
 

      <div className="text-center"> <button type="submit" className="btn btn-secondary">
          Güncelle
        </button>
        </div>
       
      </form>
    </div>
  );
}

export default withRouter(EditIngredient);
