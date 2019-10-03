import React, { Component } from 'react';
import "./studentslist.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUsers, faLock, faTasks, faUser, faIdCard, faHandPointRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';



library.add(faUsers, faLock, faTasks, faUser, faIdCard, faHandPointRight, faCalendar) ;

class Studentslist extends Component {
  constructor(props){
    super(props);
    this.state={
       users:[],
       usrid:''
    };
}
componentDidMount() {
    axios
      .get(`http://13.233.64.181:5000/api/getchild/`+this.props.location.state.className)
      .then(res => this.setState({ users: res.data.data }))
      .catch(err => console.log(err))
      console.log("jefgewjfywe"+ JSON.stringify(this.props))
  }

  navto(){
    var userid = "5d846cb58c305b2cc1d85034"
  }

addUserIdToProps() {
  console.log("Came to Add userID" + JSON.stringify(this.props))
}


  render() {
    return (
      <div>
  <br/>
      
        <div className="card1">
          <div className="container">
          <div className = "card-body1">
            <table>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faIdCard} size="lg" />&nbsp; &nbsp;ID number</th>
                <th><FontAwesomeIcon icon={faHandPointRight} size="lg" />&nbsp; &nbsp;Belongs to</th>
                <th><FontAwesomeIcon icon={faCalendar} size="lg" />&nbsp; &nbsp;Date of joining</th>
              </tr>
              {/* {()=> this.setState({usrid:user._id})}  */}
              {this.state.users.map(user=>{
                return           <tr>
                <td><img  class = "profile" src = {user.Image} alt = "rsz_maleimage"/><span><button type = "submit" onClick= {() => this.addUserIdToProps(user)} className = "btn btn-link" style = {{fontSize: "1em", fontFamily:"inherit"}}>{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}&nbsp;{}</button></span></td>
                <td style={{ textAlignLast: "center" }}>{user.ID_no}</td>
                <td style={{ textAlignLast: "center" }}>{user.belongsTo}</td>
                <td style = {{textAlignLast: "center"}}>{user.joining_date}</td>
                </tr>
                        })}
            </table>
          </div>
          <br/>
         
      </div>
      </div>
      </div>
      
    );
  }
}

export default Studentslist;
