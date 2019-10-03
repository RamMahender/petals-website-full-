import React, { Component } from 'react';
import "./cards-studentview.css"
// import Example from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTasks, faNewspaper, faUtensils, faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import PieChart from 'react-minimal-pie-chart';
import axios from 'axios';

library.add(faTasks, faNewspaper, faUtensils, faGlassWhiskey);
class CardsStudentview extends Component {
  constructor(props){
    super(props);
      this.state = {
        users : []
    }
  }
  componentDidMount(){
    axios
    .get('http://13.233.64.181:5000/api/getattendance/5d53e09f58ce1273bf02c6ae')
    .then(res => this.setState({users: res.data}))
    .catch(err => console.log(err))
  }
  render() {
    console.log("aaa"+JSON.stringify(this.props))       
    return (
      <div>
        <div className="row gutters-20">
          <div className="col-sm-3 col-sm-6 col-12">
                    <div style = {{color:"black"}} className="item-title"> <Popup trigger={ <div className="dashboard-summery-one mg-b-20">
              <div className="row align-items-center"></div><div className = "row"><div className = "col-6"><div className="item-icon bg-light-green ">
                    <FontAwesomeIcon icon={faTasks} size="lg" className="text-green" />
                  </div></div>
                   <div className="col-6">
                  <div className="item-content1"><button> Attendance</button></div></div></div></div>} position="top center">
    <div style = {{color: "black"}}><PieChart
			data={[
			  { title: 'Present', value: this.state.users.days_present, color: '#E38627' },
			  { title: 'Absent', value: this.state.users.days_absent, color: '#C13C37' },
        { title: 'Late', value: this.state.users.days_late, color: '#6A2135' }
			]}
			style={{width: '80%'}} className = "chartalign"
		  />No. of days present: {this.state.users.days_present}<br/>
      No. of days absent: {this.state.users.days_absent}<br/>
      No. of days late: {this.state.users.days_late}</div><br/>
      Total days: {this.state.users.total_days}
  </Popup></div>
          </div>
          <div className="col-sm-3 col-sm-6 col-12">
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
            </div>
          </div>
          <div className="col-sm-3 col-sm-6 col-12">
            <a href = "viewfoodintake"><div className="dashboard-summery-one mg-b-20">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="item-icon bg-light-yellow">
                    <FontAwesomeIcon icon={faUtensils} size="lg" className="text-orange" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="item-content">
                  <div className="item-title">Food Intake</div>
                  </div>
                </div>
              </div>
            </div></a>
          </div>
          <div className="col-sml-3 col-sm-6 col-12">
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CardsStudentview;
