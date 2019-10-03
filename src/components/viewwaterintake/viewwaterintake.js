import React, { Component } from 'react';
import './viewwaterintake.css';
import axios from 'axios';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Moment from 'moment'
class Viewwaterintake extends Component {

  constructor(props) {
    super(props);
    this.state = {
      waterintake1: [],
      user:[],
      id: "5d53e09f58ce1273bf02c6ae",
      date: "1566325800"
    }
  }
  componentDidMount() {
    var d = new Date();
    var date = Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000;
    axios
      .get('http://13.233.64.181:5000/api/getwaterintake/'+this.props.location.state.className+"/"+this.props.location.state.usrid+"/"+date)
      .then(res => this.setState({ waterintake1: res.data.data }))
      .catch(err => console.log(err))

      axios
      .get('http://13.233.64.181:5000/api/getchild/aster/'+this.props.location.state.usrid)
      .then(res => this.setState({ user: res.data.data }))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <br/>
        <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem>Student list </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>View Water Intake</BreadcrumbItem>
      </Breadcrumb>
        <div class = "col-sm-12"><br/>
        <img src = "Maleimg.png" alt = "male img" height = "200px" className = "center"/><br/>
        <h1 style = {{textAlign: "center"}}> {this.state.user.first_name}&nbsp;{this.state.user.middle_name}&nbsp;{this.state.user.last_name}</h1>
        </div>&nbsp;
        <br/>
        <div class = "card" style = {{backgroundColor:"white"}}>
        <table style={{ marginTop: "50px" }}>
              <tr style ={{backgroundColor:"lightgrey"}}>
                <th>&nbsp; &nbsp;Water Timings</th>
                <th>&nbsp; &nbsp;Water Intake</th>
              </tr>
              {this.state.waterintake1.map(water => {
              return <tr>
                <td style={{ textAlign: "center" }}>
                  <h3 style={{ marginLeft: "10px" }}>{water.time}</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                  <h3 style={{ marginLeft: "10px" }}>{water.waterIntake} ml</h3>
                </td>
              </tr>
            })}
              {/* <tr>
                <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>9:30AM</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>100ml</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>11:00AM</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>150ml</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>12:00PM</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>180ml</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>1:00PM</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>120ml</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>2:30PM</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>200ml</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>3:30PM</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>100ml</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>4:30PM</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>250ml</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>5:30PM</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>50ml</h3>
                </td>
              </tr> */}
            </table>
      </div>
      </div>
    )
  }
}

export default Viewwaterintake;
