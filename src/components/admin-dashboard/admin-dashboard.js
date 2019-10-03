import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import '../admin-dashboard/admin-dashboard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
// import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { faUser, faLock, faTachometerAlt, faUserGraduate, faTasks, faNewspaper, faUtensils, faGlassWhiskey , faUsers, faEdit} from "@fortawesome/free-solid-svg-icons";
import Grid from "../Grid/grid";
import Topbar from "../Navbar/navbar";
// import Attendance from "../attendance/attendance";
import Attendance1 from "../attendance1/attendance1";
import Foodintake1 from "../foodintake1/foodintake1";
import Footer from "../footer/footer";
import Studentslist from "../studentslist/studentslist";
import Waterintake from "../waterintake/waterintake";
import Foodmenu from "../foodmenu/foodmenu";
// import Example from "../Navbar/navbar";
// import Foodintake1 from "../foodintake1/foodintake1";

library.add(faUser, faLock, faTachometerAlt, faUserGraduate, faTasks, faNewspaper, faUtensils, faGlassWhiskey, faUsers, faEdit);


// import Navbar from "../Navbar/navbar";
// import Log from "../forms/forms"
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
class AdminDashboard extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data:''
    };
  }
  render(){
    console.log(JSON.stringify(this.props))    
const routes = [
  {
    path: "/Aster",
    exact: true,
    main: () => <div className="mainhd active">
             {/* <h5>DashBoard</h5> */}
             <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2>
        <br/>
        <ol class="breadcrumb">
    <li>Home</li>
    {/* <li>Students list</li> */}
    <li style = {{color:"#ffa901"}}>Aster</li>
  </ol>
                   <Studentslist />
             {/* <Example/> */}
               </div>
  },
  {
    path: "/Toddlers",
    // sidebar: () => <div>bubblegum!</div>,
    main: () => <div className="mainhd">
<h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2>
        <br/>
        <ol class="breadcrumb">
    <li>Home</li>
    {/* <li>Students list</li> */}
    <li style = {{color:"#ffa901"}}>Toddlers</li>
  </ol>         
        <Studentslist />
               </div>
  },
  {
    path: "/Rose",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
              
              <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2>
        <br/>
        <ol class="breadcrumb">
    <li>Home</li>
    {/* <li>Students list</li> */}
    <li style = {{color:"#ffa901"}}>Rose</li>
  </ol>               <Studentslist />


             {/* <Attendance/> */}
             </div>
  },
  {
    path: "/Iris",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
       <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2>
        <br/>
        <ol class="breadcrumb">
    <li>Home</li>
    {/* <li>Students list</li> */}
    <li style = {{color:"#ffa901"}}>Iris</li>
  </ol>      
               <Studentslist />
               </div>
  },
  {
    path: "/Ukg",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
 <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2>
        <br/>
        <ol class="breadcrumb">
    <li>Home</li>
    {/* <li>Students list</li> */}
    <li style = {{color:"#ffa901"}}>Ukg</li>
  </ol>                   <Studentslist />
               </div>
  },
  {
    path: "/Grade1",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
 <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2>
        <br/>
        <ol class="breadcrumb">
    <li>Home</li>
    {/* <li>Students list</li> */}
    <li style = {{color:"#ffa901"}}>Grade1</li>
  </ol>                  <Studentslist />
                </div>
  },
  {
    path: "/Daffodill",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
 <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2>
        <br/>
        <ol class="breadcrumb">
    <li>Home</li>
    {/* <li>Students list</li> */}
    <li style = {{color:"#ffa901"}}>Daffodill</li>
  </ol>                  <Studentslist />
                </div>
  },
  {
    path: "/Daycare",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
 <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2>
        <br/>
        <ol class="breadcrumb">
    <li>Home</li>
    {/* <li>Students list</li> */}
    <li style = {{color:"#ffa901"}}>DayCare</li>
  </ol>                  <Studentslist />
                </div>
  },
  {
    path: "/foodmenu",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <div className="mainhd">
 {/* <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;<b>Students List</b></h2> */}
       
    {/* <li>Students list</li> */}
    <h3><a href = "/editfoodmenu"><FontAwesomeIcon icon={faEdit} size="lg" />&nbsp;Edit Food Menu</a></h3>
              <Foodmenu/>
                </div>
  },
  {
    path: "/login",
    // sidebar: () => <div><Log/></div>,
    main: () => <div className="mainhd">
                </div>
  }
];

  return (
    <div>
<div>
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
              <Link to="/" className = "sidenav-main"><img src = "./petals-logo.png" alt = "Petals logo" className = "img-style"/></Link>
              {/* <h1 style = {{marginLeft: "25%", marginTop:"1%"}}>PETALS</h1> */}
            </li>           
            <li className = "sidebar-align active">
            <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}} to="/Aster"><FontAwesomeIcon icon={faTachometerAlt} size = "lg" className = "faicon-style"/>Aster</NavLink>
            </li>
            <li className = "sidebar-align">
              <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}} to="/Toddlers" ><FontAwesomeIcon icon={faUserGraduate} size = "lg" className = "faicon-style"/>Toddlers</NavLink>
            </li>
            <li className = "sidebar-align">
              <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}} to="/Rose" ><FontAwesomeIcon icon={faTasks} size = "lg" className = "faicon-style"/>Rose</NavLink>
            </li>
            <li className = "sidebar-align">
              <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}}  to="/Iris" ><FontAwesomeIcon icon={faNewspaper} size = "lg" className = "faicon-style"/>Iris</NavLink>
            </li>
            <li className = "sidebar-align">
              <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}} to="/Ukg" ><FontAwesomeIcon icon={faUtensils} size = "lg" className = "faicon-style"/>Ukg</NavLink>
            </li>
            <li className = "sidebar-align">
              <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}}  to="/Grade1" ><FontAwesomeIcon icon={faGlassWhiskey} size = "lg" className = "faicon-style"/>Grade 1</NavLink>
            </li>
            <li className = "sidebar-align">
              <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}}  to="/Daffodill" ><FontAwesomeIcon icon={faGlassWhiskey} size = "lg" className = "faicon-style"/>Daffodill</NavLink>
            </li>
            <li className = "sidebar-align">
              <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}}  to="/DayCare" ><FontAwesomeIcon icon={faGlassWhiskey} size = "lg" className = "faicon-style"/>DayCare</NavLink>
            </li>
            <li className = "sidebar-align">
              <NavLink activeClassName = "sidenav-font" activeStyle = {{color:"white"}}  to="/foodmenu" ><FontAwesomeIcon icon={faGlassWhiskey} size = "lg" className = "faicon-style"/>Food Menu</NavLink>
            </li>
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
      <Footer />
    </div>
    </div>
  );
}
}

export default AdminDashboard
