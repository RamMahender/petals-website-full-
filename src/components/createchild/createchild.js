import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUtensils, faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import {Container, Row, Col } from 'react-grid-system';
library.add(faUtensils);
class Createchild extends Component {
  constructor() {
    super();
    // this.state = {
    //   first_name: "",
    //   middle_name: "",
    //   last_name:"",
    // };

      // this.setState({
    //   [event.target.name]: event.target.value
    // });
    // const data = new FormData(event.target);
    // const body11 = data;
    // console.log("khg" + JSON.stringify(body11));
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  

    fetch('http://13.233.64.181:5000/api/createchild', {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        first_name: event.target.first_name.value,
        middle_name: event.target.middle_name.value,
        last_name: event.target.last_name.value,
        gender: event.target.gender.value,
        date_of_birth: event.target.date_of_birth.value,
        father_name: event.target.father_name.value,
        father_number: event.target.father_number.value,
        mother_name: event.target.mother_name.value,
        mother_number: event.target.mother_number.value,
        email1: event.target.email1.value,
        email2: event.target.email2.value,
        className: event.target.className.value,
        belongsTo: event.target.belongsTo.value,
        ID_no: event.target.ID_no.value,
        joining_date: event.target.joining_date.value,
        start_time: event.target.start_time.value,
        end_time: event.target.end_time.value,
        address: event.target.address.value
      })

    })
    .then(res=> res.json())
      .then((result)=>
      {
          alert(JSON.stringify(result));
          console.log("abxcd" + JSON.stringify(result.message));
      },
      (error)=>{
        alert('Failed')
      }
      )
  }

  // submitValue = () => {
  //   console.log(this)
  // }


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     first_name: '',
  //     middle_name: '',
  //    last_name:'' 
  //   };
  // }

  // onChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value});
  // }
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const url = "http://13.233.64.181:5000/api/createchild";
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => this.setState({ first_name:'', middle_name:'', last_name:'' }))
  //     .catch(e => console.log('error', e));
  // }
  render() {
    return (
      <div>
        <br />
        <h2 style={{ fontFamily: "arial, sans-serif", color: "black", }}><FontAwesomeIcon icon={faUserPlus} size="lg" />&nbsp; &nbsp;<b>Create Child</b></h2>
        <br />
        <ol className="breadcrumb">
          <li>Home</li>
          <li style={{ color: "#ffa901" }}>Create Child</li>
        </ol>

        <br />
        <div className="card1">
          <div className="container">
            <div className="card-body1">
              <h1 style={{ textAlignLast: "center" }}>Create Child</h1>
              <br />
              <form onSubmit = {this.handleSubmit}>
                <table>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor="first_name">First name</label></td>
                    <td style={{ textAlignLast: "center" }}><input id="first_name" type="text" name="first_name" placeholder="Enter the First Name" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor="middle_name">Middle name</label></td>
                    <td style={{ textAlignLast: "center" }}><input id="middle_name" type="text" name="middle_name" placeholder="Enter the Middle Name" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor="last_name">Last name</label></td>
                    <td style={{ textAlignLast: "center" }}><input id="last_name" type="text" name="last_name" placeholder="Enter the Last Name" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor="last_name">Gender</label></td>
                    <td style={{ textAlignLast: "center" }}>
                      <input id = "gender"type="radio" name="gender" value="Female" />&nbsp;Male&nbsp;
                    <input id= "gender" type="radio" name="gender" value="Male" /> &nbsp;Female
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "date_of_birth">Date of birth</label></td>
                    <td style={{ textAlignLast: "center" }}><input id = "date_of_birth" type="date" name="date_of_birth" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "father_name">Father Name</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="text" id = "father_name" name="father_name" placeholder="Enter the Father Name" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "father_number">Father Number</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="number" name="father_number" pattern="[0-9]{5}-[0-9]{5}" placeholder="Enter the Father Number" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "mother_name">Mother Name</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="text" id = "mother_name" name="mother_name" placeholder="Enter the Mother Name" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "mother_number">Mother Number</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="tel" name="mother_number" id = "mother_number" placeholder="Enter the Mother Number" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "email1">Email 1</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="email" id= "email1" name="email1" placeholder="Enter the Primary mail" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "email2">Email 2</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="email" id = "email2" name="email2" placeholder="Enter the Secondary mail" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "className">Class</label></td>
                    <td style={{ textAlignLast: "center" }}>
                      <select name="className" id = "className">
                        <option id= "className" name = "className" value="aster">aster</option>
                        <option id = "className" name = "className" value="toddlers">toddlers</option>
                        <option id = "className" name = "className" value="rose">rose</option>
                        <option id = "className" name = "className" value="iris">iris</option>
                        <option id = "className" name = "className" value="ukg">ukg</option>
                        <option id = "className" name = "className" value="grade1">grade1</option>
                        <option id = "className" name = "className" value="daffodill">daffodill</option>
                      </select>
                  </td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "belongsTo">Belongs to</label></td>
                    <td style={{ textAlignLast: "center" }}>
                      <input type="radio" name="belongsTo" id = "belongsTo" value="Regularclass" />&nbsp;Regular Class
                    <input type="radio" name="belongsTo" id = "belongsTo" value="Daycare" /> &nbsp;Day Care
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "ID_no">ID number</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="text" name="ID_no" id = "ID_no" placeholder="Enter the ID Number" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "joining_date">Joining Date</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="date" name="joining_date" id = "joining_date" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "start_time">Start time</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="time" name="start_time" id = "end_time" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "end_time">End time</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="time" name="end_time" id = "end_time" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlignLast: "center" }}><label htmlFor = "address">Address</label></td>
                    <td style={{ textAlignLast: "center" }}><input type="text" id = "address" name="address" placeholder="Enter the Address" /></td>
                  </tr><br/>
                  <button type="submit" onClick = {this.submitValue} class="btn btn-primary" style={{ fontSize: "1.3em", textAlignLast: "middle", marginLeft: "680px" }}>Create</button>
                </table>
              </form>


              <br />
            </div>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default Createchild;
