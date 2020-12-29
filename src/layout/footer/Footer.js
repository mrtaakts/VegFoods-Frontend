import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "../../actions/authAction";
import './Footer.css';

function Footer() {
  return (
<div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Hakkımda</h6>
            <p class="text-justify"> Veri bilimi ve web programlamaya ilgi duyan, kendini geliştirmeye açık ve yeni teknolojileri öğrenmeye istekli bir bilgisayar mühendisiyim. Bu alanlardaki bilgilerimi geliştirmek amacı ile hem çalışmaktadır.</p>
          </div>

          <div class="col-xs-6 col-md-3">
          <h6>Admin Linkleri</h6>
            <ul class="footer-links">
              <li><Link to='/Category'>Kategori</Link></li>
              <br/>
              <li><Link to='/Recipe'>Tarifler</Link></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Kullanıcı Linkleri</h6>
            <ul class="footer-links ">
              <li> <Link to='/Register'>Kayıt ol</Link></li>
              <li> <Link to='/Login'>Giriş Yap</Link></li>
             
            </ul>
          </div>
        </div>
      
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#"> Mert Aktaş</a>.
            </p>
          </div>

        </div>
      </div>
</div>

  );
}

const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,{logout})(Footer);
