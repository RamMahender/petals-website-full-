import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/fontawesome-free-solid'
// import ControlLabel from 'react-bootstrap/lib/ControlLabel'
// import * as Icons from '@fortawesome/fontawesome-free-solid';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
// import 'font-awesome/css/font-awesome.min.css';

import './forms.css';
library.add(faUser, faLock);

class Log extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.state = {
      hidden:true,
      username: "",
      password: "",
      usernameError:"",
      passwordError:"",
      errors: []
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
  //  myFunction() {
  //   var x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }
  
  navigation = () => {
    var date = new Date();
    var pass1 = ("0" + date.getDate()).slice(-2) + "" +("0" + (date.getMonth() + 1)).slice(-2) + "aster123" ;
    var pass2 = ("0" + date.getDate()).slice(-2) + "" +("0" + (date.getMonth() + 1)).slice(-2) + "ukg123" 
    var pass3 = ("0" + date.getDate()).slice(-2) + "" +("0" + (date.getMonth() + 1)).slice(-2) + "toddlers123" 
    var pass4 = ("0" + date.getDate()).slice(-2) + "" +("0" + (date.getMonth() + 1)).slice(-2) + "iris123" 
    var pass5 = ("0" + date.getDate()).slice(-2) + "" +("0" + (date.getMonth() + 1)).slice(-2) + "daffodil123" 
    var pass6 = ("0" + date.getDate()).slice(-2) + "" +("0" + (date.getMonth() + 1)).slice(-2) + "grade1123" 
    var pass7 = ("0" + date.getDate()).slice(-2) + "" +("0" + (date.getMonth() + 1)).slice(-2) + "rose123" 

    console.log("date" + date);
    console.log("pass " + pass1);
    if(this.state.username === "aster" && this.state.password === pass1 ){
   this.props.history.push({pathname: '/dashboard', state: { className: "aster" }}) ;

   console.log("aster-login"+ JSON.stringify(this.props));
    }
    else if(this.state.username === "ukg" && this.state.password === pass2 ){
      this.props.history.push({pathname: '/dashboard', state: { className: "ukg" }});
      console.log("ukg-login"+ JSON.stringify(this.props));
       }
       else if(this.state.username === "toddlers" && this.state.password === pass3 ){
        this.props.history.push({pathname: '/dashboard', state: { className: "toddlers" }});
        console.log("toddlers-login"+ JSON.stringify(this.props));
         }
         else if(this.state.username === "iris" && this.state.password === pass4 ){
          this.props.history.push({pathname: '/dashboard', state: { className: "iris" }});
          console.log("iris-login"+ JSON.stringify(this.props));
           }
           else if(this.state.username === "daffodill" && this.state.password === pass5 ){
            this.props.history.push({pathname: '/dashboard', state: { className: "daffodill" }});
            console.log("daffodil-login"+ JSON.stringify(this.props));
             }
             else if(this.state.username === "grade1" && this.state.password === pass6 ){
              this.props.history.push({pathname: '/dashboard', state: { className: "grade1" }});
               }
               else if(this.state.username === "rose" && this.state.password === pass7 ){
                this.props.history.push({pathname: '/dashboard', state: { className: "rose" }});
                 }
                 else if(this.state.username === "admin@petals.com" && this.state.password === "admin123"){
                   this.props.history.push('/admin');
                 }
                //  else if(this.state.username.length === 0){
                //    alert("Username or password should not be emplty")
                //  }
    else{
      // this.props.history.push('/');
      alert("Username or password is invalid");
    }
    console.log("username"+ this.state.username);
    console.log("password"+ this.state.password);
  
}

  render() {
    return (
      <div className="limiter">
        
      <div className="container-login100" style={{backgroundImage: "url('./img-01.jpg')"}}>
        <div className="wrap-login100 p-t-190 p-b-30">
        <form onSubmit={this.handleSubmit}>
          <form className="login100-form validate-form">
            <div className="login100-form-avatar">
              <img src="./petals-logo.png" alt="AVATAR"/>
            </div>
  
            {/* <span className="login100-form-title p-t-20 p-b-45">
              Petals
            </span>&nbsp; */}
  <br/>
            <div className="wrap-input100 validate-input m-b-10" data-validate = "Username is required">
              <input className="input100" id = "user" type="text" name="username" placeholder="Username" value = {this.state.username} onChange={this.handleChange}/>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
              <FontAwesomeIcon icon={faUser} />
              </span>
            </div>&nbsp;

            
<br/>
            <div className="wrap-input100 validate-input m-b-10" data-validate = "Password is required">
              <input className="input100" type={this.state.hidden ? "password" : "text"} name="password" placeholder="Password"  value = {this.state.password} onChange={this.handleChange}/>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
              <FontAwesomeIcon icon={faLock} />
              </span>&nbsp;
              <input type = "checkbox" onClick={this.toggleShow} style = {{textAlign:"middle"}}/>Show Password
            </div>&nbsp;
  <br/>
            <div className="container-login100-form-btn p-t-10">
              <button className="login100-form-btn" onClick = {this.navigation}>
                Login
              </button>
            </div>
          </form>
          </form>
        </div>
      </div>
    </div>
);
  }
}
export default Log;