import React ,{Component}from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem} from 'reactstrap';
import { Tabs, Tab } from 'react-bootstrap';
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
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import Example from "../Navbar/navbar";
// import Foodintake1 from "../foodintake1/foodintake1";

library.add(faUser, faLock, faTachometerAlt, faUserGraduate, faTasks, faNewspaper, faUtensils, faGlassWhiskey, faUsers, faIdCard, faHandPointRight, faCalendar);
class Attendance extends Component {
  
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      data:'',
      activeTab: '1',
      users:[],
      className:"aster",
      value:'',
      quantity:'',
      namess: [],
      foodintek:[],
      foodintek1:[],
      foodintek2:[],
      foodintek3:[],
      foodintek4:[],
      foodintek5:[],
      waterintek:[],
      waterintek1:[],
      waterintek2:[],
      waterintek3:[],
      waterintek4:[],
      waterintek5:[],
      waterintek6:[],
      waterintek7:[],
      dailystatus:[]

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
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
    this.handleSubmit4 = this.handleSubmit4.bind(this);
    this.handleSubmit5 = this.handleSubmit5.bind(this);
    this.handleSubmit6 = this.handleSubmit6.bind(this);
    this.handleSubmit12 = this.handleSubmit12.bind(this);
    this.handleSubmit13 = this.handleSubmit13.bind(this);
    this.handleSubmit14 = this.handleSubmit14.bind(this);
    this.handleSubmit15 = this.handleSubmit15.bind(this);
    this.handleSubmit16 = this.handleSubmit16.bind(this);
    this.handleSubmit17 = this.handleSubmit17.bind(this);
    this.handleSubmit18 = this.handleSubmit18.bind(this);
    this.handleSubmit19 = this.handleSubmit19.bind(this);
    this.handleSubmit111 = this.handleSubmit111.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigation = this.navigation.bind(this);
    // localStorage.setItem('nameofclass', this.props.location.state.className);
    // var class1 = localStorage.getItem('nameofclass');
    // console.log("nanana"+class1);
// getter
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
    var class1 = localStorage.getItem('className');
    console.log("class-name"+ class1)
    
