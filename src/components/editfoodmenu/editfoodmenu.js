import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUsers, faLock, faTasks, faUser, faGlassWhiskey, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


library.add(faUsers, faLock, faTasks, faUser, faGlassWhiskey, faUtensils);

// const options = [
//   'Holiday','Poha','Pancake','Daliya','Dal Dosa','Upma','Mini Idli,Chutney','Bread Jam','Rava Upma','Pongal','Oats Upma','Sabudana Kichadi','French Toast','Oats Idly','Aloo Paratha','Millets Upma'
// ]
// const options1 = [
//   'Rice,sambar,greens and kesari bath',
// ]
// const options2 = [
//   'seven', 'eight', 'nine'
// ]
// const options3 = [
//   'ten', 'eleven', 'twelve'
// ]


// const defaultOption = options[0]
// const defaultOption1 = options1[0]
// const defaultOption2 = options2[0]
// const defaultOption3 = options3[0]



class Editfoodmenu extends Component {

  constructor() {
    super();
    this.state =""
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    var menu_data = [{
    // this.state.users.forEach(element => {
    //   for(var i= 0 ; i<name.length ; i++){
      // menu_data.push({breakfast: event.target.breakfast.value,
      //   lunch: event.target.lunch.value,
      //   snack1: event.target.snack1.value,
      //   snack2: event.target.snack2.value,
      //   day: event.target.day.value})
      // }
    // })
      breakfast: event.target.breakfast1.value,
        lunch: event.target.lunch1.value,
        snack1: event.target.snack11.value,
        snack2: event.target.snack21.value,
        day: event.target.day1.value
      },
      {
        breakfast: event.target.breakfast2.value,
        lunch: event.target.lunch2.value,
        snack1: event.target.snack12.value,
        snack2: event.target.snack22.value,
        day: event.target.day2.value
      },
      {
        breakfast: event.target.breakfast3.value,
        lunch: event.target.lunch3.value,
        snack1: event.target.snack13.value,
        snack2: event.target.snack23.value,
        day: event.target.day3.value
      },
      {
        breakfast: event.target.breakfast4.value,
        lunch: event.target.lunch4.value,
        snack1: event.target.snack14.value,
        snack2: event.target.snack24.value,
        day: event.target.day4.value
      },
      {
        breakfast: event.target.breakfast5.value,
        lunch: event.target.lunch5.value,
        snack1: event.target.snack15.value,
        snack2: event.target.snack25.value,
        day: event.target.day5.value

    }]

    var menu_data1 = JSON.stringify({menu_data});
    console.log(menu_data);
    console.log(menu_data1);

    fetch('http://13.233.64.181:5000/api/createmenu', {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },

      body : menu_data1
      
    })
    .then(res=> res.json())
      .then((result)=>
      {
          alert(JSON.stringify(result));
          console.log("abxcd" + JSON.stringify(result.message));
          // this.setState({snackbaropen:true, snackbarmsg:result});
      },
      (error)=>{
        alert('Failed')
        // this.setState({snackbaropen:true, snackbarmsg:'failed'});
      }
      )
  }
  render() {
    return (
      <div>
      <br/>
    <h2 style = {{fontFamily:"arial, sans-serif", color: "black",}}><FontAwesomeIcon icon={faUtensils} size="lg" />&nbsp; &nbsp;<b>Food Menu</b></h2>
    <br/>
    <ol class="breadcrumb">
<li><a href = "/Aster">Home</a></li>
<li style = {{color:"#ffa901"}}>Food Menu</li>
</ol>
  
    <br />
    <form onSubmit = {this.handleSubmit} >
    <div className="card1" >
      <div className="container">
      <div className = "card-body1" style={{backgroundColor:"#1F89E5"}}>

      
      {/* <th style={{ textAlignLast: "center" }}><h1><select name="day" id = "day">
                        <option id= "day" name = "day" value="monday">Monday</option>
                        <option id = "day" name = "day" value="tuesday">Tuesday</option>
                        <option id = "day" name = "day" value="wednesday">Wednesday</option>
                        <option id = "day" name = "day" value="thursday">Thursday</option>
                        <option id = "day" name = "day" value="friday">Friday</option>
                      <h1></select></th> */}
      
          {/*  <tr>
            <th style={{ textAlignLast: "center" }}><h1>Monday</h1></thd> */}
           <table> 
           <h1 style={{ textAlignLast: "center",marginLeft:"400px" }}><select name="day1" id = "day1">
                        <option id= "day1" name = "day1" value="monday">Monday</option>
                        <option id = "day1" name = "day1" value="tuesday">Tuesday</option>
                        <option id = "day1" name = "day1" value="wednesday">Wednesday</option>
                        <option id = "day1" name = "day1" value="thursday">Thursday</option>
                        <option id = "day1" name = "day1" value="friday">Friday</option>
                      </select></h1>
                      <br/>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "breakfast1">Breakfast</label></td>
            <td style={{ textAlignLast: "center" }}><select name="breakfast1" id = "breakfast1">
                        <option id= "breakfast1" name = "breakfast1" value="Poha">Poha</option>
                        <option id = "breakfast1" name = "breakfast1" value="pancake">pancake</option>
                        <option id = "breakfast1" name = "breakfast1" value="Dal Dosa">Dal Dosa</option>
                        <option id = "breakfast1" name = "breakfast1" value="Bread Jam">Bread Jam</option>
                        <option id = "breakfast1" name = "breakfast1" value="Oats Upma">Oats Upma</option>
                      </select>
</td>
          </tr>
          <tr style={{backgroundColor:"#1F89E5"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "lunch1">Lunch</label></td>
            <td style={{ textAlignLast: "center" }}><select name="lunch1" id = "lunch1">
                        <option id= "lunch1" name = "lunch1" value="Rice, Sambar, Greens and Kesari Bath">Rice, Sambar, Greens and Kesari Bath</option>
                        <option id = "lunch1" name = "lunch1" value="Veg.Kichadi, Curd, Jamun">Veg.Kichadi, Curd, Jamun</option>
                        <option id = "lunch1" name = "lunch1" value="Mushroom Biryani, Raita, Rava Laddu">Mushroom Biryani, Raita, Rava Laddu</option>
                        <option id = "lunch1" name = "lunch" value="Roti, Shahi Paneer, Curd and Fruit Custard">Roti, Shahi Paneer, Curd and Fruit Custard</option>
                        <option id = "lunch1" name = "lunch1" value="Soya Biryani, Raita, Sooji Halwa">Soya Biryani, Raita, Sooji Halwa</option>
                      </select></td>
          </tr>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack11">snack 1</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack11" id = "snack11">
                        <option id= "snack11" name = "snack11" value="Hara Bhara Kababs">Hara Bhara Kababs</option>
                        <option id = "snack11" name = "snack11" value="Vegetable Sandwich">Vegetable Sandwich</option>
                        <option id = "snack11" name = "snack11" value="Mini Samosa">Mini Samosa</option>
                        <option id = "snack11" name = "snack11" value="Oats Cutlet">Oats Cutlet</option>
                        <option id = "snack11" name = "snack11" value="Medu Vada">Medu Vada</option>
                      </select></td>
          </tr>
          <tr style={{backgroundColor:"#1F89E5"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack21">snack 2</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack21" id = "snack21">
                        <option id= "snack21" name = "snack21" value="Fruit Salad">Fruit Salad</option>
                        <option id = "snack21" name = "snack21" value="Chocolate Cookies">Chocolate Cookies</option>
                        <option id = "snack21" name = "snack21" value="Pizza">Pizza</option>
                        <option id = "snack21" name = "snack21" value="Paneer Roll">Paneer Roll</option>
                        <option id = "snack21" name = "snack21" value="Veg Clear Soup With Bread">Veg Clear Soup With Bread</option>
                      </select></td>
          </tr>
          </table>
          <br/>
          
      </div>
      </div>
      </div> 
       <br /> 
     <div className="card1" >
      <div className="container">
      <div className = "card-body1" style={{backgroundColor:"#EAFF3C"}}> 
      {/* <div>
      <h1 style={{ textAlignLast: "center" }}>Tuesday</h1>
      <br/> */}
      <table>
      <h1 style={{ textAlignLast: "center",marginLeft:"400px" }}><select name="day2" id = "day2">
                        <option id= "day2" name = "day2" value="monday">Monday</option>
                        <option id = "day2" name = "day2" value="tuesday">Tuesday</option>
                        <option id = "day2" name = "day2" value="wednesday">Wednesday</option>
                        <option id = "day2" name = "day2" value="thursday">Thursday</option>
                        <option id = "day2" name = "day2" value="friday">Friday</option>
                      </select></h1>
                      <br/>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "breakfast2">Breakfast</label></td>
            <td style={{ textAlignLast: "center" }}><select name="breakfast2" id = "breakfast2">
                        <option id= "breakfast2" name = "breakfast2" value="Poha">Poha</option>
                        <option id = "breakfast2" name = "breakfast2" value="pancake">pancake</option>
                        <option id = "breakfast2" name = "breakfast2" value="Dal Dosa">Dal Dosa</option>
                        <option id = "breakfast2" name = "breakfast2" value="Bread Jam">Bread Jam</option>
                        <option id = "breakfast2" name = "breakfast2" value="Oats Upma">Oats Upma</option>
                      </select></td>
          </tr>
          <tr style={{backgroundColor:"#EAFF3C"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "lunch2">Lunch</label></td>
            <td style={{ textAlignLast: "center" }}><select name="lunch2" id = "lunch">
                        <option id= "lunch2" name = "lunch2" value="Rice, Sambar, Greens and Kesari Bath">Rice, Sambar, Greens and Kesari Bath</option>
                        <option id = "lunch2" name = "lunch2" value="Veg.Kichadi, Curd, Jamun">Veg.Kichadi, Curd, Jamun</option>
                        <option id = "lunch2" name = "lunch2" value="Mushroom Biryani, Raita, Rava Laddu">Mushroom Biryani, Raita, Rava Laddu</option>
                        <option id = "lunch2" name = "lunch2" value="Roti, Shahi Paneer, Curd and Fruit Custard">Roti, Shahi Paneer, Curd and Fruit Custard</option>
                        <option id = "lunch2" name = "lunch2" value="Soya Biryani, Raita, Sooji Halwa">Soya Biryani, Raita, Sooji Halwa</option>
                      </select></td>
          </tr>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack12">snack 1</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack12" id = "snack12">
                        <option id= "snack12" name = "snack12" value="Hara Bhara Kababs">Hara Bhara Kababs</option>
                        <option id = "snack12" name = "snack12" value="Vegetable Sandwich">Vegetable Sandwich</option>
                        <option id = "snack12" name = "snack12" value="Mini Samosa">Mini Samosa</option>
                        <option id = "snack12" name = "snack12" value="Oats Cutlet">Oats Cutlet</option>
                        <option id = "snack12" name = "snack12" value="Medu Vada">Medu Vada</option>
                      </select></td>
          </tr>
          <tr style={{backgroundColor:"#EAFF3C"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack22">snack 2</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack22" id = "snack22">
                        <option id= "snack22" name = "snack22" value="Fruit Salad">Fruit Salad</option>
                        <option id = "snack22" name = "snack22" value="Chocolate Cookies">Chocolate Cookies</option>
                        <option id = "snack22" name = "snack22" value="Pizza">Pizza</option>
                        <option id = "snack22" name = "snack22" value="Paneer Roll">Paneer Roll</option>
                        <option id = "snack22" name = "snack22" value="Veg Clear Soup With Bread">Veg Clear Soup With Bread</option>
                      </select></td>
          </tr>
          </table>
      </div>
      </div>
      </div> 
      <br />
    <div className="card1" >
      <div className="container">
      <div className = "card-body1" style={{backgroundColor:"#00FFE1"}}>
     {/* <div> <h1 style={{ textAlignLast: "center" }}>Wednesday</h1>
      <br/> */}
      <table> 
      <h1 style={{ textAlignLast: "center",marginLeft:"400px" }}><select name="day3" id = "day3">
                        <option id= "day3" name = "day3" value="monday">Monday</option>
                        <option id = "day3" name = "day3" value="tuesday">Tuesday</option>
                        <option id = "day3" name = "day3" value="wednesday">Wednesday</option>
                        <option id = "day3" name = "day3" value="thursday">Thursday</option>
                        <option id = "day3" name = "day3" value="friday">Friday</option>
                      </select></h1>
                      <br/>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "breakfast3">Breakfast</label></td>
            <td style={{ textAlignLast: "center" }}><select name="breakfast3" id = "breakfast3">
                        <option id= "breakfast3" name = "breakfast3" value="Poha">Poha</option>
                        <option id = "breakfast3" name = "breakfast3" value="pancake">pancake</option>
                        <option id = "breakfast3" name = "breakfast3" value="Dal Dosa">Dal Dosa</option>
                        <option id = "breakfast3" name = "breakfast3" value="Bread Jam">Bread Jam</option>
                        <option id = "breakfast3" name = "breakfast3" value="Oats Upma">Oats Upma</option>
                      </select></td>
          </tr>
          <tr style={{backgroundColor:"#00FFE1"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "lunch3">Lunch</label></td>
            <td style={{ textAlignLast: "center" }}><select name="lunch3" id = "lunch3">
                        <option id= "lunch3" name = "lunch3" value="Rice, Sambar, Greens and Kesari Bath">Rice, Sambar, Greens and Kesari Bath</option>
                        <option id = "lunch3" name = "lunch3" value="Veg.Kichadi, Curd, Jamun">Veg.Kichadi, Curd, Jamun</option>
                        <option id = "lunch3" name = "lunch3" value="Mushroom Biryani, Raita, Rava Laddu">Mushroom Biryani, Raita, Rava Laddu</option>
                        <option id = "lunch3" name = "lunch3" value="Roti, Shahi Paneer, Curd and Fruit Custard">Roti, Shahi Paneer, Curd and Fruit Custard</option>
                        <option id = "lunch3" name = "lunch3" value="Soya Biryani, Raita, Sooji Halwa">Soya Biryani, Raita, Sooji Halwa</option>
                      </select></td>
          </tr>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack13">snack 1</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack13" id = "snack13">
                        <option id= "snack13" name = "snack13" value="Hara Bhara Kababs">Hara Bhara Kababs</option>
                        <option id = "snack13" name = "snack13" value="Vegetable Sandwich">Vegetable Sandwich</option>
                        <option id = "snack13" name = "snack13" value="Mini Samosa">Mini Samosa</option>
                        <option id = "snack13" name = "snack13" value="Oats Cutlet">Oats Cutlet</option>
                        <option id = "snack13" name = "snack13" value="Medu Vada">Medu Vada</option>
                      </select></td>
          </tr>
          <tr style={{backgroundColor:"#00FFE1"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack23">snack 2</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack23" id = "snack23">
                        <option id= "snack23" name = "snack23" value="Fruit Salad">Fruit Salad</option>
                        <option id = "snack23" name = "snack23" value="Chocolate Cookies">Chocolate Cookies</option>
                        <option id = "snack23" name = "snack23" value="Pizza">Pizza</option>
                        <option id = "snack23" name = "snack23" value="Paneer Roll">Paneer Roll</option>
                        <option id = "snack23" name = "snack23" value="Veg Clear Soup With Bread">Veg Clear Soup With Bread</option>
                      </select></td>
          </tr> 
          </table>
      </div>
      </div>
      </div> 
      <br />
    <div className="card1" >
      <div className="container">
      <div className = "card-body1" style={{backgroundColor:"#FF8054"}}>
      {/* <div> <h1 style={{ textAlignLast: "center" }}>Thursday</h1>
      <br/> */}
      <table> 
      <h1 style={{ textAlignLast: "center",marginLeft:"400px" }}><select name="day4" id = "day4">
                        <option id= "day4" name = "day4" value="monday">Monday</option>
                        <option id = "day4" name = "day4" value="tuesday">Tuesday</option>
                        <option id = "day4" name = "day4" value="wednesday">Wednesday</option>
                        <option id = "day4" name = "day4" value="thursday">Thursday</option>
                        <option id = "day4" name = "day4" value="friday">Friday</option>
                      </select></h1>
                      <br/>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "breakfast4">Breakfast</label></td>
            <td style={{ textAlignLast: "center" }}><select name="breakfast4" id = "breakfast4">
                        <option id= "breakfast4" name = "breakfast4" value="Poha">Poha</option>
                        <option id = "breakfast4" name = "breakfast4" value="pancake">pancake</option>
                        <option id = "breakfast4" name = "breakfast4" value="Dal Dosa">Dal Dosa</option>
                        <option id = "breakfast4" name = "breakfast4" value="Bread Jam">Bread Jam</option>
                        <option id = "breakfast4" name = "breakfast4" value="Oats Upma">Oats Upma</option>
                      </select></td>
          </tr>
          <tr style={{backgroundColor:"#FF8054"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "lunch4">Lunch</label></td>
            <td style={{ textAlignLast: "center" }}><select name="lunch4" id = "lunch4">
                        <option id= "lunch4" name = "lunch4" value="Rice, Sambar, Greens and Kesari Bath">Rice, Sambar, Greens and Kesari Bath</option>
                        <option id = "lunch4" name = "lunch4" value="Veg.Kichadi, Curd, Jamun">Veg.Kichadi, Curd, Jamun</option>
                        <option id = "lunch4" name = "lunch4" value="Mushroom Biryani, Raita, Rava Laddu">Mushroom Biryani, Raita, Rava Laddu</option>
                        <option id = "lunch4" name = "lunch4" value="Roti, Shahi Paneer, Curd and Fruit Custard">Roti, Shahi Paneer, Curd and Fruit Custard</option>
                        <option id = "lunch4" name = "lunch4" value="Soya Biryani, Raita, Sooji Halwa">Soya Biryani, Raita, Sooji Halwa</option>
                      </select></td>
          </tr>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack14">snack 1</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack14" id = "snack14">
                        <option id= "snack14" name = "snack14" value="Hara Bhara Kababs">Hara Bhara Kababs</option>
                        <option id = "snack14" name = "snack14" value="Vegetable Sandwich">Vegetable Sandwich</option>
                        <option id = "snack14" name = "snack14" value="Mini Samosa">Mini Samosa</option>
                        <option id = "snack14" name = "snack14" value="Oats Cutlet">Oats Cutlet</option>
                        <option id = "snack14" name = "snack14" value="Medu Vada">Medu Vada</option>
                      </select></td>
          </tr>
          <tr style={{backgroundColor:"#FF8054"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack24">snack 2</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack24" id = "snack24">
                        <option id= "snack24" name = "snack24" value="Fruit Salad">Fruit Salad</option>
                        <option id = "snack24" name = "snack24" value="Chocolate Cookies">Chocolate Cookies</option>
                        <option id = "snack24" name = "snack24" value="Pizza">Pizza</option>
                        <option id = "snack24" name = "snack24" value="Paneer Roll">Paneer Roll</option>
                        <option id = "snack24" name = "snack24" value="Veg Clear Soup With Bread">Veg Clear Soup With Bread</option>
                      </select></td>
          </tr>
           </table> 
      </div>
       </div>
      </div> 
      <br />
    <div className="card1" >
      <div className="container">
      <div className = "card-body1" style={{backgroundColor:"#ffff57"}}>
      {/* <div> <h1 style={{ textAlignLast: "center" }}>Friday</h1>
      <br/> */}
      <table>
      <h1 style={{ textAlignLast: "center",marginLeft:"400px" }}><select name="day5" id = "day5">
                        <option id= "day5" name = "day5" value="monday">Monday</option>
                        <option id = "day5" name = "day5" value="tuesday">Tuesday</option>
                        <option id = "day5" name = "day5" value="wednesday">Wednesday</option>
                        <option id = "day5" name = "day5" value="thursday">Thursday</option>
                        <option id = "day5" name = "day5" value="friday">Friday</option>
                      </select></h1>
                      <br/>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "breakfast5">Breakfast</label></td>
            <td style={{ textAlignLast: "center" }}><select name="breakfast5" id = "breakfast5">
                        <option id= "breakfast5" name = "breakfast5" value="Poha">Poha</option>
                        <option id = "breakfast5" name = "breakfast5" value="pancake">pancake</option>
                        <option id = "breakfast5" name = "breakfast5" value="Dal Dosa">Dal Dosa</option>
                        <option id = "breakfast5" name = "breakfast5" value="Bread Jam">Bread Jam</option>
                        <option id = "breakfast5" name = "breakfast5" value="Oats Upma">Oats Upma</option>
                      </select></td>
          </tr>
          <tr style={{backgroundColor:"#ffff57"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "lunch5">Lunch</label></td>
            <td style={{ textAlignLast: "center" }}><select name="lunch5" id = "lunch5">
                        <option id= "lunch5" name = "lunch5" value="Rice, Sambar, Greens and Kesari Bath">Rice, Sambar, Greens and Kesari Bath</option>
                        <option id = "lunch5" name = "lunch5" value="Veg.Kichadi, Curd, Jamun">Veg.Kichadi, Curd, Jamun</option>
                        <option id = "lunch5" name = "lunch5" value="Mushroom Biryani, Raita, Rava Laddu">Mushroom Biryani, Raita, Rava Laddu</option>
                        <option id = "lunch5" name = "lunch5" value="Roti, Shahi Paneer, Curd and Fruit Custard">Roti, Shahi Paneer, Curd and Fruit Custard</option>
                        <option id = "lunch5" name = "lunch5" value="Soya Biryani, Raita, Sooji Halwa">Soya Biryani, Raita, Sooji Halwa</option>
                      </select></td>
          </tr>
          <tr>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack15">snack 1</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack15" id = "snack15">
                        <option id= "snack15" name = "snack15" value="Hara Bhara Kababs">Hara Bhara Kababs</option>
                        <option id = "snack15" name = "snack15" value="Vegetable Sandwich">Vegetable Sandwich</option>
                        <option id = "snack15" name = "snack15" value="Mini Samosa">Mini Samosa</option>
                        <option id = "snack15" name = "snack15" value="Oats Cutlet">Oats Cutlet</option>
                        <option id = "snack15" name = "snack15" value="Medu Vada">Medu Vada</option>
                      </select></td>
          </tr>
          <tr style={{backgroundColor:"#ffff57"}}>
            <td style={{ textAlignLast: "center" }}><label htmlFor = "snack25">snack 2</label></td>
            <td style={{ textAlignLast: "center" }}><select name="snack25" id = "snack25">
                        <option id= "snack25" name = "snack25" value="Fruit Salad">Fruit Salad</option>
                        <option id = "snack25" name = "snack25" value="Chocolate Cookies">Chocolate Cookies</option>
                        <option id = "snack25" name = "snack25" value="Pizza">Pizza</option>
                        <option id = "snack25" name = "snack25" value="Paneer Roll">Paneer Roll</option>
                        <option id = "snack25" name = "snack25" value="Veg Clear Soup With Bread">Veg Clear Soup With Bread</option>
                      </select></td>
          </tr>
          <br/>
          
          </table>
          </div>
          </div>
          </div>
          <br/>
          
    
          <button type ="submit" class = "btn btn-primary" style = {{fontSize: "1.3em", textAlignLast:"middle", marginLeft:"600px"}}>Submit</button>
          </form>

      </div>

      
    
    

    )
  }
}

export default Editfoodmenu;
