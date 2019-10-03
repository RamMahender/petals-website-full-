import React, { Component } from 'react';

class Viewweeklyjournal extends Component {
  render() {
    return (
      <div>
        <br/>
          <ol class="breadcrumb">
    <li>Home</li>
    <li>Students list</li>
    <li style = {{color:"#ffa901"}}>Weekly Journal Topics</li>
  </ol>
  <br/><br/>
      <div className = "row">
        <div className = "col-sm-12">
          <div className = "card">
         <table className="table">
      <thead>
        <tr style = {{backgroundColor:"#f5a741"}}>
          <th scope="col">Topic</th>
          <th scope="col">English </th>
          {/* <th scope="col"></th> */}
          {/* <th scope="col">Last</th>
          <th scope="col">Handle</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Question1</th>
          <td style={{textAlign:"center"}}>Alphabets</td>

          {/* <td>Otto</td>
          <td>@mdo</td> */}
        </tr>
        <tr>
          <th scope="row">Question2</th>
          <td style={{textAlign:"center"}}>Words</td>      {/* <td>Thornton</td>
          <td>@fat</td> */}
        </tr>
        <tr>
          <th scope="row">Question3</th>
          <td style={{textAlign:"center"}}>Sentence</td>
        </tr>
      </tbody>
    </table>
        </div>
        </div>
        </div>
        </div>
    )
  }
}

export default Viewweeklyjournal;
