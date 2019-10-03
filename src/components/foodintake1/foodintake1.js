import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
// import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUsers, faLock, faTasks, faUser, faUtensils, faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Moment from 'moment';
// import fetch from "isomorphic-fetch";
library.add(faUsers, faLock, faTasks, faUser, faUtensils, faGlassWhiskey);





class Foodintake1 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit1 = this.handleSubmit1.bind(this);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            quantity: " ",
            users: []
        };
    }

    componentDidMount() {
        axios
            .get(`http://13.233.64.181:5000/api/getchild/aster`)
            .then(res => this.setState({ users: res.data.data }))
            .catch(err => console.log(err))
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    fullformdata = () => {
        console.log("username" + this.state.quantity);
    }


    handleSubmit1(event) {
        event.preventDefault();
        var data = [];
        var name = []
        this.state.users.forEach(element => {
             name.push(element.first_name);
        })
        var names = JSON.stringify(name);
        console.log("names"+ name[0]);
        // console.log("namessss"+ names[0]);
        // var quantity = event.target.quantity.value;
        // var users = [];    
        this.state.users.forEach(element => {
            for(var i= 0 ; i<name.length ; i++){
            data.push({ childId: element._id, quantity: event.target.Ram.value , foodtype: "breakfast", date: Moment(Date("YYYY-MM-DD")) / 1000, semester: "1", className: "aster" })
            }
        })
        var data1 = JSON.stringify({ data })
        console.log("data" + data1);
        console.log("food" + JSON.stringify(data));
        // var data11 = JSON.stringify({data});
        // console.log("dat" + data);
        var child0 = this.state.users[0];
        var child1 = this.state.users[1];
        // console.log("dat1" + JSON.stringify(data));
        console.log("child0" + JSON.stringify(child0));
        console.log("child1" + JSON.stringify(child1));



        fetch('http://13.233.64.181:5000/api/createfoodintake', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data1

        })

            .then(res => res.json())
            .then((result) => {
                alert(JSON.stringify(result.message));
                console.log("abxcd" + JSON.stringify(result.message));
            },
                (error) => {
                    alert('Request issue')
                    // this.setState({snackbaropen:true, snackbarmsg:'failed'});
                }
            )
    }
    render() {
        console.log("props"+ JSON.stringify(this.props))
        return (
            <div>
                <br />
                <h2 style={{ fontFamily: "arial, sans-serif", color: "black" }}><b>Food Intake for Students</b></h2>
                <br /><br />
                <ol class="breadcrumb">
                    <li>Home</li>
                    <li style={{ color: "#ffa901" }}>Food Intake</li>
                </ol>
                <br />
                <br />
                <div className="card">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Breakfast
        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Milk
        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Lunch
        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Snack1
        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '5' })}
                                onClick={() => { this.toggle('5'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Snack2
        </NavLink>
                        </NavItem><NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '6' })}
                                onClick={() => { this.toggle('6'); }} style={{ color: "black", fontFamily: "arial, sans-serif" }}
                            >
                                Milk
        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <form onSubmit={this.handleSubmit1}>
                                <table style={{ marginTop: "50px" }}>
                                    <thead>
                                        <tr>
                                            <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                            <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
                                        </tr>
                                    </thead>
                                    {this.state.users.map(user => {
                                        console.log("userssss"+ JSON.stringify(this.state.users[0].first_name));
                                        return <tbody><tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}>
                                                <input type="radio" id={user.first_name} name= "quantity" value="quarter" style={{ marginLeft: "50px" }} />&nbsp;quarter
<input type="radio" id= {user.first_name} name= "quantiy" value="half" style={{ marginLeft: "50px" }} /> &nbsp;half
<input type="radio" id= {user.first_name} name= "quantity" value="full" style={{ marginLeft: "50px" }} /> &nbsp;full
              </td>
                                        </tr></tbody>
                                    })}
                                </table>

                                <button type="submit" className="btn btn-primary button-style">Submit</button>
                            </form>
                        </TabPane>
                        <TabPane tabId="2">
                        <form onSubmit={this.handleSubmit1}>
                                <table style={{ marginTop: "50px" }}>
                                    <thead>
                                        <tr>
                                            <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                            <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
                                        </tr>
                                    </thead>
                                    {this.state.users.map(user => {
                                        return <tbody><tr>
                                            <td><img class="profile" src={user.Image} alt="rsz_maleimage" /> &nbsp;{user.first_name}&nbsp;{user.middle_name}&nbsp;{user.last_name}</td>
                                            <td style={{ textAlign: "center" }}>
                                                <input type="radio" id="quantity" name="quantity" value="quarter" style={{ marginLeft: "50px" }} />&nbsp;quarter
<input type="radio" id="quanity" name="quantity" value="half" style={{ marginLeft: "50px" }} /> &nbsp;half
<input type="radio" id="quantity" name="quantity" value="full" style={{ marginLeft: "50px" }} /> &nbsp;full
              </td>
                                        </tr></tbody>
                                    })}
                                </table>

                                <button type="submit" className="btn btn-primary button-style">Submit</button>
                            </form>
                        </TabPane>
                        <TabPane tabId="3">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                            </table>
                        </TabPane>
                        <TabPane tabId="4">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                            </table>
                        </TabPane>
                        <TabPane tabId="5">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                            </table>
                        </TabPane>
                        <TabPane tabId="6">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                            </table>
                        </TabPane>
                        <TabPane tabId="7">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                            </table>
                        </TabPane>
                        <TabPane tabId="8">
                            <table style={{ marginTop: "50px" }}>
                                <tr>
                                    <th><FontAwesomeIcon icon={faUsers} size="lg" />&nbsp; &nbsp;Students List</th>
                                    <th><FontAwesomeIcon icon={faGlassWhiskey} size="lg" />&nbsp; &nbsp;Waterintake</th>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Alfreds Futterkiste</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" /> Centro comercial Moctezuma</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Island Trading</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="rsz_maleimg.png" alt="rsz_maleimage" /> &nbsp;Laughing Bacchus Winecellars</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img class="profile" src="Femaleimg.png" alt="femaleimg" />&nbsp;Magazzini Alimentari Riuniti</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div className="slidecontainer">
                                            {/* <input id="typeinp" type="range" min="0" max="250" className="slider" step="1" defaultValue="0" onInput={this.onInput.bind(this)}/>
<p>{this.state.value} ml</p> */}
                                            <input type="range" name="weight" class="slider" min="0" max="100" value="75" />
                                            <span class="slider_label">{this.state.value}</span> ml
</div>
                                    </td>
                                </tr>
                            </table>
                        </TabPane>
                        <br />
                        {/* <button type="button" className="btn btn-primary button-style" data-toggle="modal" data-target="#exampleModalCenter">Submit</button> */}
                    </TabContent>
                </div>
            </div>
        )
    }
}

export default Foodintake1;

