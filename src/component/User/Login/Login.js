import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Container,Form,
     Input,
    Button,
  } from 'reactstrap';
  import {loginUser} from '../../../actions/authAction';
 class LoginComponent extends Component {
     
    state ={
        username:"",
        password:""
    }
    loginUser =(e) => {
        e.preventDefault();
        const {username,password}=this.state;
        this.props.loginUser(username,password);
    }
    changeInput= (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {username,password}=this.state;
        return (
          
        <Container className="pt-4" style={{color:"#737373"}} >
        
        <div className="ui placeholder segment mx-2 my-2" >
        <div className="ui two column very relaxed stackable grid">
        <div className="column col-md-9 mx-auto mt-5 pt-2 pb-3" style={{ backgroundColor:"white"}}>
        <Form className="ui form" onSubmit={this.loginUser.bind(this)}>
        <h2 className="">Giriş Yap</h2>
          <div className="field my-2">
            <label>Kullanıcı Adı</label>
            <Input
                type="text"
                name="username"
                value={username}
                onChange={this.changeInput}
                id="username"
                placeholder="Kullanıcı Adınızı Giriniz"
              />
          </div>
          <div className="field mb-3">
            <label>Şifre</label>
            <Input
                type="password"
                name="password"
                value={password}
                onChange={this.changeInput}
                id="password"
                placeholder="Şifrenizi giriniz"
              />
          </div>

          <div className="text-center mt-4" >
          <Button className="ui button mb-2 ">Giriş Yap</Button>
          </div>
         
          </Form>
           </div>
     
          </div></div>
          </Container>
        )
    }
}
const mapStateToProps=(state) => {
    return state;
}
export default connect(mapStateToProps,{loginUser}) (LoginComponent);