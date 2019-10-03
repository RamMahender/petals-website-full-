import React ,{Component}from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem} from 'reactstrap';
import classnames from 'classnames';
import '../dashboard/dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
// import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { faUser, faLock, faTachometerAlt, faUserGraduate, faTasks, faNewspaper, faUtensils, faGlassWhiskey, faPizzaSlice, faUsers,faIdCard, faHandPointRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Grid from "../Grid/grid";
import Topbar from "../Navbar/navbar";
// import Attendance from "../attendance/attendance";
import Attendance1 from "../attendance1/attendance1";
import Foodintake1 from "../foodintake1/foodintake1";
import Footer from "../footer/footer";
import Studentslist from "../studentslist/studentslist";
import Waterintake from "../waterintake/waterintake";
import Foodmenu from "../foodmenu/foodmenu";
import Createweeklyjournal from "../createweeklyjournal/createweeklyjournal";
import Rateweeklyjournal from '../rateweeklyjournal/rateweeklyjournal';
import axios from 'axios';
import Moment from 'moment';
import { Tabs, Tab } from 'react-bootstrap';
// import Example from "../Navbar/navbar";
// import Foodintake1 from "../foodintake1/foodintake1";

library.add(faUser, faLock, faTachometerAlt, faUserGraduate, faTasks, faNewspaper, faUtensils, faGlassWhiskey, faUsers, faIdCard, faHandPointRight, faCalendar);
class DashBoard extends Component {
  
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      data:'',
      activeTab: '1',
      users:[],
      // className:"aster",
      value:'',
      quantity:'',
      namess: [],
      foodintek:[]
      // name: [],
      // isGoing: true,
      // numberOfGuests: 2
      // data11 : '',
      // foodtype: '',
      // site:''
    };
    // this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigation = this.navigation.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }
  // handleChange = event => {
  //   event.preventDefault();
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }
  // onSiteChanged = event => {
  //   event.preventDefault();
  //   this.setState({
  //     site: event.currentTarget.value
  //     });
  // }

  componentDidMount() {
    axios
      .get(`http://13.233.64.181:5000/api/getchild/`+this.props.location.state.className)
      .then(res => this.setState({ users: res.data.data }))
      .catch(err => console.log(err))
      console.log("jefgewjfywe"+ JSON.stringify(this.props))

      axios
      .get(`http://13.233.64.181:5000/api/getchild/`+ this.props.location.state.className)
      .then(res => this.setState({ namess: ["Ram","Arun","Om"] }))
      .catch(err => console.log(err))
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
        this.setState({
            activeTab: tab
        });
    }
}
// handleChange(event) {
//   this.setState({value: event.target.value});
// }

