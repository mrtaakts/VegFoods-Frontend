import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Container,Form,
     Input,
    Button,
  } from 'reactstrap';
  import {loginUser} from '../../actions/authAction';
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
          
        <Container className="pt-4">
        
        <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
        <div className="column">
        <Form className="ui form" onSubmit={this.loginUser.bind(this)}>
        <h2>Giriş Yap</h2>
          <div className="field">
            <label>username</label>
            <Input
                type="text"
                name="username"
                value={username}
                onChange={this.changeInput}
                id="username"
                placeholder="UserName"
              />
          </div>
          <div className="field">
            <label>Şifre</label>
            <Input
                type="password"
                name="password"
                value={password}
                onChange={this.changeInput}
                id="password"
                placeholder="********"
              />
          </div>
          <Button className="ui button">Giriş Yap</Button>
          </Form>
           </div>
           <div className="middle aligned column">
            <div className="ui big button">
              <i className="signup icon"></i>
              <Link to="/Register">Kayıt Ol</Link> 
            </div>
          </div>
          </div><div className="ui vertical divider">
            Ya da
          </div></div>
          </Container>
        )
    }
}
const mapStateToProps=(state) => {
    return state;
}
export default connect(mapStateToProps,{loginUser}) (LoginComponent);