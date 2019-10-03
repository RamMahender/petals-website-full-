import React, { Component } from 'react';
import "./studentlist.css";
import './studentlist.scss';
import {Container, Row, Col } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

library.add(faUsers);

class Studentlist extends Component{
  constructor(props){
    super(props);
    this.state={
       users:[]
    }
}
componentDidMount() {
    axios
      .get(`http://13.234.208.169:5000/api/getchild/aster`)
      .then(res => this.setState({ users: res.data.data }))
      .catch(err => console.log(err))
  }

  navigation = () => {
    this.props.history.push('/dashboard');
  }
    render() {
        return (
          <div>
        <div className="card1">
            <Container >
                <div className="col">
  <Row style={{backgroundColor:"#F2F2F2"}}>
    <Col sm={2} style ={{ color:"black"}}>
    {this.state.users.map(user=>{
    return <button type="button" onClick={this.navigation} ><img class = "profile" src = "rsz_maleimg.png" alt = "rsz_maleimage"/><span>{user.firstname}</span></button>
    })}
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Food Menu</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}} >
    <button type="button" className="btn btn-default colour">Attendance</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Weekly Journal</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Food Intake</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Water Intake</button>
    </Col>
    
  </Row>
  </div>
  {/* <div className="col">
  <Row >
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" onClick={this.navigation} ><img class = "profile" src = "Femaleimg.png" alt = "rsz_maleimage"/><span>studentName</span></button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Food Menu</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Attendance</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Weekly Journal</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Food Intake</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Water Intake</button>
    </Col>
    
  </Row>
  </div> */}
  {/* <div className="col">
  <Row style={{backgroundColor:"#F2F2F2"}}>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" onClick={this.navigation} ><img class = "profile" src = "rsz_maleimg.png" alt = "rsz_maleimage"/><span>studentName</span></button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Food Menu</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Attendance</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Weekly Journal</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Food Intake</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Water Intake</button>
    </Col>
  </Row>
  </div> */}
  {/* <div className="col">
  <Row >
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" onClick={this.navigation} ><img class = "profile" src = "Femaleimg.png" alt = "rsz_maleimage"/><span>studentName</span></button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Food Menu</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Attendance</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Weekly Journal</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Food Intake</button>
    </Col>
    <Col sm={2}style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Water Intake</button>
    </Col>
    
  </Row>
  </div> */}
  {/* <div className="col">
  <Row style={{backgroundColor:"#F2F2F2",}}>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" onClick={this.navigation} ><img class = "profile" src = "rsz_maleimg.png" alt = "rsz_maleimage"/><span>studentName</span></button>
    </Col>
    <Col sm={2}  style ={{ color:"black" }}>
    <button type="button" className="btn btn-default colour" >Food Menu</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Attendance</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Weekly Journal</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Food Intake</button>
    </Col>
    <Col sm={2} style ={{ color:"black"}}>
    <button type="button" className="btn btn-default colour">Water Intake</button>
    </Col>
    
  </Row>
  </div> */}
</Container>
</div>
</div>

        )
    }
}


export default Studentlist;
