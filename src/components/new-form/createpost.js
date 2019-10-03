import React, { Component } from 'react';

class Form extends Component {

    // getInitialState() {
    //     return {
    //         body: this.props.body || '11111',
    //         title: this.props.title || '2222'
    //     }
    // } 
//     constructor(props) {
//     super(props);

//     this.state = {
//      first_name: "gfgd",
//       last_name: "uyt",
//       gender:"Male",
//       father_number:"1234567890",
//       email1:"a@b.com"
//     };
//   }
  
    // componentWillReceiveProps(props) {
    //     this.setState(props);
    // }

    // handleBodyChange(e) {
    //     this.setState({
    //         body: e.target.value
    //     });
    // }

    // handleTitleChange(e) {
    //     this.setState({
    //         title: e.target.value
    //     });
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
        
    // }
    handleSubmit(event){
        console.log(event.target.first_name.value);
        console.log(event.target.last_name.value);
        console.log(event.target.father_number.value);
        console.log(event.target.email1.value);
      event.preventDefault();
      fetch('http://13.233.64.181:5000/api/createchild',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          first_name: event.target.first_name.value,
          last_name: event.target.last_name.value,
          gender: event.target.gender.value,
          father_number: event.target.father_number.value,
          email1: event.target.email1.value     
        })
      })
      .then(res=> res.json())
      .then((result)=>
      {
          alert(result);
        //   this.setState({snackbaropen:true, snackbarmsg:result});
      },
      (error)=>{
        alert('Failed')
        // this.setState({snackbaropen:true, snackbarmsg:'failed'});
      }
      )
  }

    handleTitleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      handleLogin = () => {
        console.log("first name " + this.state.first_name);
        console.log("last name " + this.state.last_name);
        console.log("gender " + this.state.gender);
        console.log("father number " + this.state.father_number);
        console.log("email1 " + this.state.email1);
    }

    render() {
        return (
            <form name="createchild" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="createchild">
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="first_name">first name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="first_name"
                                   required="required"
                                   value={this.state.first_name}
                                   onChange={this.handleTitleChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="last_name">last name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="last_name"
                                   required="required"
                                   value={this.state.last_name}
                                   onChange={this.handleTitleChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="gender">gender</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="gender"
                                   required="required"
                                   value={this.state.gender}
                                   onChange={this.handleTitleChange}
                                   className="form-control"/>
                        </div>
                    </div> <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="father_number">father number</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="father_number"
                                   required="required"
                                   value={this.state.father_number}
                                   onChange={this.handleTitleChange}
                                   className="form-control"/>
                        </div>
                    </div> <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="email1">email1</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="email1"
                                   required="required"
                                   value={this.state.email1}
                                   onChange={this.handleTitleChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit" onClick = {this.handleLogin}
                                    id="blog_post_submit"
                                    className="btn-default btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;