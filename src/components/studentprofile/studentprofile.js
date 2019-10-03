import React, { Component } from 'react';
import CardsStudentview from "../cards-studentview/cards-studentview";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { navto } from "../studentslist/studentslist";
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'moment';
import Popup from "reactjs-popup";
import PieChart from 'react-minimal-pie-chart';
import { faTasks, faNewspaper, faUtensils, faGlassWhiskey, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

library.add(faTasks, faNewspaper, faUtensils, faGlassWhiskey);

class Studentprofile extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            attendance: [],
            id:"5d8a1413debc645050082c61"
               }
    }

    componentDidMount() {
        console.log("User ID in Details screen : " + this.props.location.state.usrid)
        axios
            .get(`http://13.233.64.181:5000/api/getchild/` + this.props.location.state.className + "/"  + this.props.location.state.usrid)
            .then(res => this.setState({ users: res.data.data }))
            .catch(err => console.log(err))

        axios
            .get('http://13.233.64.181:5000/api/getattendance/' + this.props.location.state.usrid)
            .then(res => this.setState({ attendance: res.data }))
            .catch(err => console.log(err))
        //   if(this.state.attendance.success === false){
        //       alert("No data to be dislayed")
        //   }
    }

    render() {
        //    var userid =  (this.state.usrid)
        console.log("abcd" + JSON.stringify(this.state.users));
        console.log("UserID" + JSON.stringify(this.props));
        console.log("Attendance" + JSON.stringify(this.state.attendance))

        return (
            <div>
                <br />
                {/* <h2 style = {{fontFamily:"arial, sans-serif", color: "black"}}><b>Water Intake for Students</b></h2>
      <br/><br/> */}
               <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem>Student list </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>Student profile</BreadcrumbItem>
      </Breadcrumb>
                {/* <br/> */}
                {/* <br/> */}
                <div class="card height-auto">
                    <div class="card-body1">
                        <div class="heading-layout1">
                            <div class="item-title">
                                {/* <h3>About Me</h3> */}
                            </div>
                            {/* <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">...</a>
        
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div> */}
                        </div>
                        <div class="single-info-details" style={{ display: "flex", marginRight: "40px" }}>
                            <div class="item-img" style={{ marginRight: "40px" }}>
                                <img className="img1" src={this.state.users.Image} width="280px" height="280px" alt="student" />
                            </div>
                            <div class="item-content">
                                <div class="header-inline item-header">
                                    <h3 class="text-dark-medium font-medium"><b>{this.state.users.first_name}&nbsp;{this.state.users.middle_name}&nbsp;{this.state.users.last_name}</b></h3>
                                    {/* <div class="header-elements">
                                        <ul>
                                            <li><a href="#"><i class="far fa-edit"></i></a></li>
                                            <li><a href="#"><i class="fas fa-print"></i></a></li>
                                            <li><a href="#"><i class="fas fa-download"></i></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                                <p style={{ color: "white" }}>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale
                                word moun taiery.Aliquam erat volutpaturabiene natis massa sedde</p>
                                <div class="info-table table-responsive">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div className="row gutters-20">
                        <div className="col-sm-3 col-sm-6 col-12">
                            <div style={{ color: "black" }} className="item-title"> <Popup trigger={<div className="dashboard-summery-one mg-b-20">
                                <div className="row align-items-center"></div><div className="row"><div className="col-6"><div className="item-icon bg-light-green ">
                                    <FontAwesomeIcon icon={faTasks} size="lg" className="text-green" />
                                </div></div>
                                    <div className="col-6">
                                        <div className="item-content1"><button> Attendance</button></div></div></div></div>} position="top center">
                                <div style={{ color: "black" }}><PieChart
                                    data={[
                                        { title: 'Present', value: this.state.attendance.days_present, color: '#E38627' },
                                        { title: 'Absent', value: this.state.attendance.days_absent, color: '#C13C37' },
                                        { title: 'Late', value: this.state.attendance.days_late, color: '#6A2135' }
                                    ]}
                                    style={{ width: '80%' }} className="chartalign"
                                />No. of days present: {this.state.attendance.days_present}<br />
                                    No. of days absent: {this.state.attendance.days_absent}<br />
                                    No. of days late: {this.state.attendance.days_late}</div><br />
                                Total days: {this.state.attendance.total_days}
                            </Popup></div>
                        </div>
                        <div className="col-sm-3 col-sm-6 col-12">
                        <button type="submit" onClick={() => this.props.history.push({ pathname: '/viewrating', state: { usrid: this.props.location.state.usrid, className: this.props.location.state.className } })} >
                            <div className="dashboard-summery-one mg-b-20">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <div className="item-icon bg-light-blue">
                                            <FontAwesomeIcon icon={faNewspaper} size="lg" className="text-blue" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="item-content">
                                            <div className="item-title">Weekly Journal</div>
                                        </div>
                                    </div>
                                </div>
                            </div></button>
                        </div>
                        <div className="col-sm-3 col-sm-6 col-12">
                            <button type="submit" onClick={() => this.props.history.push({ pathname: '/viewfoodintake', state: { usrid: this.props.location.state.usrid, className: this.props.location.state.className  } })} >
                                <div className="dashboard-summery-one mg-b-20">
                                    <div style = {{padding: "0px 32px"}} className="row align-items-center">
                                        <div className="col-6">
                                            <div className="item-icon bg-light-yellow">
                                                <FontAwesomeIcon icon={faUtensils} size="lg" className="text-orange" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="item-content">
                                                <div className="item-title">Food intake
                      {/* <button type = "submit"  onClick= {() => this.props.history.push({pathname: '/viewfoodintake', state: { usrid: this.props.location.state.usrid }})} >Food Intake</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></button>
                        </div>
                        <div className="col-sml-3 col-sm-6 col-12">
                        <button type="submit" onClick={() => this.props.history.push({ pathname: '/viewwaterintake', state: { usrid: this.props.location.state.usrid, className: this.props.location.state.className  } })} >
                            <div className="dashboard-summery-one mg-b-20">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <div className="item-icon bg-light-red">
                                            <FontAwesomeIcon icon={faGlassWhiskey} size="lg" className="text-red" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="item-content">
                                            <div className="item-title">Water Intake</div>
                                        </div>
                                    </div>
                                </div>
                            </div></button>
                        </div>
                        <div className="col-sml-3 col-sm-6 col-12">
                        <button type="submit" onClick={() => this.props.history.push({ pathname: '/rateweeklyjournal', state: { usrid: this.props.location.state.usrid } })} >
                            <div className="dashboard-summery-one mg-b-20">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <div className="item-icon bg-light-purpel">
                                            <FontAwesomeIcon icon={faStarHalfAlt} size="lg" className="text-purpel" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="item-content">
                                            <div className="item-title">Rating Weekly Journal</div>
                                        </div>
                                    </div>
                                </div>
                            </div></button>
                        </div>
                    </div>
                </div>              </div>
        )
    }
}

export default Studentprofile;
