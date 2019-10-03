import React from 'react';
import "./navbar.css";
// import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";
// import 'font-awesome/css/font-awesome.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

//   import Avatar from 'react-avatar';
  
library.add(faGlobeAmericas);
class Topbar extends React.Component{
    constructor(props){
        super()
        this.state={
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this);
 
    }
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    render(){
        return(
            <div>
                <Navbar color="#FFFFFF"  light expand="md" style = {{backgroundColor:"white", boxShadow: "0 2px 6px 0 rgba(0,0,0,0.2)"}}>
                <Nav className="ml-auto navbar-nav nav-color">
                        {/* <h5 className='abcd' >Teacher</h5> &nbsp; */}
                        
            
                {/* <Dropdown isOpen={this.state.dropdownOpen}toggle={this.toggle} style={{ width: 50, height: 50}}> */}
                {/* <DropdownToggle caret> */}
          

                <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link dropdown-toggle " caret>
        Teacher
          </DropdownToggle>

        {/* </DropdownToggle> */}
                    
                 {/* <img src='./profile.jpeg'style={{ width: 50, height: 50,marginLeft:'0px',marginBottom:'10px'}}></img> */}
                 <DropdownMenu>
                     {/* <DropdownItem>My Profile</DropdownItem>
                     <DropdownItem>Task</DropdownItem>
                     <DropdownItem>Message</DropdownItem>
                     <DropdownItem>Account Settings</DropdownItem> */}
                     <DropdownItem><a href = "/#">Logout</a></DropdownItem>

                 </DropdownMenu>
                
    {/* </Dropdown> */}
                 <img src="./teachdp.png" alt = "teacher-logo" className = "teacherlogo-style" ></img>
                 <div className="icon">
                 <FontAwesomeIcon icon={faGlobeAmericas} color ="#FFA901" size="lg" />EN
                 </div>
                 </UncontrolledDropdown> 
                 </Nav>
                </Navbar>

            </div>
        )
    }
}
export default Topbar;