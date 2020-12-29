import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";


function Addrecipe(props) {
  let categories;
  const [stateCategory, setCategoryState] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const submit = e => {
    let name = e.target[0].value;
    let description = e.target[1].value;
    let categoryId = e.target[2].value;
    let recipe = {
      name,
      categoryId,
      description
    };
    postrecipe(recipe);
  };

  const postrecipe = recipe => {
    axios
      .post("https://localhost:44357/api/categories", recipe)
      .then(d => {
        console.log(d);
        props.history.push("/");
      })
      .catch(err => alert(err));
  };

  const getCategory = () => {
    axios
      .get("https://localhost:44357/api/categories")
      .then(data => {
        categories = data.data;
        setCategoryState(
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

  return (
    <div className="col-md-9 mx-auto mt-5 pt-2 pb-3" style={{marginBottom:"30vh"}}>
    <form className="col-md-9 mx-auto pt-2 pb-2" style={{ backgroundColor:"white", color:"#737373", marginTop:"5vh"}}
      onSubmit={e => {
        e.preventDefault();
        submit(e);
       
      }}
    >
      <h3 style={{marginTop:"2vh", marginBottom:"2vh"}}>Kategori Ekle</h3>
      <div className="form-group">
        <label><b>Tarif İsmi</b></label>
        <input type="text" className="form-control form-control-sm"
        placeholder="Tarif İsmini Giriniz" />
      </div>

      <div className="form-group">
        <label><b>İçerik</b></label>
        <input type="text" className="form-control form-control-sm"
        placeholder="Tarifin İçeriğini Giriniz" />
      </div>

      <div className="form-group">
      <select class="form-control">
      <option>Kategori Seçiniz</option>
      {
        this.categories.map(d => <option>{d.Name}</option>)
      }
        </select>
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
