import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "../../actions/authAction";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
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
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link" to='/Category'>Kategori</Link>
        </li>
        
        <li class="nav-item">
        <Link className="nav-link" to='/Ingredient'>Malzemeler</Link>
        </li>

        <li class="nav-item">
        <Link className="nav-link" to='/Recipe'>Tarifler</Link>
        </li>

        <li class="nav-item">
        <Link className="nav-link" to='/Register'>Kayıt ol</Link>
        </li>
        
        </ul>
    
            <div className="ui compact menu">
            <div className="ui simple dropdown item">
           
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item">
                <Link className="nav-link" to="/Login"
                      onClick={()=>{
                        localStorage.clear();
                      }}
                    >Çıkış Yap</Link>
                </div>
                </div>
              </div>
            </div>
         
  </div>
      </nav>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,{logout})(Header);
