import React, { Component } from 'react';
import './topicofweek.css';
import axios from 'axios';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
class Topicofweek extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topicofweek : [],
      user:[],
      // id: "5d8a1413debc645050082c61",
    }
  }

  componentDidMount() {

      axios
      .get('http://13.233.64.181:5000/api/getweek/aster')
      .then(res => this.setState({ topicofweek: res.data.data}))
      .catch(err => console.log(err))
  }

  render() {
    console.log("topic of week" +JSON.stringify(this.state.topicofweek));
    console.log("users" + JSON.stringify(this.state.user));
    return( 
      <div>
      <br/><br/>
          {/* <ol class="breadcrumb">
    <li>Home</li>
    <li>Students list</li>
    <li style = {{color:"#ffa901"}}>Topics of The Week</li>
  </ol> */}
  <Breadcrumb>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbItem>Students list</BreadcrumbItem>
  <BreadcrumbItem style = {{color:"#ffa901"}}>Topics of the week</BreadcrumbItem>
  </Breadcrumb>
        <br/>
        <div class = "card" style = {{backgroundColor:"white"}}>
        <h2 style={{ fontFamily: "arial, sans-serif", color: "black" }}><b>Topics of The Week</b></h2>
        
        <table style={{ marginTop: "0px" }}>
            {this.state.topicofweek.map((week) => {
       var topics = week.topics.map((top) => {
         var questions = top.questions.map((ques) => {
           
            
            return <table>
             <tr>
             {/* <th>&nbsp; &nbsp;Rating</th> */}
            <th>&nbsp; &nbsp;Questions</th>
            
          </tr>
            <tr>
            {/* <td style={{ textAlign: "center" }} >{ques.rating}</td> */}
            <td style={{ textAlign: "center" }} >{ques.question}</td> 
            </tr>
            </table>
            

           
         })
         return(
           
             <tr >
         {/* <th>Topic</th> */}
       <td style={{textAlign: "center"}}><h3>{top.topic}</h3></td>
       {questions}
    </tr>
           
         )
       })
    return(
      <table style={{ marginTop: "50px" }} >
      {topics} 
      </table>

    )
    })}
       </table>
 

    </div>

    </div>
    // </div>
    )
  }
}

export default Topicofweek;
