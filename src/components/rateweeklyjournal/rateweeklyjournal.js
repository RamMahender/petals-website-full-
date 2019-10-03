import React, { Component } from 'react';
import axios from 'axios';

class Rateweeklyjournal extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit11 = this.handleSubmit11.bind(this);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      rate : [],
      user:[],
      id: "5d8a1413debc645050082c61"
    };
  }

  componentDidMount() {

    axios
      .get('http://13.233.64.181:5000/api/getchild/aster/'+this.props.location.state.usrid)
      .then(res => this.setState({ user: res.data.data }))
      .catch(err => console.log(err))

    axios
      .get(`http://13.233.64.181:5000/api/getweek/aster`)
      .then(res => this.setState({ rate: res.data.data }))
      .catch(err => console.log(err))
  }


  handleSubmit11(event){
event.preventdefault();

var data = [];
 this.state.rate.forEach(element => {
        data.push  ({
        topics: [
            {
                topic: element.topic,
                questions: [
                    {
                        question: element.question,
                        rating: event.target.quantity.value
                    }
                ]
            },
          ],
          start_date: "2019-09-23",
            end_date: "2019-09-28",
            className: "aster",
            childId:"5d8a1413debc645050082c61"
    })
  })

    var data11 = JSON.stringify({ data });
    console.log("dat1" + data11);

    fetch('http://13.233.64.181:5000/api/updateweekly', {

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
        // this.setState({snackbaropen:true, snackbarmsg:result});
      },
        (error) => {
          alert('Attendance is created');
          // this.setState({snackbaropen:true, snackbarmsg:'failed'});
        }
      )
    // event.preventdefault();
  }

  render() {
    return( 
      <div>
      <br/><br/>
          <ol class="breadcrumb">
    <li>Home</li>
    <li>Students list</li>
    <li style = {{color:"#ffa901"}}>Topics of The Week</li>
  </ol>
        <br/>
        <div class = "card" style = {{backgroundColor:"white"}}>
        <h2 style={{ fontFamily: "arial, sans-serif", color: "black" }}><b>Topics of The Week</b></h2>
        <form onSubmit={this.handleSubmit11}>
        <table style={{ marginTop: "0px" }}>
            {this.state.rate.map((week) => {
       var topics = week.topics.map((top) => {
         var questions = top.questions.map((ques) => {
           
            
            return <table>
             {/* <tr>
             <th>&nbsp; &nbsp;Rating</th>
            <th>&nbsp; &nbsp;Questions</th>
            
          </tr> */}
            <tr>
            {/* <td style={{ textAlign: "center" }} >{ques.rating}</td> */}
            <td style={{ textAlign: "center" }} >{ques.question}</td> 
            <td><input type="radio" id="rating" name="gender" value="development" style={{ marginLeft: "50px" }} checked/>&nbsp; Development
  <input type="radio" id="rating" name="gender" value="good" style={{ marginLeft: "50px" }} /> &nbsp;Good
  <input type="radio" id="rating" name="gender" value="excellent" style={{ marginLeft: "50px" }} /> &nbsp;Excellent
  </td>
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
       <button type="submit" className="btn btn-primary button-style">Submit</button>
 
       </form>
    </div>

    </div>



//       <div class = "row">
//     <div class = "col-sm-12">
//      <table class="table">
//   <thead>
//     <tr >
//       <th scope="col">Topic</th>
//       <th scope="col">Topic Name</th>
//       {/* <th scope="col">Last</th>
//       <th scope="col">Handle</th> */}
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">Question1</th>
//       <td><form>
//                   <input type="radio" name="gender" value="development" style={{ marginLeft: "50px" }} checked/>&nbsp; Development
//   <input type="radio" name="gender" value="good" style={{ marginLeft: "50px" }} /> &nbsp;Good
//   <input type="radio" name="gender" value="excellent" style={{ marginLeft: "50px" }} /> &nbsp;Excellent
//   </form></td>
//       {/* <td>Otto</td>
//       <td>@mdo</td> */}
//     </tr>
//     <tr>
//       <th scope="row">Question2</th>
//       <td><form>
//                   <input type="radio" name="gender" value="development" style={{ marginLeft: "50px" }} checked/>&nbsp; Development
//   <input type="radio" name="gender" value="good" style={{ marginLeft: "50px" }} /> &nbsp;Good
//   <input type="radio" name="gender" value="excellent" style={{ marginLeft: "50px" }} /> &nbsp;Excellent
//   </form></td>      {/* <td>Thornton</td>
//       <td>@fat</td> */}
//     </tr>
//     <tr>
//       <th scope="row">Question3</th>
//       <td><form>
//                   <input type="radio" name="gender" value="development" style={{ marginLeft: "50px" }} checked/>&nbsp; Development
//   <input type="radio" name="gender" value="good" style={{ marginLeft: "50px" }} /> &nbsp;Good
//   <input type="radio" name="gender" value="excellent" style={{ marginLeft: "50px" }} /> &nbsp;Excellent
//   </form></td>        {/* <td>the Bird</td>
//       <td>@twitter</td> */}
//     </tr>
//   </tbody>
// </table>
//     </div>

  
//     </div>
    )
  }
}

export default Rateweeklyjournal;
