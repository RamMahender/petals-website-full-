import React, { Component } from 'react';

class Createweeklyjournal extends Component {
       handleSubmit(){
         console.log("button clicked")
       }
       constructor(props) {
        super(props);
        
        this.state = {
           data: ''
        }
        this.updateState = this.updateState.bind(this);
        this.newState = this.newState.bind(this);
     };
     updateState() {
        this.setState({data: <div className = "row">
        <div className = "col-sm-12">
          <div className = "card">
         <table className="table">
      <thead>
        <tr style = {{backgroundColor:"#f5a741"}}>
          <th scope="col">Topic</th>
          <th scope="col"><input type = "text" placeholder = "Topic Name" style = {{backgroundColor: "#f5a741"}}/></th>
          {/* <th scope="col"></th> */}
          {/* <th scope="col">Last</th>
          <th scope="col">Handle</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Question1</th>
          <td><form>
          <input type = "text" placeholder = "Question"/>
            </form></td>
            {/* <td><button type = "submit" class = "btn btn-success" onClick = {this.updateState}>+</button></td> */}

          {/* <td>Otto</td>
          <td>@mdo</td> */}
        </tr>
        <tr>
          <th scope="row">Question2</th>
          <td><form>
          <input type = "text" placeholder = "Question" style = {{backgroundColor:"#F6F6F6"}}/>
          </form></td>      {/* <td>Thornton</td>
          <td>@fat</td> */}
        </tr>
        <tr>
          <th scope="row">Question3</th>
          <td><form>
          <input type = "text" placeholder = "Question"/>
          </form></td>
        </tr>
      </tbody>
    </table>
        </div>
        {/* <button type = "submit" className = "btn btn-link" style = {{fontSize: "1.3em", marginLeft: "700px"}} onClick = {this.newState}>...Add More</button> */}
        </div>
        </div>
    })
     }

     newState(){
       this.setState({data: <h1>Topic Saved</h1>})
     }
  render() {
    return  <div>
    <button type = "submit" className = "btn btn-success" onClick = {this.updateState} style = {{fontSize: "20px", width:"150px"}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type = "submit" className = "btn btn-success" onClick = {this.newState} style = {{fontSize: "20px", width:"150px"}}>SAVE</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type = "submit" className = "btn btn-success" style = {{fontSize: "20px", width:"150px"}}>submit</button>
    <h4>{this.state.data}</h4>
 </div>
  }
}

export default Createweeklyjournal;
