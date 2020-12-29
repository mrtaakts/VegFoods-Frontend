import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "../../actions/authAction";

function Header() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          VegFoods
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to='/Category'>Kategori</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to='/Ingredient'>Malzemeler</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link" to='/Recipe'>Tarifler</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link" to='/Register'>Kayıt ol</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link" to="/Login"> Giriş</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="/Login"
          onClick={()=>{
            localStorage.clear();
              }}> Çıkış Yap</Link>
        </li>


        </ul>
    
          
           
              
              
     
                
           
         
  </div>
      </nav>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,{logout})(Header);
