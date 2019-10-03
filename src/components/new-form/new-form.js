// import React, { Component } from 'react';
// import Form from './createpost';
// import {createBlogPost} from "./api";

// class NewForm extends Component {
//   handleSubmit(data) {
//     createBlogPost(data);
//     console.log("rdf"+ JSON.stringify(data));
// }

// render() {
//     return (
//         <div>
//             <Form onSubmit={this.handleSubmit}></Form>
//         </div>
//     );
// }
// }

// export default NewForm;
import React, { Component } from 'react';

class NewForm extends Component {

    // getInitialState() {
    //     return {
    //         body: this.props.body || '11111',
    //         title: this.props.title || '2222'
    //     }
    // } 
  //   constructor(props) {
  //   super(props);

  //   this.state = {
  //    first_name: "",
  //     last_name: "",
  //     gender:"",
  //     father_number:"",
  //     email1:""
  //   };
  // }
  
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
          gender: "Male",
          father_number: event.target.father_number.value,
          email1: event.target.email1.value     
        })
      })
      .then(res=> res.json())
      .then((result)=>
      {
          alert(JSON.stringify(result));
          console.log("abxcd" + JSON.stringify(result.message));
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
            <form name="createchild" className="" onSubmit={this.handleSubmit}>
                <div id="createchild">
                    <div className="">
                        <label htmlFor="first_name">first name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="first_name"
                                   required="required"
                                   className=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="last_name">last name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="last_name"
                                   required="required"
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
                                   onChange={this.handleTitleChange}
                                   className="form-control"/>
                        </div>
                    </div> <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="father_number">father number</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="father_number"
                                   required="required"
                                   onChange={this.handleTitleChange}
                                   className="form-control"/>
                        </div>
                    </div> <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="email1">email1</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="email1"
                                   required="required"
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

export default NewForm;
// select holiday hara bhara kababs mix beans salad tomato soup wit bread;