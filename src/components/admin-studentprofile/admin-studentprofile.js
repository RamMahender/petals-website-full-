import React, { Component } from 'react';
import './admin-studentprofile.css';
import axios from 'axios';
import Moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock, faEdit, faTrash, } from "@fortawesome/free-solid-svg-icons";
library.add(faUser);
class AdminStudentprofile extends Component {
    constructor(){
        super();
        this.state={
           users:[],
           id:'5d8b03e0d5e56d53a5d03779'
        }
    }
    // userid(){
    //     this.setState.id = "5d8b03e0d5e56d53a5d03779"
    // }

    componentDidMount() {
        axios
          .get(`http://13.233.64.181:5000/api/getchild/aster/`+ this.state.id)
          .then(res => this.setState({ users: res.data.data }))
          .catch(err => console.log(err))
        //   console.log("USERID" + JSON.stringify());
      }

      delete(e) {
        e.preventDefault();
        axios.delete('http://13.233.64.181:5000/api/updatechild/' + this.state.id)
        .then(res => console.log(res.data.data));
    }


    //   delete(e) {
    //     e.preventDefault();
    //     axios.delete('http://13.233.64.181:5000/api/updatechild/' + this.state.id)
    //     .then(res => this.setState({userid : res.data.data }) )
    //     .catch(err => console.log(err));
    //     .then(res=> res.json())
    //   .then((result)=>
    //   {
    //       alert(JSON.stringify(result));
    //       console.log("abxcd" + JSON.stringify(result.message));
    //   },
    //   (error)=>{
    //     alert('Failed')
    //   }
    //   )

    //     axios({
    //         method: 'DELETE',
    //         url: 'http://13.233.64.181:5000/api/updatechild/' + this.state.id,
    //         headers: { 'Content-Type': 'application/json' },
    //       });
    // }



//       deleteChild(childid) 
//       {
//       fetch('http://13.233.64.181:5000/api/updatechild/'+this.state.id,{
//         method:'DELETE',
//         header:{'Accept':'application/json',
//         'Content-Type':'application/json'
//     }
//     })
// }

  render() {
      const {childid} = this.state;

    console.log("abcd"+JSON.stringify(this.state.users));
    console.log("UserID" + JSON.stringify());
    
    return (
      <div>
      <br/>
      {/* <h2 style = {{fontFamily:"arial, sans-serif", color: "black"}}><b>Water Intake for Students</b></h2>
      <br/><br/> */}
      <ol class="breadcrumb">
  <li>Home</li>
  <li>Students List</li>
  <li style = {{color:"#ffa901"}}>Student Profile</li>
</ol>
<br/>
<br/>
<div class="card height-auto">
                    <div class="card-body1">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>About Me</h3>
                            </div>
                        </div>
                        <div class="single-info-details" style={{display : "flex", marginRight: "40px"}}>
                            <div class="item-img" style={{marginRight: "40px"}}>
                                <img className= "img1" src="./student1.jpg" alt="student" />
                            </div>
                            <div class="item-content">
                                <div class="header-inline item-header">
                                <h3 class="text-dark-medium font-medium"><b>{this.state.users.first_name}&nbsp;{this.state.users.middle_name}&nbsp;{this.state.users.last_name}</b></h3>
                                    <br/>
                                    <div class="header-elements">
                                        <ul>
                                            <li><button type="submit" onClick={() => this.props.history.push({ pathname: '/editchild', state: { usrid: this.state.id } })} ><FontAwesomeIcon icon={faEdit} size="lg" color="green"/></button></li>
                                            <li><button onClick={(e)=>(this.delete(e))} variant="danger"><FontAwesomeIcon icon={faTrash} size="lg" color="red"/></button></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale 
                                word moun taiery.Aliquam erat volutpaturabiene natis massa sedde  sodale 
                                word moun taiery.</p>
                                <br/>
                                <div class="info-table table-responsive">
                                    {/* <form onSubmit={this.delete}> */}
                                    <table class="table text-nowrap">
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td class="font-medium text-dark-medium">{this.state.users.first_name}&nbsp;{this.state.users.middle_name}&nbsp;{this.state.users.last_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td class="font-medium text-dark-medium">{this.state.users.gender}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth:</td>
                                                <td class="font-medium text-dark-medium">{Moment(this.state.users.date_of_birth).format('DD-MM-YYYY')}</td>
                                            </tr>
                                            <tr>
                                                <td>Father Name:</td>
                                                <td class="font-medium text-dark-medium">{this.state.users.father_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Father's Phone:</td>
                                                <td class="font-medium text-dark-medium">{this.state.users.father_number}</td>
                                            </tr>
                                            <tr>
                                                <td>Father's Email:</td>
                                                <td class="font-medium text-dark-medium">{this.state.users.email1}</td>
                                            </tr>
                                            <tr>
                                                <td>Mother Name:</td>
                                                <td class="font-medium text-dark-medium">{this.state.users.mother_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Mother's Phone:</td>
                                                <td class="font-medium text-dark-medium">{this.state.users.mother_number}</td>
                                            </tr>
                                            <tr>
                                                <td>Mother's Email:</td>
                                                <td class="font-medium text-dark-medium">{this.state.users.email2}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
    )
  }
}

export default AdminStudentprofile;
