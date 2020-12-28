import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function AddCategory(props) {
  const submit = e => {
    let name = e.target[0].value;
    let category = {
      name

    };
    postCategory(category);
  };

  const postCategory = category => {
    axios
      .post("https://localhost:44357/api/categories", category)
      .then(d => {
        console.log(d);
        props.history.push("/");
      })
      .catch(err => alert(err));
  };

  return (
    <div className="container my-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          submit(e);
        }}
      >
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
   

        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(AddCategory);
