import React from 'react';
import './grid.css';
// import {Container, Row, Col } from 'react-grid-system';
import { Container, Row, Col } from 'reactstrap';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';
import Card from '../cards/cards';
import axios from 'axios';
import Moment from 'moment';
// import '../../service/config/request'

class Grid extends React.Component {
  state = {
    date: new Date(),
  }
  constructor(props){
    super(props);
    this.state={
       users:[]
    }
}
componentDidMount() {
    console.log("jhe"+ JSON.stringify(this.props))
  axios
    .get(`http://13.233.64.181:5000/api/getnotification`)
    .then(res => this.setState({ users: res.data.data }))
    .catch(err => console.log(err))
}


  render() {
    // React.createElement(
    //   'div',
    //   {
    //     className: "abcd",
    //   },
    //    'Welcome to petals web'
    // )
    return (
      <div>
        {/* <Card /> */}
        <br/>
        <br/>
        {/* //  React.createElement('div',{className: "abcd",},"sjfewhfg"), */}
        <Container>
        <Row >
        <Col sm= "6" >
          {/* <div className="col-sm-6"> */}
            <div className="card calendar-style">
              <div>
                <Calendar className="react-calendar" style={{ width: "500px" }}
                  onChange={this.onChange}
                  value={this.state.date}
                />
              </div>
            </div>
          {/* </div> */}
          </Col>
          <Col sm= "6" >
          {/* <div className="col-sm-6"> */}

            <div className="card board-style" >
              <div className="notice-style">Notice Board</div>
              <div className="card-body">
             {this.state.users.reverse().map(user=>{
              //  console.log(user)
                 return <div className = "">
                 <p className="date-style" style={{ backgroundColor: "bgcolor" }}>{Moment(user.createdAt).format('DD-MM-YYYY')}</p>
                <h3 className="notice-title">{user.title}</h3>
                <p className="notice-body">{user.body}</p>
                <hr /><br />
                </div>
              })}
              </div>
            </div>
          {/* </div> */}
          </Col>

          </Row>
          </Container>
          <br/>
          <br/>
      </div>
    )
  }
}

export default Grid;