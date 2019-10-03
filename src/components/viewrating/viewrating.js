import React, { Component } from 'react';
import './viewrating.css';
import axios from 'axios';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
class Viewrating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewrate : [],
      user:[],
      id: "5d8a1413debc645050082c61",
    }
  }

  componentDidMount() {

      axios
      .get('http://13.233.64.181:5000/api/getchild/aster/'+this.props.location.state.usrid)
      .then(res => this.setState({ user: res.data.data }))
      .catch(err => console.log(err))

      axios
      .get('http://13.233.64.181:5000/api/getweekly1/aster/5d8a1413debc645050082c61')
      .then(res => this.setState({ viewrate: res.data.data}))
      .catch(err => console.log(err))
  }

  render() {
    console.log("view rate" +JSON.stringify(this.state.viewrate));
    console.log("users" + JSON.stringify(this.state.user));
    return( 
      <div>
      <br/>
      <Breadcrumb>
        <BreadcrumbItem>Home </BreadcrumbItem>
        <BreadcrumbItem>Student list </BreadcrumbItem>
        <BreadcrumbItem active style={{ color: "#ffa901" }}>View Rating</BreadcrumbItem>
      </Breadcrumb>
        <div class = "col-sm-12"><br/>
        <img src = "Maleimg.png" alt = "male img" height = "200px" className = "center"/><br/>
        <h1 style = {{textAlign: "center"}}> {this.state.user.first_name}&nbsp;{this.state.user.middle_name}&nbsp;{this.state.user.last_name}</h1>
        </div>&nbsp;
        <br/>
        <div class = "card" style = {{backgroundColor:"white"}}>
        <table style={{ marginTop: "50px" }}>
            {this.state.viewrate.map((rate) => {
       var topics = rate.topics.map((top) => {
         var questions = top.questions.map((ques) => {
           
            
            return <table>
             <tr>
            <th>&nbsp; &nbsp;Questions</th>
            <th>&nbsp; &nbsp;Rating</th>
          </tr>
            <tr>
            <td style={{ textAlign: "center" }} >{ques.question}</td> 
            <td style={{ textAlign: "center" }} >{ques.rating}&nbsp;&nbsp;</td>
            </tr>
            </table>
            

           
         })
         return(
           
             <tr >
         <th>Topic</th>
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

export default Viewrating;