handleInputChange = (event) => {
  event.preventDefault();
  const target = event.target;
  const value =  target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

handleSubmit1(event) {
  event.preventDefault();
  console.log("first_names"+ this.state.namess)
  // var data = [];
  // var name = [];
  // var quantities = [];
  // console.log("value entered"+ event.target.quantity.value)
  // quantities.push(event.target.quantity.value);
  // console.log("quantities"+ quantities )
  // this.state.users.forEach(element => {
  //      name.push(element.first_name);
  // })
  // console.log("names"+ name[0]);
  // this.state.users.forEach( element  => {
  //   console.log("name in loop"+ JSON.stringify(element));
  //     data.push({ childId: element._id , quantity: event.target.quantity.value, foodtype: "breakfast", date: Date("DD-MM-YYYY").getTime("12:00:00") / 1000, semester: "1", className: "aster" })
  // })
  var data = this.state.foodintek;
  var data1 = JSON.stringify({data })
  console.log("data" + data1);
  console.log("food" + JSON.stringify(data));
  


  fetch('http://13.233.64.181:5000/api/createfoodintake', {

      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: data1

  })

      .then(res => res.json())
      .then((result) => {
          alert(JSON.stringify(result.message));
          console.log("abxcd" + JSON.stringify(result.message));
      },
          (error) => {
              alert('Request issue')
              // this.setState({snackbaropen:true, snackbarmsg:'failed'});
          }
      )
}

handleSubmit(event){
  event.preventDefault();
  // console.log("values submitted"+JSON.stringify(this.state.quantity.value))
}

navigation = event => {
    // event.preventDefault();
    var foodin = [];
    var d = new Date();
    // var date = d.getDate(); 
  console.log("quantity"+event.target.name);
    foodin.push({ childId: event.target.name , quantity: event.target.value, foodtype: event.target.id, date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, semester: "1", className: "aster" })
   var a=foodin[0]

  console.log("foodvalues"+ JSON.stringify(a));
  this.state.foodintek.push(a);
  console.log("foodintakes"+ JSON.stringify(this.state.foodintek));

//   console.log("foodvalues1234"+ JSON.stringify(intake));

  // console.log("values"+ event.target.quantity.value);
  // console.log(this.state.isGoing);
  // console.log(this.state.numberOfGuests);
}
  // navto(){
  //   var userid = "5d846cb58c305b2cc1d85034"
  // }

// addUserIdToProps() {
//   console.log("Came to Add userID" + JSON.stringify(this.props.params.push({usrid: "123"})))
//   this.props.history.push("/studentprofile");
// }

render(){
  console.log("aaaa"+JSON.stringify(this.props));
  // const classid = this.setState(this.props.history.location.state)
  localStorage.setItem('className', JSON.stringify(this.props.history.location));
  const data11 = localStorage.getItem('className');
  console.log("className" + data11);      
  // console.log("classid" + classid);
const routes = [
  {
    path: "/dashboard", state: { className: "aster" },
    exact: true,
    // sidebar: () => <div >home!</div>,
    main: () => <div className="mainhd adjust-home active">
      {/* <h5>DashBoard</h5> */}
      <Grid />
      {/* <Example/> */}
    </div>
  },
  {
    path: "/studentslist",
    main: () => <div className="mainhd">
      <br />
      <h2 style={{ fontFamily: "arial, sans-serif", color: "black", }}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2><br/>
      <ol className="breadcrumb">
        <li>Home</li>
        <li style={{ color: "#ffa901" }}>Students list</li>
      </ol>
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
              {this.state.users.map(user=>{
                return           <tr>
                <td><img  className = "profile" src = {user.Image} alt = "rsz_maleimage"/><span><button type = "submit" onClick= {() => this.props.history.push({pathname: '/studentprofile', state: { usrid: user._id, className: this.props.location.state.className  }})} className = "btn btn-link" style = {{fontSize: "1em", fontFamily:"inherit"}}>{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}&nbsp;{}</button></span></td>
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
    </div>
  },
  {
    path: "/attendance", state: { className: "aster" },
    main: () => <div className="mainhd">
    <Attendance1 />



    </div>
  },
  {
    path: "/createweeklyjournal",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
      <h2>Topic of the week</h2>
      <Createweeklyjournal />
    </div>
  },
  // {
  //   path: "/rateweeklyjournal",
  //   // sidebar: () => <div>shoelaces!</div>,
  //   main: () => <div className="mainhd">
  //              <h2>Rate Weekly Journal</h2>
  //              <Rateweeklyjournal/>
  //              </div>
  // },
  {
    path: "/foodmenu",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
 
      {/* <h2>Weekly Journal</h2> */}
      <Foodmenu />
    </div>
  },
  {
    path: "/foodintake",
    main: () => <div className="mainhd">
      <div>
                <br />
                <h2 style={{ fontFamily: "arial, sans-serif", color: "black" }}><b>Food Intake for Students</b></h2>
                <br /><br />
                <ol class="breadcrumb">
                    <li>Home</li>
                    <li style={{ color: "#ffa901" }}>Food Intake</li>
                </ol>
                <br />
                <br />
                <div className="card" style = {{backgroundColor:"white"}}>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1'})}
                                onClick={() => { this.toggle('1'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Breakfast
        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Morning Milk
        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Lunch
        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Snack1
        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '5' })}
                                onClick={() => { this.toggle('5'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Snack2
        </NavLink>
                        </NavItem><NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '6' })}
                                onClick={() => { this.toggle('6'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Evening Milk
        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                            <form onSubmit={this.handleSubmit1}>
                                <table style={{ marginTop: "50px" }}>
                                        <tr>
                                            <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                            <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Breakfast</th>
                                        </tr>
                                    {this.state.users.map(user => {
                                      //  console.log("userssss"+ JSON.stringify(this.state.users));
                                        console.log("user"+ JSON.stringify(user));
                                        return <tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}>
                                                <input type="radio" id= "breakfast" name= {user._id} value="quarter"  style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;quarter
<input type="radio" id= "breakfast" name= {user._id} value="half" style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;half
<input type="radio" id= "breakfast" name= {user._id}value="full" style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;full
              </td>
              {/* <button type="submit" className="btn btn-primary button-style" onClick = {this.navigation}>Submit</button> */}
              {/* </div> */}
                                        </tr>
                                    })}
                                </table>
                                <button type="submit" className="btn btn-primary button-style">Submit</button>

                            </form>
                            
                            {/* <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="radio"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
                    <input type="submit" value="Submit" onClick = {this.navigation} />
        </label>
      </form> */}
                        </TabPane>
                        <TabPane tabId="2">
                        <form onSubmit={this.handleSubmit1}>
                                <table style={{ marginTop: "50px" }}>
                                    <thead>
                                        <tr>
                                            <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                            <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" value = "milk" name = "foodtype"/>&nbsp; &nbsp;Morning Milk</th>
                                        </tr>
                                    </thead>
                                    {this.state.users.map(user => {
                                        return <tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}>
<input type="radio" id="quantity" name="quantity" value="half" style={{ marginLeft: "50px" }} /> &nbsp;half
<input type="radio" id="quantity" name="quantity" value="full" style={{ marginLeft: "50px" }} /> &nbsp;full
              </td>
                                        </tr>
                                    })}
                                </table>
                                <button type="submit" className="btn btn-primary button-style">Submit</button>
                            </form>
                        </TabPane>
                        <TabPane tabId="3">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Lunch</th>
                                </tr>
                                {this.state.users.map(user => {
                                        return <tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}> <input type="radio" id={user.first_name} name={user.first_name} value="quarter" style={{ marginLeft: "50px" }} />&nbsp;quarter
<input type="radio" id="quanity" name="quantity" value="half" style={{ marginLeft: "50px" }} /> &nbsp;half
<input type="radio" id="quantity" name="quantity" value="full" style={{ marginLeft: "50px" }} /> &nbsp;full
              </td>
                                        </tr>
                                    })}
                            </table>
                        </TabPane>
                        <TabPane tabId="4">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Snack1</th>
                                </tr>
                                {this.state.users.map(user => {
                                        return <tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}> <input type="radio" id={user.first_name} name={user.first_name} value="quarter" style={{ marginLeft: "50px" }} />&nbsp;quarter
<input type="radio" id="quanity" name="quantity" value="half" style={{ marginLeft: "50px" }} /> &nbsp;half
<input type="radio" id="quantity" name="quantity" value="full" style={{ marginLeft: "50px" }} /> &nbsp;full
              </td>
                                        </tr>
                                    })}
                              
                                 </table>
                        </TabPane>
                        <TabPane tabId="5">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Snack2</th>
                                </tr>
                                {this.state.users.map(user => {
                                        return <tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}> <input type="radio" id={user.first_name} name={user.first_name} value="quarter" style={{ marginLeft: "50px" }} />&nbsp;quarter
<input type="radio" id="quanity" name="quantity" value="half" style={{ marginLeft: "50px" }} /> &nbsp;half
<input type="radio" id="quantity" name="quantity" value="full" style={{ marginLeft: "50px" }} /> &nbsp;full
              </td>
                                        </tr>
                                    })}
                            </table>
                        </TabPane>
                        <TabPane tabId="6">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Evening Milk</th>
                                </tr>
                                
                                {this.state.users.map(user => {
                                        return <tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}>
<input type="radio" id="quanity" name="quantity" value="half" style={{ marginLeft: "50px" }} /> &nbsp;half
<input type="radio" id="quantity" name="quantity" value="full" style={{ marginLeft: "50px" }} /> &nbsp;full
              </td>
                                        </tr>
                                    })}
                                   
                            </table>
                        </TabPane>
                    </TabContent>
                </div>
            </div>    </div>
  },
  {
    path: "/waterintake",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
      {/* <h2>Water Intake</h2> */}
      <div>
      <br/>
      <h2 style = {{fontFamily:"arial, sans-serif", color: "black"}}><b>Water Intake for Students</b></h2>
      <br/><br/>
      <ol class="breadcrumb">
  <li>Home</li>
  <li style = {{color:"#ffa901"}}>Water Intake</li>
</ol>
<br/>
<br/>
      <div className="card" style = {{backgroundColor:"white"}}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
            >
            09:30AM
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
            >
              11:00AM
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
            >
              12:00PM
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
            >
              01:00PM
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
            >
              02:30PM
          </NavLink>
          </NavItem><NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
            >
              03:30PM
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
            >
              04:30PM
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => { this.toggle('8'); }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
            >
              05:30PM
          </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <form onSubmit={this.handleSubmit1}>
            <table style={{ marginTop: "50px" }}>
              <thead>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
              </tr>
              </thead>
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
              {/* <tr> */}
                {/* <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td> */}
                <td style={{ textAlign: "center" }}>
                <input type="radio" id={user._id} name="waterintake"  value="50ml" style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;50ml
  <input type="radio" id={user._id} name="waterintake" value="100ml" style={{ marginLeft: "50px" }} onClick ={this.navigation} /> &nbsp;100ml
  <input type="radio" id={user._id} name="quantity" value="150ml" style={{ marginLeft: "50px" }} onClick = {this.navigation} /> &nbsp;150ml
  <input type="radio" id={user._id}  name="quantity" value="200ml" style={{ marginLeft: "50px" }} onClick = {this.navigation} /> &nbsp;200ml
  <input type="radio" id={user._id}  name="quantity" value="250ml" style={{ marginLeft: "50px" }} onClick = {this.navigation} /> &nbsp;250ml
                </td>
              </tr>
              })}
            
            </table>

            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>
          </TabPane>
          <TabPane tabId="2">
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                <td style={{ textAlign: "center" }}>
                <div className="slidecontainer">
 
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
                </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
 
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
            </table>
          </TabPane>
          <TabPane tabId="3">
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                <td style={{ textAlign: "center" }}>
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
                </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
            </table>
          </TabPane>
          <TabPane tabId="4">
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                <td style={{ textAlign: "center" }}>
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
                </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
            </table>
          </TabPane>
          <TabPane tabId="5">
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                <td style={{ textAlign: "center" }}>
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
                </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
            </table>
          </TabPane>
          <TabPane tabId="6">
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                <td style={{ textAlign: "center" }}>
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
                </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
            </table>
          </TabPane>
          <TabPane tabId="7">
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                <td style={{ textAlign: "center" }}>
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
                </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
            </table>
          </TabPane>
          <TabPane tabId="8">
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                <td style={{ textAlign: "center" }}>
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
                </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
  <p>{this.state.value} ml</p> */}
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
            </table>
          </TabPane>
          <br/>
          {/* <button type="button" className="btn btn-primary button-style" data-toggle="modal" data-target="#exampleModalCenter">Submit</button> */}
        </TabContent>
      </div>
      </div>    </div>
  },
  // {
  //   path: "/about",
  //   // sidebar: () => <div>shoelaces!</div>,
  //   main: () => <div className="mainhd">
  //     {/* <h2>Water Intake</h2> */}
  //     <Waterintake />
  //   </div>
  // },
  {
    path: "/login",
    // sidebar: () => <div><Log/></div>,
    main: () => <div className="mainhd">
    </div>
  },
  {
    path:"/tabexample",
    main:() => <div className = "mainhd">
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Home">    
      Tab 1 content
      </Tab>
      <Tab eventKey="profile" title="Profile">
<h1>adhwygwe</h1>
      </Tab>
      <Tab eventKey="contact" title="Contact" >
      <h1>dhfygu</h1>
      </Tab>
    </Tabs>

    </div>
  }
];
  return (
    
    <div>      <div>
        <Topbar />
        <div>
          <Router>
            <div style={{ display: "flex" }}>
              <div className="sidenav"
              // style={{
              //   // paddingLeft: "100px",
              //   float:"right",
              //   // textAlign:"center",
              //   width: "20%",
              //   height: "600px",
              //   background: "#f0f0f0"
              // }}
              >
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>
                    <Link to="/dashboard" className="sidenav-main"><img src="./petals-logo.png" alt="Petals logo" className="img-style" /></Link>
                    {/* <h1 style = {{marginLeft: "25%", marginTop:"1%"}}>PETALS</h1> */}
                  </li>
                  <li className="sidebar-align active">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to={{pathname: '/dashboard'}}><FontAwesomeIcon icon={faTachometerAlt} size="lg" className="faicon-style" />Dashboard</NavLink>
                  </li>
                  <li className="sidebar-align">
                  <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/studentslist', state: { className: this.props.location.state.className }}}><FontAwesomeIcon icon={faUserGraduate} size="lg" className="faicon-style" />Students list</NavLink>
                    {/* <button className = "button-style1" style={{ color: "white", fontFamily:"Montserrat-Regular" }} type = "submit" onClick= {() => this.props.history.push({pathname: '/studentslist', state: { className:"aster" }})} ><FontAwesomeIcon icon={faUserGraduate} size="lg" className="faicon-style" />&nbsp;&nbsp;Students List</button> */}
                  </li>
                  <li className="sidebar-align">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/attendance', state: { className: this.props.location.state.className }}}><FontAwesomeIcon icon={faTasks} size="lg" className="faicon-style" />Attendance</NavLink>
                  </li>
                  <li className="sidebar-align">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/createweeklyjournal', state: { className: "aster" }}} ><FontAwesomeIcon icon={faNewspaper} size="lg" className="faicon-style" />Topic of the Week</NavLink>
                  </li>
                  {/* <li className = "sidebar-align">
              <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}}  to="/rateweeklyjournal" ><FontAwesomeIcon icon={faNewspaper} size = "lg" className = "faicon-style"/>Rate Weekly Journal</NavLink>
<<<<<<< HEAD
            </li> */}
                  <li className="sidebar-align">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/foodmenu', state: { className: "aster" }}} ><FontAwesomeIcon icon={faPizzaSlice} size="lg" className="faicon-style" />Food Menu</NavLink>
                  </li>
                  <li className="sidebar-align">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/foodintake', state: { className: "aster" }}} ><FontAwesomeIcon icon={faUtensils} size="lg" className="faicon-style" />Food Intake</NavLink>
                  </li>
                  <li className="sidebar-align">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/waterintake', state: { className: "aster" }}} ><FontAwesomeIcon icon={faGlassWhiskey} size="lg" className="faicon-style" />Water Intake</NavLink>
                  </li>
                  <li className="sidebar-align">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/tabexample', state: { className: this.props.location.state.className }}} ><FontAwesomeIcon icon={faGlassWhiskey} size="lg" className="faicon-style" />Tabs</NavLink>
                  </li>
                  {/* <li>
                  <NavLink tag={Foodintake1} to="/somewhere">Any where</NavLink>
                  </li>
                  <li>
                  <NavLink componentClass={Waterintake} href="/about" >About</NavLink>
                  </li> */}

                </ul>
           

                {routes.map((route, index) => (
                  // You can render a <Route> in as many places
                  // as you want in your app. It will render along
                  // with any other <Route>s that also match the URL.
                  // So, a sidebar or breadcrumbs or anything else
                  // that requires you to render multiple things
                  // in multiple places at the same URL is nothing
                  // more than multiple <Route>s.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.sidebar}
                  />
                ))}
              </div>

              <div style={{ flex: 1, padding: "10px" }}>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}

              </div>
            </div>

          </Router>
        </div>
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  )
}
}

export default DashBoard;