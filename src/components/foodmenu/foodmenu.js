import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import {Container, Row, Col } from 'react-grid-system';
library.add(faUtensils);
class Foodmenu extends Component {
  constructor(props){
    super(props);
      this.state = {
        users : []
    }
  }
  componentDidMount(){
    axios
    .get('http://13.233.64.181:5000/api/getmenu')
    .then(res => this.setState({users: res.data.data.menu_data}))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
          <br/>
        <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUtensils} size="lg" />&nbsp; &nbsp;<b>Food Menu</b></h2>
        <br />
         <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>Food Menu</BreadcrumbItem>
      </Breadcrumb>
        <br />
        {this.state.users.map(user =>{
        return <div>
          <div className="card1" >
          <div className="container" >
          <div className = "card-body1" style={{backgroundColor:"#FF8054"}}>
          <h1 style={{ textAlignLast: "center" }}>{user.day}</h1>
          <br/>
            <table>
              {/* <tr>
                <th style={{ textAlignLast: "center" }}><h1>Monday</h1></th>
                </tr> */}
              
                  <tr>
                <td style={{ textAlignLast: "center" }}>Breakfast</td>
                <td style={{ textAlignLast: "center" }}>{user.breakfast}</td>
              </tr>
              <tr>
                <td style={{ textAlignLast: "center" }}>Lunch</td>
                <td style={{ textAlignLast: "center" }}>{user.lunch}</td>
              </tr>
              <tr>
                <td style={{ textAlignLast: "center" }}>Snack 1</td>
                <td style={{ textAlignLast: "center" }}>{user.snack1}</td>
              </tr>
              <tr>
                <td style={{ textAlignLast: "center" }}>Snack 2</td>
                <td style={{ textAlignLast: "center" }}>{user.snack2}</td>
              </tr> 
              
              </table>
             </div>
         
          </div>
          </div>
          <br/>
          </div>
          
          
        })}
        </div>
        /* <div className="card1" style={{backgroundColor:"#EAFF3C"}}>
          <div className="container">
          <div className = "card-body1">
          <h1 style={{ textAlignLast: "center" }}>Tuesday</h1>
          <br/>
            <table>
              <tr>
                <td style={{ textAlignLast: "center" }}>Breakfast</td>
                <td style={{ textAlignLast: "center" }}>Dal Dosa</td>
              </tr>
              <tr style={{backgroundColor:"#EAFF3C"}}>
                <td style={{ textAlignLast: "center" }}>Lunch</td>
                <td style={{ textAlignLast: "center" }}>Masala Dosa</td>
              </tr>
              <tr>
                <td style={{ textAlignLast: "center" }}>Snack 1</td>
                <td style={{ textAlignLast: "center" }}>Paneer Roll</td>
              </tr>
              <tr style={{backgroundColor:"#EAFF3C"}}>
                <td style={{ textAlignLast: "center" }}>Snack 2</td>
                <td style={{ textAlignLast: "center" }}>Diamond Biscuit</td>
              </tr>
              </table>
          </div>
          </div>
          </div>
          <br />
        <div className="card1" style={{backgroundColor:"#00FFE1"}}>
          <div className="container">
          <div className = "card-body1">
          <h1 style={{ textAlignLast: "center" }}>Wednesday</h1>
          <br/>
            <table>
              <tr>
                <td style={{ textAlignLast: "center" }}>Breakfast</td>
                <td style={{ textAlignLast: "center" }}>Oats Idli</td>
              </tr>
              <tr style={{backgroundColor:"#00FFE1"}}>
                <td style={{ textAlignLast: "center" }}>Lunch</td>
                <td style={{ textAlignLast: "center" }}>Curd Caramel Custard</td>
              </tr>
              <tr>
                <td style={{ textAlignLast: "center" }}>Snack 1</td>
                <td style={{ textAlignLast: "center" }}>Tomato pasta</td>
              </tr>
              <tr style={{backgroundColor:"#00FFE1"}}>
                <td style={{ textAlignLast: "center" }}>Snack 2</td>
                <td style={{ textAlignLast: "center" }}>Cake</td>
              </tr>
              </table>
          </div>
          </div>
          </div>
          <br />
        <div className="card1" style={{backgroundColor:"#FF8054"}}>
          <div className="container">
          <div className = "card-body1">
          <h1 style={{ textAlignLast: "center" }}>Thursday</h1>
          <br/>
            <table>
              <tr>
                <td style={{ textAlignLast: "center" }}>Breakfast</td>
                <td style={{ textAlignLast: "center" }}>Mini Idli</td>
              </tr>
              <tr style={{backgroundColor:"#FF8054"}}>
                <td style={{ textAlignLast: "center" }}>Lunch</td>
                <td style={{ textAlignLast: "center" }}>Paneer Butter Masala</td>
              </tr>
              <tr>
                <td style={{ textAlignLast: "center" }}>Snack 1</td>
                <td style={{ textAlignLast: "center" }}>Aalu Tikki</td>
              </tr>
              <tr style={{backgroundColor:"#FF8054"}}>
                <td style={{ textAlignLast: "center" }}>Snack 2</td>
                <td style={{ textAlignLast: "center" }}>Cookies</td>
              </tr>
              </table>
          </div>
          </div>
          </div>
          <br />
        <div className="card1" style={{backgroundColor:"#ffff57"}}>
          <div className="container">
          <div className = "card-body1">
          <h1 style={{ textAlignLast: "center" }}>Friday</h1>
          <br/>
            <table> 
              <tr>
                <td style={{ textAlignLast: "center" }}>Breakfast</td>
                <td style={{ textAlignLast: "center" }}>Chutney</td>
              </tr>
              <tr style={{backgroundColor:"#ffff57"}}>
                <td style={{ textAlignLast: "center" }}>Lunch</td>
                <td style={{ textAlignLast: "center" }}>Dal Makhani</td>
              </tr>
              <tr>
                <td style={{ textAlignLast: "center" }}>Snack 1</td>
                <td style={{ textAlignLast: "center" }}>Aalu Tikki</td>
              </tr>
              <tr style={{backgroundColor:"#ffff57"}}>
                <td style={{ textAlignLast: "center" }}>Snack 2</td>
                <td style={{ textAlignLast: "center" }}>Cookies</td>
              </tr> */
              /* </table> */
          /* </div> */
          /* </div> */
          /* </div> */
        
    );
  }
}

export default Foodmenu;
