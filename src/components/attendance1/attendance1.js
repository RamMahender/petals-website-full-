import React, { Component } from 'react';
import "./attendance1.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUsers, faLock, faTasks, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

library.add(faUsers, faLock, faTasks, faUser);


class Attendance1 extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit111 = this.handleSubmit111.bind(this);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://13.233.64.181:5000/api/getchild/aster`)
      .then(res => this.setState({ users: res.data.data }))
      .catch(err => console.log(err))
  }


  handleSubmit111(event){
    event.preventDefault();


    var data = [{
      attendance: [{
        date: "2015-07-10",
        status: "present"
      }],
      ChildId: "5d8c6e1a02b43e560c49a9ce"
    }]

    var data11 = JSON.stringify({ data });
    console.log("dat1" + data11);

    fetch('http://13.233.64.181:5000/api/createattendance', {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data11

    })

      .then(res => res.json())
      .then((result) => {
        alert(JSON.stringify(result.message));
        console.log("abxcd" + JSON.stringify(result.message));
      },
        (error) => {
          alert('Request issue');
        }
      )
  }

  render() {
    return (
      <div>
        <br />
        <h2 style={{ fontFamily: "arial, sans-serif", color: "black" }}><b>Student Attendance</b></h2>
        <br />
        <ol className="breadcrumb">
          <li>Home</li>
          <li style={{ color: "#ffa901" }}>Attendance</li>
        </ol>
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
                      <td style={{ textAlignLast: "center" }}>  <input style={{ marginLeft: "50px" }} type="radio" id= {user.last_name} name = {user.last_name} />&nbsp;Present&nbsp;&nbsp;
                <input style={{ marginLeft: "50px" }} type="radio" id= {user.last_name} name = {user.last_name} />&nbsp;Absent
                <input style={{ marginLeft: "50px" }} type="radio" id= {user.last_name} name = {user.last_name} />&nbsp;Late</td>
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
    )
  }
}

export default Attendance1;
