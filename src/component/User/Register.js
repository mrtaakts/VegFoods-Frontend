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
    <div className="col-md-9 mx-auto mt-5 pt-2 pb-3">
     <div className="col-md-9 mx-auto pt-2 pb-2" style={{ backgroundColor:"white"}}>
      <form
        onSubmit={e => {
          e.preventDefault();
          submit(e);
        }}
        style={{color:"#737373"}}
      >
        <h2>Kayıt Ol</h2>
        <div className="form-group">
          <label> <b> Kullanıcı Adı</b></label>

          <input type="text" className="form-control form-control-sm"  placeholder="Kullanıcı adınızı giriniz" />
        </div>
        <div className="form-group">
          <label><b>Şifre </b></label>
          <input type="text" className="form-control form-control-sm" placeholder="Şifrenizi giriniz" />
        </div>
        <div className="form-group">
          <label> <b>Tam Ad</b></label>
          <input type="text" className="form-control form-control-sm" placeholder="Tam adınızı giriniz" />
        </div>
         
        
   
<div className="text-center">
<button type="submit" className="btn btn-secondary ">
          Kayıt Ol
        </button>
</div>
        
      </form>
    </div>
    </div>
  );
}

export default withRouter(AddRegister);
