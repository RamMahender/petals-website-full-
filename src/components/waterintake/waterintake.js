import React, { Component } from 'react';
import $ from 'jquery';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import './waterintake.css';
import InputRange from 'react-input-range';
// import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUsers, faLock, faTasks, faUser, faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Moment from 'moment';
library.add(faUsers, faLock, faTasks, faUser, faGlassWhiskey);





class Waterintake extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit1 = this.handleSubmit1.bind(this);

    this.state= {value:""};

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      users: []
    };
  //   $(function()
  //   {
  //   $('.slider').on('input change', function(){
  //             $(this).next($('.slider_label')).html(this.value);
  //           });
  //         $('.slider_label').each(function(){
  //             var value = $(this).prev().attr('value');
  //             $(this).html(value);
  //           });  
      
      
  //   }) 
  }
  componentDidMount() {
    axios
      .get(`http://13.233.64.181:5000/api/getchild/aster`)
      .then(res => this.setState({ users: res.data.data }))
      .catch(err => console.log(err))
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSubmit1(event) {
    event.preventDefault();
//  var data =   [{
//   time: "9:30AM",
//   waterintake: event.target.quantity.value,
//   childId: "5d149f11ccfdd934d9b08d2b",
//   date:"1565329767",
//   semester:"1",
//   className:"aster"
// }];
    var data = [];
 this.state.users.forEach(element => {
        data.push({ childId: element._id, waterIntake: event.target.waterintake.value, foodtype: "breakfast", date:Moment(Date("YYYY-MM-DD"))/1000, semester:"1",className:"aster" })
      })

var data1 = JSON.stringify({data});
console.log(data);
console.log(data1);


    fetch('http://13.233.64.181:5000/api/createwaterintake', {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: data1

    })
    .then(res=> res.json())
      .then((result)=>
      {
          alert(JSON.stringify(result.message));
          console.log("abxcd" + JSON.stringify(result.message));
          // this.setState({snackbaropen:true, snackbarmsg:result});
      },
      (error)=>{
        alert('Request issue')
        // this.setState({snackbaropen:true, snackbarmsg:'failed'});
      }
      )
  }
//   onInput() {
//     var input = document.getElementById("typeinp");
//     var currentVal = input.value;
//     this.setState({
//       value: currentVal
//     })
// }


  render() {
    return (
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
      <div className="card">
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
                    return <tbody><tr>
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
              </tr></tbody>
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
  {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/> */}
  {/* <p>{this.state.value} ml</p> */}
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
      </div>
    )
  }
}


export default Waterintake;