    axios
      .get(`http://13.233.64.181:5000/api/getchild/aster`)
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
handleSubmit2(event) {
  event.preventDefault();
  console.log("first_names"+ this.state.namess)
  
  var data = this.state.foodintek1;
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
handleSubmit3(event) {
  event.preventDefault();
  console.log("first_names"+ this.state.namess)
  
  var data = this.state.foodintek2;
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
handleSubmit4(event) {
  event.preventDefault();
  console.log("first_names"+ this.state.namess)
  
  var data = this.state.foodintek3;
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
handleSubmit5(event) {
  event.preventDefault();
  console.log("first_names"+ this.state.namess)
  
  var data = this.state.foodintek4;
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
handleSubmit6(event) {
  event.preventDefault();
  console.log("first_names"+ this.state.namess)
  
  var data = this.state.foodintek5;
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
handleSubmit12(event){
    event.preventDefault();
    var data = this.state.waterintek;
    var data1 =  JSON.stringify({data});
    console.log("finalwater"+ data1);

    fetch('http://13.233.64.181:5000/api/createwaterintake', {
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
handleSubmit13(event){
  event.preventDefault();
  var data = this.state.waterintek1;
  var data1 =  JSON.stringify({data});
  console.log("finalwater"+ data1);

  fetch('http://13.233.64.181:5000/api/createwaterintake', {
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
handleSubmit14(event){
  event.preventDefault();
  var data = this.state.waterintek2;
  var data1 =  JSON.stringify({data});
  console.log("finalwater"+ data1);

  fetch('http://13.233.64.181:5000/api/createwaterintake', {
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
handleSubmit15(event){
  event.preventDefault();
  var data = this.state.waterintek3;
  var data1 =  JSON.stringify({data});
  console.log("finalwater"+ data1);

  fetch('http://13.233.64.181:5000/api/createwaterintake', {
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
handleSubmit16(event){
  event.preventDefault();
  var data = this.state.waterintek4;
  var data1 =  JSON.stringify({data});
  console.log("finalwater"+ data1);

  fetch('http://13.233.64.181:5000/api/createwaterintake', {
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
handleSubmit17(event){
  event.preventDefault();
  var data = this.state.waterintek5;
  var data1 =  JSON.stringify({data});
  console.log("finalwater"+ data1);

  fetch('http://13.233.64.181:5000/api/createwaterintake', {
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
handleSubmit18(event){
  event.preventDefault();
  var data = this.state.waterintek6;
  var data1 =  JSON.stringify({data});
  console.log("finalwater"+ data1);

  fetch('http://13.233.64.181:5000/api/createwaterintake', {
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
handleSubmit19(event){
  event.preventDefault();
  var data = this.state.waterintek7;
  var data1 =  JSON.stringify({data});
  console.log("finalwater"+ data1);

  fetch('http://13.233.64.181:5000/api/createwaterintake', {
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
    foodin.push({ childId: event.target.name , quantity: event.target.value, foodtype: event.target.id, date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, semester: "1", className: this.props.location.state.className })
   var a=foodin[0]

  console.log("foodvalues"+ JSON.stringify(a));
  this.state.foodintek.push(a);
  console.log("foodintakes"+ JSON.stringify(this.state.foodintek));
}
navigation1 = event => {
  // event.preventDefault();
  var foodin1 = [];
  var d = new Date();
  // var date = d.getDate(); 
console.log("quantity"+event.target.name);
  foodin1.push({ childId: event.target.name , quantity: event.target.value, foodtype: event.target.id, date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, semester: "1", className: this.props.location.state.className })
 var a=foodin1[0]

console.log("foodvalues"+ JSON.stringify(a));
this.state.foodintek1.push(a);
console.log("foodintakes"+ JSON.stringify(this.state.foodintek1));
}
navigation2 = event => {
  // event.preventDefault();
  var foodin2 = [];
  var d = new Date();
  // var date = d.getDate(); 
console.log("quantity"+event.target.name);
  foodin2.push({ childId: event.target.name , quantity: event.target.value, foodtype: event.target.id, date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, semester: "1", className: this.props.location.state.className })
 var a=foodin2[0]

console.log("foodvalues"+ JSON.stringify(a));
this.state.foodintek2.push(a);
console.log("foodintakes"+ JSON.stringify(this.state.foodintek2));
}
navigation3 = event => {
  // event.preventDefault();
  var foodin3 = [];
  var d = new Date();
  // var date = d.getDate(); 
console.log("quantity"+event.target.name);
  foodin3.push({ childId: event.target.name , quantity: event.target.value, foodtype: event.target.id, date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, semester: "1", className: this.props.location.state.className })
 var a=foodin3[0]

console.log("foodvalues"+ JSON.stringify(a));
this.state.foodintek3.push(a);
console.log("foodintakes"+ JSON.stringify(this.state.foodintek3));
}

navigation4 = event => {
  // event.preventDefault();
  var foodin4 = [];
  var d = new Date();
  // var date = d.getDate(); 
console.log("quantity"+event.target.name);
  foodin4.push({ childId: event.target.name , quantity: event.target.value, foodtype: event.target.id, date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, semester: "1", className: this.props.location.state.className })
 var a=foodin4[0]

console.log("foodvalues"+ JSON.stringify(a));
this.state.foodintek4.push(a);
console.log("foodintakes"+ JSON.stringify(this.state.foodintek4));
}
navigation5 = event => {
  // event.preventDefault();
  var foodin5 = [];
  var d = new Date();
  // var date = d.getDate(); 
console.log("quantity"+event.target.name);
  foodin5.push({ childId: event.target.name , quantity: event.target.value, foodtype: event.target.id, date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, semester: "1", className: this.props.location.state.className })
 var a=foodin5[0]

console.log("foodvalues"+ JSON.stringify(a));
this.state.foodintek5.push(a);
console.log("foodintakes"+ JSON.stringify(this.state.foodintek5));
}
attendance = event =>{
     var attendance = [];
     var date1 = new Date();
     var month = ("0" + (date1.getMonth() + 1)).slice(-2)     //months from 1-12
var day = ("0" + date1.getDate()).slice(-2);
var year = date1.getUTCFullYear();
var newdate = year + "-" + month + "-" + day;
     console.log("childID"+ event.target.name);
     console.log("valuee"+event.target.value);
     attendance.push({date: newdate, "status": event.target.value})
    //  console.log("attend"+ JSON.stringify(attendance));
     var attendance1 = JSON.stringify({attendance});
     console.log("attend"+ attendance1);
     var attendwithchild = [];
     attendwithchild.push({ChildId: event.target.name, attendance})
     console.log("attendwithchild"+ JSON.stringify(attendwithchild));
     var a = attendwithchild[0];
     this.state.dailystatus.push(a);
     console.log("dailystatus"+JSON.stringify(this.state.dailystatus));


}
handleSubmit111(event){
    event.preventDefault();
    var data = this.state.dailystatus;
    var data1 = JSON.stringify({data});
    console.log("dailyattendance"+ data1);

    fetch('http://13.233.64.181:5000/api/createattendance', {
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

waterintake = event =>{
    var waterin = [];
    console.log("ChildId"+ event.target.name);
    console.log("time"+event.target.id);
    console.log("watertaken"+event.target.value);
    var d = new Date();
    waterin.push({date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, childId: event.target.name, waterIntake: event.target.value, time: event.target.id, semester:1, className: this.props.location.state.className });
    var water = waterin[0];
    console.log("waterintake"+ JSON.stringify(water));
    this.state.waterintek.push(water);
    console.log("arraywater"+ JSON.stringify(this.state.waterintek));
}
waterintake1 = event =>{
  var waterin1 = [];
  console.log("ChildId"+ event.target.name);
  console.log("time"+event.target.id);
  console.log("watertaken"+event.target.value);
  var d = new Date();
  waterin1.push({date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, childId: event.target.name, waterIntake: event.target.value, time: event.target.id, semester:1, className: this.props.location.state.className });
  var water1 = waterin1[0];
  console.log("waterintake"+ JSON.stringify(water1));
  this.state.waterintek1.push(water1);
  console.log("arraywater"+ JSON.stringify(this.state.waterintek1));
}
waterintake2 = event =>{
  var waterin2 = [];
  console.log("ChildId"+ event.target.name);
  console.log("time"+event.target.id);
  console.log("watertaken"+event.target.value);
  var d = new Date();
  waterin2.push({date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, childId: event.target.name, waterIntake: event.target.value, time: event.target.id, semester:1, className: this.props.location.state.className });
  var water2 = waterin2[0];
  console.log("waterintake"+ JSON.stringify(water2));
  this.state.waterintek2.push(water2);
  console.log("arraywater"+ JSON.stringify(this.state.waterintek2));
}
waterintake3 = event =>{
  var waterin3 = [];
  console.log("ChildId"+ event.target.name);
  console.log("time"+event.target.id);
  console.log("watertaken"+event.target.value);
  var d = new Date();
  waterin3.push({date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, childId: event.target.name, waterIntake: event.target.value, time: event.target.id, semester:1, className: this.props.location.state.className });
  var water3 = waterin3[0];
  console.log("waterintake"+ JSON.stringify(water3));
  this.state.waterintek3.push(water3);
  console.log("arraywater"+ JSON.stringify(this.state.waterintek3));
}
waterintake4 = event =>{
  var waterin4 = [];
  console.log("ChildId"+ event.target.name);
  console.log("time"+event.target.id);
  console.log("watertaken"+event.target.value);
  var d = new Date();
  waterin4.push({date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, childId: event.target.name, waterIntake: event.target.value, time: event.target.id, semester:1, className: this.props.location.state.className });
  var water4 = waterin4[0];
  console.log("waterintake"+ JSON.stringify(water4));
  this.state.waterintek4.push(water4);
  console.log("arraywater"+ JSON.stringify(this.state.waterintek4));
}
waterintake5 = event =>{
  var waterin5 = [];
  console.log("ChildId"+ event.target.name);
  console.log("time"+event.target.id);
  console.log("watertaken"+event.target.value);
  var d = new Date();
  waterin5.push({date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, childId: event.target.name, waterIntake: event.target.value, time: event.target.id, semester:1, className: this.props.location.state.className });
  var water5 = waterin5[0];
  console.log("waterintake"+ JSON.stringify(water5));
  this.state.waterintek5.push(water5);
  console.log("arraywater"+ JSON.stringify(this.state.waterintek2));
}
waterintake6 = event =>{
  var waterin6 = [];
  console.log("ChildId"+ event.target.name);
  console.log("time"+event.target.id);
  console.log("watertaken"+event.target.value);
  var d = new Date();
  waterin6.push({date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, childId: event.target.name, waterIntake: event.target.value, time: event.target.id, semester:1, className: this.props.location.state.className });
  var water6 = waterin6[0];
  console.log("waterintake"+ JSON.stringify(water6));
  this.state.waterintek6.push(water6);
  console.log("arraywater"+ JSON.stringify(this.state.waterintek6));
}
waterintake7 = event =>{
  var waterin7 = [];
  console.log("ChildId"+ event.target.name);
  console.log("time"+event.target.id);
  console.log("watertaken"+event.target.value);
  var d = new Date();
  waterin7.push({date: Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000, childId: event.target.name, waterIntake: event.target.value, time: event.target.id, semester:1, className: this.props.location.state.className });
  var water7 = waterin7[0];
  console.log("waterintake"+ JSON.stringify(water7));
  this.state.waterintek7.push(water7);
  console.log("arraywater"+ JSON.stringify(this.state.waterintek7));
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
      <div>
                <div className="row gutters-20">
                    <div className="col-sm-3 col-sm-6 col-12">
                    <button type="submit" onClick={() => this.props.history.push({ pathname: '/attendance', state: { className: this.props.location.state.className } })} >
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-green ">
                                        {/* <i classNameName="flaticon-classNameNamemates text-green"></i> */}
                                        <FontAwesomeIcon icon={faTasks} size="lg" className="text-green" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Attendance</div>
                                        {/* <div classNameName="item-number"><span className="counter" data-num="150000">150000</span></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </button>
                    </div>
                    <div className="col-sm-3 col-sm-6 col-12">
                    <button type="submit" onClick={() => this.props.history.push({ pathname: '/topicofweek' })} >
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-blue">
                                        {/* <i className="flaticon-multiple-users-silhouette text-blue"></i> */}
                                        <FontAwesomeIcon icon={faNewspaper} size="lg" className="text-blue"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Topic of the Week</div>
                                        {/* <div className="item-number"><span className="counter" data-num="2250">2250</span></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </button>
                    </div>
                    <div className="col-sm-3 col-sm-6 col-12">
                    <button type="submit" onClick={() => this.props.history.push({ pathname: '/foodintake', state: { className: this.props.location.state.className } })} >
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-yellow">
                                        {/* <i className="flaticon-couple text-orange"></i> */}
                                        <FontAwesomeIcon icon={faUtensils} size="lg" className="text-orange"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Food Intake</div>
                                        {/* <div className="item-number"><span className="counter" data-num="5690">5690</span></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </button>
                    </div>
                    <div className="col-sml-3 col-sm-6 col-12">
                    <button type="submit" onClick={() => this.props.history.push({ pathname: '/waterintake', state: { className: this.props.location.state.className }})} >
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-red">
                                        {/* <i classNameName="flaticon-money text-red"></i> */}
                                        <FontAwesomeIcon icon={faGlassWhiskey} size="lg" className="text-red" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Water Intake</div>
                                        {/* <div classNameName="item-number"><span>$</span><span classNameName="counter" data-num="193000">193000</span></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </button>
                    </div>              
                </div>
            </div>
      <Grid />
      {/* <Example/> */}
    </div>
  },
  {
    path: "/studentslist",
    main: () => <div className="mainhd">
      <br />
      <h2 style={{ fontFamily: "arial, sans-serif", color: "black"}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2>
      {/* <ol className="breadcrumb">
        <li>Home</li>
        <li style={{ color: "#ffa901" }}>Students list</li>
      </ol> */}
        <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>Studentslist</BreadcrumbItem>
      </Breadcrumb>
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
  <div>
        <br />
        <h2 style={{ fontFamily: "arial, sans-serif", color: "black" }}><b>Student Attendance</b></h2>
        <br />
        {/* <ol className="breadcrumb">
          <li>Home</li>
          <li style={{ color: "#ffa901" }}>Attendance</li>
        </ol> */}
         <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>Attendance</BreadcrumbItem>
      </Breadcrumb>
        <br />
        <div className="card1">
          <div className="container">
            <h2 style={{ fontFamily: "arial, sans-serif", color: "black" }}>Mark Attendance for Class Aster</h2>
            <br />
            <div className="card-body1">
              <form onSubmit={this.handleSubmit111}>
                <table>
                  <tr>
                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                    <th><FontAwesomeIcon icon={faTasks} size="lg" />&nbsp; &nbsp;Attendance</th>
                  </tr>
                  {this.state.users.map(user => {
                    console.log(user)
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" />{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                      <td style={{ textAlignLast: "center" }}>  <input style={{ marginLeft: "50px" }} type="radio" id= "attendance"name = {user._id} onClick = {this.attendance} value = "Present" />&nbsp;Present&nbsp;&nbsp;
                <input style={{ marginLeft: "50px" }} type="radio" id= "attendance" name = {user._id} onClick = {this.attendance} value = "Absent" />&nbsp;Absent
                <input style={{ marginLeft: "50px" }} type="radio" id= "attendance" name = {user._id} onClick = {this.attendance} value = "Late" />&nbsp;Late</td>
                    </tr>
                  })}
                </table>
                <button type="submit" className="btn btn-primary button-style">Submit</button>
              </form>
            </div>
            <br />
          </div>
        </div>
      </div>


    </div>
  },
  {
    path: "/createweeklyjournal",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">

<br />
        <h2 style={{ fontFamily: "arial, sans-serif", color: "black" }}><b>Create Weekly journal</b></h2>
        <br />
        {/* <ol className="breadcrumb">
          <li>Home</li>
          <li style={{ color: "#ffa901" }}>Attendance</li>
        </ol> */}
         <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>Topic of the Week</BreadcrumbItem>
      </Breadcrumb>
        <br />
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
      <br />
                <h2 style={{ fontFamily: "arial, sans-serif", color: "black" }}><b>Food Intake for Students</b></h2>
                <br />
                {/* <ol class="breadcrumb">
                    <li>Home</li>
                    <li style={{ color: "#ffa901" }}>Food Intake</li>
                </ol> */}
                 <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>Food Intake</BreadcrumbItem>
      </Breadcrumb>
                <br />
                <br />
     <div className="card" style = {{backgroundColor:"white"}}>
      <Tabs defaultActiveKey="breakfast" id="uncontrolled-tab-example">
      <Tab eventKey="breakfast" title="Breakfast">  
      <form onSubmit={this.handleSubmit1}>
                                <table style={{ marginTop: "50px" }}>
                                        <tr>
                                            <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                            <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Breakfast</th>
                                        </tr>
                                    {this.state.users.map(user => {
                                        console.log("user"+ JSON.stringify(user));
                                        return <tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}>
                                                <input type="radio" id= "Breakfast" name= {user._id} value="Quarter"  style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;Quarter
<input type="radio" id= "Breakfast" name= {user._id} value="Half" style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;Half
<input type="radio" id= "Breakfast" name= {user._id} value="Full" style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;Full
              </td>           
                                        </tr>
                                    })}
                                </table>
                                <button type="submit" className="btn btn-primary button-style">Submit</button>

                            </form>
      </Tab>
      <Tab eventKey="morning milk" title="Morning Milk">  
      <form onSubmit={this.handleSubmit2}>
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
<input type="radio" id="Morning Milk" name={user._id} value="Yes" style={{ marginLeft: "50px" }} onClick = {this.navigation1}/> &nbsp;Yes
<input type="radio" id="Morning Milk" name={user._id} value="No" style={{ marginLeft: "50px" }} onClick = {this.navigation1}/> &nbsp;No
              </td>
                                        </tr>
                                    })}
                                </table>
                                <button type="submit" className="btn btn-primary button-style">Submit</button>
                            </form>
      </Tab>
      <Tab eventKey = "lunch" title = "Lunch">
      <form onSubmit={this.handleSubmit3}>
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
<input type="radio" id="Lunch" name={user._id} value="Quarter" style={{ marginLeft: "50px" }} onClick = {this.navigation2}  /> &nbsp;Quarter
<input type="radio" id="Lunch" name={user._id} value="Half" style={{ marginLeft: "50px" }} onClick = {this.navigation2} /> &nbsp;Half
<input type="radio" id="Lunch" name={user._id} value="Full" style={{ marginLeft: "50px" }} onClick = {this.navigation2}/> &nbsp;Full
              </td>
                                        </tr>
                                    })}
                                </table>
                                <button type="submit" className="btn btn-primary button-style">Submit</button>
                            </form>
      </Tab>
      <Tab eventKey="snack1" title="Snack 1">  
      <form onSubmit={this.handleSubmit4}>
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
<input type="radio" id="snack1" name={user._id} value="half" style={{ marginLeft: "50px" }} onClick = {this.navigation3} /> &nbsp;Half
<input type="radio" id="snack1" name={user._id} value="full" style={{ marginLeft: "50px" }} onClick = {this.navigation3} /> &nbsp;Full
              </td>
                                        </tr>
                                    })}
                                </table>
                                <button type="submit" className="btn btn-primary button-style">Submit</button>
                            </form>
      </Tab>
      <Tab eventKey="snack2" title="Snack 2">  
      <form onSubmit={this.handleSubmit5}>
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
<input type="radio" id="snack2" name={user._id} value="Half" style={{ marginLeft: "50px" }} onClick = {this.navigation4} /> &nbsp;Half
<input type="radio" id="snack2" name={user._id} value="Full" style={{ marginLeft: "50px" }} onClick = {this.navigation4} /> &nbsp;Full
              </td>
                                        </tr>
                                    })}
                                </table>
                                <button type="submit" className="btn btn-primary button-style">Submit</button>
                            </form>
      </Tab>
      <Tab eventKey="evening milk" title="Evening Milk">  
      <form onSubmit={this.handleSubmit6}>
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
<input type="radio" id="milk" name={user._id} value="Yes" style={{ marginLeft: "50px" }} onClick = {this.navigation5} /> &nbsp;Yes
<input type="radio" id="milk" name={user._id} value="No" style={{ marginLeft: "50px" }} onClick = {this.navigation5} /> &nbsp;No
              </td>
                                        </tr>
                                    })}
                                </table>
                                <button type="submit" className="btn btn-primary button-style">Submit</button>
                            </form>
      </Tab>
      </Tabs>

      </div>
      {/* <div>
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
                                onClick={() => { this.toggle('1') }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
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
                                        console.log("user"+ JSON.stringify(user));
                                        return <tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}>
                                                <input type="radio" id= "breakfast" name= {user._id} value="quarter"  style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;quarter
<input type="radio" id= "breakfast" name= {user._id} value="half" style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;half
<input type="radio" id= "breakfast" name= {user._id}value="full" style={{ marginLeft: "50px" }} onClick = {this.navigation} />&nbsp;full
              </td>
             
                                        </tr>
                                    })}
                                </table>
                                <button type="submit" className="btn btn-primary button-style">Submit</button>

                            </form>
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
            </div>    </div> */}
            </div>
  },
  {
    path: "/waterintake",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
      {/* <h2>Water Intake</h2> */}
      <div>
      <br/>
      <h2 style = {{fontFamily:"arial, sans-serif", color: "black"}}><b>Water Intake for Students</b></h2>
      <br/>
      {/* <ol className="breadcrumb">
  <li>Home</li>
  <li style = {{color:"#ffa901"}}>Water Intake</li>
</ol> */}
 <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>Water Intake</BreadcrumbItem>
      </Breadcrumb>
<br/>
<br/>
      <div className="card" style = {{backgroundColor:"white"}}>
      <Tabs defaultActiveKey="9:30" id="uncontrolled-tab-example">
      <Tab eventKey="9:30" title="9:30 AM">   
      <form onSubmit={this.handleSubmit12}>
            <table style={{ marginTop: "50px" }}>
              <thead>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;9:30AM</th>
              </tr>
              </thead>
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="9:30 AM" name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake} />&nbsp;0ml
                <input type="radio" id="9:30 AM" name={user._id} time = "9:30" value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake} />&nbsp;50ml
  <input type="radio" id= "9:30 AM" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake} /> &nbsp;100ml
  <input type="radio" id="9:30 AM" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;150ml
  <input type="radio" id="9:30 AM" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;200ml
  <input type="radio" id="9:30 AM"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;250ml
                </td>
              </tr>
              })}
            
            </table>

            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>     
             </Tab>
      <Tab eventKey="10:30" title="10:30 AM">
      <form onSubmit={this.handleSubmit13}>
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;10:30AM</th>
              </tr>
              
           
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="10:30 AM" name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake1} />&nbsp;0ml
                <input type="radio" id="10:30 AM" name={user._id} time = "9:30" value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake1} />&nbsp;50ml
  <input type="radio" id= "10:30 AM"name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake1} /> &nbsp;100ml
  <input type="radio" id="10:30 AM" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake1} /> &nbsp;150ml
  <input type="radio" id="10:30 AM" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake1} /> &nbsp;200ml
  <input type="radio" id="10:30 AM"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake1} /> &nbsp;250ml
                </td>
              </tr>
              })}
            </table>
            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>
      </Tab>
      <Tab eventKey="12:00" title="12:00 PM" >
      <form onSubmit={this.handleSubmit14}>
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;12:00PM</th>
              </tr>
              
           
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="12:00 PM"name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake2} />&nbsp;0ml
                <input type="radio" id="12:00 PM" name={user._id}  value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake2} />&nbsp;50ml
  <input type="radio" id= "12:00 PM" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake2} /> &nbsp;100ml
  <input type="radio" id="12:00 PM" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake2} /> &nbsp;150ml
  <input type="radio" id="12:00 PM" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake2} /> &nbsp;200ml
  <input type="radio" id="12:00 PM"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake2} /> &nbsp;250ml
                </td>
              </tr>
              })}
            </table>
            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>     
             </Tab>
      <Tab eventKey="12:30" title="12:30 PM" >
      <form onSubmit={this.handleSubmit15}>
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;12:30PM</th>
              </tr>
              
           
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="12:30 PM"name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake3} />&nbsp;0ml
                <input type="radio" id="12:30 PM"name={user._id} time = "9:30" value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake3} />&nbsp;50ml
  <input type="radio" id= "12:30 PM" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake3} /> &nbsp;100ml
  <input type="radio" id="12:30 PM" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake3} /> &nbsp;150ml
  <input type="radio" id="12:30 PM" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake3} /> &nbsp;200ml
  <input type="radio" id="12:30 PM"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake3} /> &nbsp;250ml
                </td>
              </tr>
              })}
            </table>
            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>    
      </Tab> 
      <Tab eventKey="2:30" title="2:30 PM" >
      <form onSubmit={this.handleSubmit16}>
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;2:30PM</th>
              </tr>
              
           
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="2:30 PM"name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake4} />&nbsp;0ml
                <input type="radio" id="2:30 PM"name={user._id} time = "9:30" value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake4} />&nbsp;50ml
  <input type="radio" id= "2:30 PM" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake4} /> &nbsp;100ml
  <input type="radio" id="2:30 PM" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.wa4terintake4} /> &nbsp;150ml
  <input type="radio" id="2:30 PM" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake4} /> &nbsp;200ml
  <input type="radio" id="2:30 PM"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake4} /> &nbsp;250ml
                </td>
              </tr>
              })}
            </table>
            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>    
      </Tab> 
      <Tab eventKey="3:30" title="3:30 PM" >
      <form onSubmit={this.handleSubmit17}>
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;3:30PM</th>
              </tr>
              
           
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="3:30 PM" name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake5} />&nbsp;0ml
                <input type="radio" id="3:30 PM"name={user._id} value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake5} />&nbsp;50ml
  <input type="radio" id= "3:30 PM" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake5} /> &nbsp;100ml
  <input type="radio" id= "3:30 PM" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake5} /> &nbsp;150ml
  <input type="radio" id="3:30 PM" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake5} /> &nbsp;200ml
  <input type="radio" id= "3:30 PM"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake5} /> &nbsp;250ml
                </td>
              </tr>
              })}
            </table>
            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>    
      </Tab>
      <Tab eventKey="4:30" title="4:30 PM" >
      <form onSubmit={this.handleSubmit18}>
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;4:30PM</th>
              </tr>
              
           
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="4:30 PM" name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake6} />&nbsp;0ml
                <input type="radio" id="4:30 PM"name={user._id} value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake6} />&nbsp;50ml
  <input type="radio" id= "4:30 PM" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake6} /> &nbsp;100ml
  <input type="radio" id= "4:30 PM" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake6} /> &nbsp;150ml
  <input type="radio" id="4:30 PM" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake6} /> &nbsp;200ml
  <input type="radio" id= "4:30 PM"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake6} /> &nbsp;250ml
                </td>
              </tr>
              })}
            </table>
            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>
                  </Tab> 
                   <Tab eventKey="5:30" title="5:30 PM" >
                   <form onSubmit={this.handleSubmit19}>
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;5:30PM</th>
              </tr>
              
           
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="5:30 PM" name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake7} />&nbsp;0ml
                <input type="radio" id="5:30 PM"name={user._id} value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake7} />&nbsp;50ml
  <input type="radio" id= "5:30 PM" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake7} /> &nbsp;100ml
  <input type="radio" id= "5:30 PM" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake7} /> &nbsp;150ml
  <input type="radio" id="5:30 PM" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake7} /> &nbsp;200ml
  <input type="radio" id= "5:30 PM"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake7} /> &nbsp;250ml
                </td>
              </tr>
              })}
            </table>
            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>
      </Tab>
    </Tabs>
        {/* <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
            >
            09:30AM
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to= {{pathname: '/studentslist'}}
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2') }} style = {{color: "black", fontFamily:"arial, sans-serif"}}
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
        </Nav> */}
        {/* <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <form onSubmit={this.handleSubmit2}>
            <table style={{ marginTop: "50px" }}>
              <thead>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;9:30AM</th>
              </tr>
              </thead>
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="9:30" name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake} />&nbsp;0ml
                <input type="radio" id="9:30" name={user._id} time = "9:30" value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake} />&nbsp;50ml
  <input type="radio" id= "9:30" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake} /> &nbsp;100ml
  <input type="radio" id="9:30" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;150ml
  <input type="radio" id="9:30" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;200ml
  <input type="radio" id="9:30"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;250ml
                </td>
              </tr>
              })}
            
            </table>

            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>
          </TabPane>
          <TabPane tabId="2">
          <form onSubmit={this.handleSubmit2}>
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;11:00</th>
              </tr>
              
           
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="11:00" name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake} />&nbsp;0ml
                <input type="radio" id="11:00" name={user._id} time = "9:30" value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake} />&nbsp;50ml
  <input type="radio" id= "11:00" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake} /> &nbsp;100ml
  <input type="radio" id="11:00" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;150ml
  <input type="radio" id="11:00" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;200ml
  <input type="radio" id="11:00"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;250ml
                </td>
              </tr>
              })}
            </table>
            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>
          </TabPane>
          <TabPane tabId="3">
          <form onSubmit={this.handleSubmit2}>
            <table style={{ marginTop: "50px" }}>
              <tr>
                <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;12:00</th>
              </tr>
              
           
              {this.state.users.map(user => {
                    return <tr>
                      <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                <td style={{ textAlign: "center" }}>
                <input type="radio" id="12:00" name={user._id}  value="0" style={{ marginLeft: "50px" }} onClick = {this.waterintake} />&nbsp;0ml
                <input type="radio" id="12:00" name={user._id} time = "9:30" value="50" style={{ marginLeft: "50px" }} onClick = {this.waterintake} />&nbsp;50ml
  <input type="radio" id= "12:00" name={user._id}  value="100" style={{ marginLeft: "50px" }} onClick ={this.waterintake} /> &nbsp;100ml
  <input type="radio" id="12:00" name={user._id} value="150" style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;150ml
  <input type="radio" id="12:00" name={user._id}  value="200" style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;200ml
  <input type="radio" id="12:00"  name={user._id}  value="250"  style={{ marginLeft: "50px" }} onClick = {this.waterintake} /> &nbsp;250ml
                </td>
              </tr>
              })}
            </table>
            <button type="submit" className="btn btn-primary button-style">Submit</button>
            </form>
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
  
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  
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
  
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
  
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
  
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
 
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
  
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
 
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
 
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
              <tr>
                <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                <td style={{ textAlign: "center" }}> 
                <div className="slidecontainer">
 
  <input type="range" name="weight"  class="slider" min="0" max="100" value="75" />
  <span  class="slider_label">{this.state.value}</span> ml
  </div>
  </td>
              </tr>
            </table>
          </TabPane>
          <br/>
        </TabContent> */}
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
                    <Link to={{pathname: '/dashboard', state: { className: this.props.location.state.className }}} className="sidenav-main"><img src="./petals-logo.png" alt="Petals logo" className="img-style" /></Link>
                    {/* <h1 style = {{marginLeft: "25%", marginTop:"1%"}}>PETALS</h1> */}
                  </li>
                  <li className="sidebar-align active">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to={{pathname: '/dashboard', state: { className: this.props.location.state.className }}}><FontAwesomeIcon icon={faTachometerAlt} size="lg" className="faicon-style" />Dashboard</NavLink>
                  </li>
                  <li className="sidebar-align">
                  <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/studentslist', state: { className: this.props.location.state.className }}}><FontAwesomeIcon icon={faUserGraduate} size="lg" className="faicon-style" />Students list</NavLink>
                    {/* <button className = "button-style1" style={{ color: "white", fontFamily:"Montserrat-Regular" }} type = "submit" onClick= {() => this.props.history.push({pathname: '/studentslist', state: { className:"aster" }})} ><FontAwesomeIcon icon={faUserGraduate} size="lg" className="faicon-style" />&nbsp;&nbsp;Students List</button> */}
                  </li>
                  <li className="sidebar-align">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/attendance', state: { className: this.props.location.state.className }}}><FontAwesomeIcon icon={faTasks} size="lg" className="faicon-style" />Attendance</NavLink>
                  </li>
                  <li className="sidebar-align">
                    <NavLink activeClassName="sidenav-font" activeStyle={{ color: "white" }} to= {{pathname: '/createweeklyjournal', state: { className: "aster" }}} ><FontAwesomeIcon icon={faNewspaper} size="lg" className="faicon-style" />Create Weekly journal</NavLink>
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

export default Attendance;