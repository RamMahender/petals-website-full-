import React, { Component } from 'react';
import axios from "axios";

class RadioForm extends Component {
   
  constructor(props){
    super(props);
      this.state = {
        users:[],
        site: ''
    }
    this.onSiteChanged = this.onSiteChanged.bind(this);
    // this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  componentDidMount() {
    axios
        .get(`http://13.233.64.181:5000/api/getchild/aster`)
        .then(res => this.setState({ users: res.data.data }))
        .catch(err => console.log(err))
}
onSiteChanged(e) {
  this.setState({
    site: e.currentTarget.value
    });
}

  render() {
    return (
      <div>
      {this.state.users.map(user => {
        return (
          <h5>dsfgd</h5>
          // <tr>
          // <td><input type="radio" name="site_name" 
          //            value={result.SITE_NAME} 
          //            checked={this.state.site === result.SITE_NAME} 
          //            onChange={this.onSiteChanged} />{result.SITE_NAME}</td></tr>
          )
      })}
      </div>
    )
  }
}

export default RadioForm;
