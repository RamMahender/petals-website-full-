import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSms } from '@fortawesome/free-solid-svg-icons';


library.add(faSms);

class Sendnotification extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(event) {
    event.preventDefault();
  

    fetch('http://13.233.64.181:5000/api/SendNotifications', {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        title: event.target.title.value,
        body: event.target.body.value,
      })

    })
    .then(res=> res.json())
      .then((result)=>
      {
          alert(JSON.stringify(result));
          console.log("abxcd" + JSON.stringify(result.message));
      },
      (error)=>{
        alert('Failed')
      }
      )
  }

  render() {
    return (
      <div>
        <br />
        <h2 style={{ fontFamily: "arial, sans-serif", color: "black", }}><FontAwesomeIcon icon={faSms} size="lg" />&nbsp;<b>Send Notification</b></h2>
        <br />
        <ol className="breadcrumb">
          <li>Home</li>
          <li style={{ color: "#ffa901" }}>Send Notification</li>
        </ol>

        <br />
      <div className="card1" style={{ backgroundColor: "#2AD7C5" }}>
          <div className="container">
          <div className = "card-body1" style={{marginLeft:"0px"}}>
          <h1 style={{ textAlignLast: "center" }}>Send Notification</h1>
          <br/>
          <form onSubmit = {this.handleSubmit}>
            <div className="form-group">

            {/* <table >
              <tr style={{ backgroundColor: "white" }}> */}
                {/* <td > */}
                  <input type="text" name="title" id = "title" placeholder="Title:" className="form-control" />
                  {/* </td>            </tr> */}
              <br/>
              {/* <tr> */}
                {/* <td > */}
              <textarea rows="20" cols="150" placeholder="body" name ="body" id= "body" className="form-control">
              
               </textarea>
               {/* </td> */}
              {/* </tr> */}
              {/* </table> */}
              <br/>
              <button type="submit" onClick = {this.submitValue} class="btn btn-primary" style={{ width:"400px" ,fontSize: "1.3em", textAlignLast: "middle", marginLeft: "400px" }}>Send</button>
              </div>
              </form>
              
          </div>
          </div>
          </div>
          </div>
    )
  }
}

export default Sendnotification;
