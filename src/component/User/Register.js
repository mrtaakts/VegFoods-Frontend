import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function AddRegister(props) {
  const submit = e => {
    let UserName = e.target[0].value;
    let Password = e.target[1].value;
    let FullName = e.target[2].value;
    
    let Register = {
        UserName,
        Password,
        FullName
    };
    postRegister(Register);
  };

  const postRegister = Register => {
    axios
      .post("https://localhost:44357/api/Auth/SignUp", Register)
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
          <label>UserName</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
   

        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(AddRegister);
