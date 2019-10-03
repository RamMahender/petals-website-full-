import React, { Component } from 'react';
import './viewfoodintake.css';
import axios from 'axios';
import Moment from 'moment';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
class Viewfoodintake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodintake: [],
      user:[],
      id: "5d53e09f58ce1273bf02c6ae",
      // date: ""
    }
  }
  componentDidMount() {
    var d = new Date();
    var date = Moment((d.getYear()+1900)+""+(d.getMonth()+1)+""+0+d.getDate())/1000;
    axios
      .get('http://13.233.64.181:5000/api/getfoodintake/'+this.props.location.state.className+"/"+this.props.location.state.usrid+ "/"+date)
      .then(res => this.setState({ foodintake: res.data.data }))
      .catch(err => console.log(err))

      axios
      .get('http://13.233.64.181:5000/api/getchild/'+this.props.location.state.className+"/"+this.props.location.state.usrid)
      .then(res => this.setState({ user: res.data.data }))
      .catch(err => console.log(err))
  }
  render() {
    console.log("Foodintake" + JSON.stringify(this.state.foodintake))
    console.log("User"+ JSON.stringify(this.state.user));
    console.log("aaaa" + JSON.stringify(this.props.location.state.usrid))
    var data = [];
    this.state.foodintake.forEach(element => {
       data.push( element.date);
    });
   
    var uniqueDates = data.filter((val, id, array) => {
      console.log("val"+ array.indexOf(val)+ "   "+ id);
      return array.indexOf(val) === id;  
   });
   console.log("uniquedates"+ JSON.stringify(uniqueDates));
  //  var arrayofdates = JSON.stringify(uniqueDates);
   var dates11 = [];
   this.state.foodintake.forEach(element =>{
     for(var i = 0; i < uniqueDates.length; i++){
     if(element.date === uniqueDates[i]){
       dates11.push({dates : element.date , foodintakess:[{foodtype: element.foodtype, quantity: element.quantity}]});
     }
    }
 })
// this.state.foodintake.forEach(element =>{
// for(var i=0; i<uniqueDates.length;i++){
//   for (var j=0; j<this.state.foodintake.length;j++){
//     dates11.push({dates : element.date, foodtype: element.foodtype, quantity: element.quantity});
//   }
// }
// })
   console.log("dates11"+ JSON.stringify(dates11));
  //  var dates111 = JSON.stringify(dates11);
    var data1 = JSON.stringify({ data });
    console.log("data" + data1);
    return (
      <div>
        <br />
        <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem>Student list </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>View Food Intake</BreadcrumbItem>
      </Breadcrumb>
        <div class="col-sm-12"><br />
          <img src= {this.state.user.Image} alt="male img" height="200px" className="center" /><br />
          <h1 style={{ textAlign: "center" }}> {this.state.user.first_name}&nbsp;{this.state.user.middle_name}&nbsp;{this.state.user.last_name}</h1>
        </div>&nbsp;
        <br />
        <div class="card" style = {{backgroundColor:"white"}}>
          <table style={{ marginTop: "50px" }}>
            <tr style ={{backgroundColor:"lightgrey"}}>
              <th>&nbsp; &nbsp;Food Type</th>
              <th>&nbsp; &nbsp;Food Intake</th>
            </tr>
            {dates11.map(food=> {
              // var food1 = food.food1.map(foood =>{
              return <tr>
                <td style={{ textAlign: "center" }}>
                  <h4 style={{ marginLeft: "10px" }}>{food.foodtype}</h4>
                </td>
                <td style={{ textAlign: "center" }}>
                  <h4 style={{ marginLeft: "10px" }}>{food.quantity}</h4>
                </td>
              </tr>
            // })
            })}
          </table>

          {/* <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>Morning Milk</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>yes</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>Lunch</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>half</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>Snack1</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>half</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>Snack2</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>full</h3>
                </td>
              </tr>
              <tr>
              <td style={{ textAlign: "center" }}>
                <h3 style = {{marginLeft: "10px"}}>Evening Milk</h3>
                </td>
                <td style={{ textAlign: "center" }}>
                   <h3 style = {{marginLeft: "10px"}}>no</h3>
                </td>
              </tr> */}
          {/* })} */}

        </div>
      </div>

    );
  }
}

export default Viewfoodintake;
