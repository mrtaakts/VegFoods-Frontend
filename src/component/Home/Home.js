import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Addrecipe(props) {
  const submit = e => {
    let name = e.target[0].value;
    let recipeId = e.target[1].value;
    let description = e.target[2].value;
    let recipes = {
      name,
      recipeId,
      description,
      

    };
    postrecipe(recipes);
  };

  const postrecipe = recipes => {
    axios
      .post("https://localhost:44357/api/categories", recipes)
      .then(d => {
        console.log(d);
        props.history.push("/");
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
      <h3 style={{marginTop:"2vh", marginBottom:"2vh"}}>Tarif Ekle</h3>
      <div className="form-group">
        <label><b>Kategori İsmi</b></label>
        <input type="text" className="form-control form-control-sm"
        placeholder="Kategori İsmini Giriniz" />
      </div>
 
      <div className="text-center">
        <div className="text-center">
        <button type="submit" className="btn btn-secondary " >
        Ekle
      </button>
        </div>
     
      </div>
     
    </form>
  </div>
  );
}

export default withRouter(Addrecipe);
