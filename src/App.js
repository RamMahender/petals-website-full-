import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
// import Login from './components/login/login';
import Log from './components/forms/forms'
import DashBoard from './components/dashboard/dashboard';
import Attendance from './components/attendance/attendance';
import DashBoard11 from './components/dashboard11/dashboard11'
import Foodintake from './components/foodintake/foodintake';
import Foodmenu1 from './components/foodmenu1/foodmenu1';
import Studentprofile from './components/studentprofile/studentprofile';
import Viewattendance from './components/viewattendance';
import Viewfoodintake from './components/viewfoodintake';
import Viewwaterintake from './components/viewwaterintake';
import AdminDashboard from './components/admin-dashboard';
import Aster from './components/classlist/aster';
import waterintake from './components/waterintake/waterintake';
import Toddlers from './components/classlist/toddlers';
import Rose from './components/classlist/rose';
import Iris from './components/classlist/iris';
import Ukg from './components/classlist/ukg';
import Grade1 from './components/classlist/grade1';
import Daffodill from './components/classlist/daffodill';
import DayCare from './components/classlist/daycare';
import Createweeklyjournal from './components/createweeklyjournal';
import Createweeklyjournal1 from "./components/createweeklyjournal1";
import Rateweeklyjournal  from './components/rateweeklyjournal';
import Editfoodmenu from './components/editfoodmenu';
import Createchild from './components/createchild';
import NotFound from './components/not-found';
import NewForm from './components/new-form';
import ReactSidebar from './components/react-sidebar'
// import Studentslist from './components/studentslist';
// import Grid from './components/Grid/grid'
// import any from './components/any/any';
// import abc from './components/abc/index';

import './App.css';
// import Studentlist from './components/studentlist/studentlist';
import Studentlist1 from './components/studentlist1/studentlist1';
import WaterIntake1 from './components/waterintake1/waterintake1';
import Viewweeklyjournal from './components/viewweeklyjournal/viewweeklyjournal';
import Sendnotification from './components/sendnotification/sendnotification';
import AdminStudentprofile from './components/admin-studentprofile/admin-studentprofile';
import Viewrating from './components/viewrating/viewrating';
import Topicofweek from './components/topicofweek/topicofweek';
import Waterintake from './components/waterintake/waterintake';
import DynamicForm from './components/dynamic-form/dynamic-form';
import RadioForm from './components/radio-form/radio-form';
import Editchild from './components/editchild/editchild';
const queryString = require('query-string');
const params = queryString.parse(document.location.search);
const redirect = params.redirect; // this would be "abcdefg" if the query was "?redirect=abcdefg"
// import DashBoard from './components/dashboard';
if (document.location.pathname === '/' && redirect) {
  document.location.assign(`${document.location.origin}/${redirect}`);
}

class App extends Component{
  render(){
    document.getElementById('root');
    return(
      <Router>
         <Route exact path="/" component={Log} />
        <Route path="/dashboard" render={(props) => <DashBoard {...props} className={props.location.state} />}  />
        <Route path="/studentslist" component={Studentlist1} />
        <Route path = "/attendance" component = {Attendance}/>
        <Route path="/dashboard11" component={DashBoard11} />
        <Route path = "/foodintake" component = {Foodintake} />
        <Route path = "/waterintake" component = {WaterIntake1}/>
        <Route path = "/foodmenu" component = {Foodmenu1}/>
        <Route path = "/studentprofile" component = {Studentprofile}/>
        <Route path = "/viewattendance" component = {Viewattendance}/>
        <Route path = "/viewfoodintake" component = {Viewfoodintake}/>
        <Route path = "/viewwaterintake" component = {Viewwaterintake}/>
        <Route path = "/viewweeklyjournal" component = {Viewweeklyjournal}/>
        <Route path = "/viewrating" component = {Viewrating}/>
        <Route path = "/createweeklyjournal" component = {Createweeklyjournal1}/>
        <Route path = "/rateweeklyjournal" component = {Rateweeklyjournal}/>
        <Route path = "/topicofweek" component = {Topicofweek}/>
        <Route path = "/admin" component = {AdminDashboard}/>
        <Route path = "/home" component = {Waterintake}/>
        <Route path = "/toddlers" component = {Toddlers}/>
        <Route path = "/rose" component = {Rose}/>
        <Route path = "/iris" component = {Iris}/>
        <Route path = "/aster" component = {Aster}/>
        <Route path = "/ukg" component = {Ukg}/>
        <Route path = "/grade1" component = {Grade1}/>
        <Route path = "/daffodill" component = {Daffodill}/>
        <Route path = "/daycare" component = {DayCare}/>
        <Route path = "/editfoodmenu" component = {Editfoodmenu}/>
        <Route path = "/editchild" component = {Editchild}/>
        <Route path = "/createchild" component = {Createchild}/>
        <Route path = "/admin-studentprofile" component = {AdminStudentprofile}/>
        <Route path = "/sendnotification" component = {Sendnotification}/>
        <Route path = "/newform" component = {NewForm}/>
        <Route path = "/reactsidebar" component = {ReactSidebar}/>
        <Route path = "/dynamicform" component = {DynamicForm}/>
        <Route path = "/radioform" component = {RadioForm}/>
        {/* <Route path = "/tabexample" component = {TabsExamples}/> */}
        {/* <Route path = "/studentlist1" component = {Studentslist}/> */}
        {/* <Route path = "*" component = {NotFound} /> */}


      </Router>
      
    )
  }
}
export default App;