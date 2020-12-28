import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function EditCategory(props) {
  const [stateCust, setstateCust] = useState({});
  useEffect(() => {
    let id = props.match.params.id;
    getCategoryById(id);
  }, []);
  const getCategoryById = id => {
    axios
      .get(`https://localhost:44357/api/categories/${id}`)
      .then(d => {
        let Category = d.data;
        console.log(Category);
        setstateCust({
          id: Category.id,
          name: Category.Name,
         
        });
      })
      .catch(err => alert(err));
  };
  const putCategory = e => {
    axios
      .put(`https://localhost:44357/api/categories`, stateCust)
      .then(d => {
        props.history.push("/");
      })
      .catch(err => alert(err));
  };

  return (
    <div className="container my-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          putCategory(e);
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

export default withRouter(EditCategory);
