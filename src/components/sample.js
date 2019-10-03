import React,{Component} from 'react'
import '/Users/apple/Documents/laptop/src/Components/LaptopListComponent/LaptopCss.css';
 import {Button} from 'reactstrap'
 import axios from 'axios'

// const Laptops=props=>(<header>
//  <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Cras justo odio</ListGroupItem>
//     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//     <ListGroupItem>Vestibulum at eros</ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>
  
// </header>);

class Laptops extends Component{
    constructor(props){
        super(props);
        this.state={
           users:[]
        }
    }
    componentDidMount() {
        axios
          .get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => this.setState({ users: res.data }))
          .catch(err => console.log(err))
      }

    render(){
        



      return(
          <div className=" ">
        
         {this.state.users.map(user=>{
             console.log(user)
             return<div className=" cards ">
             <div className="">
             <img  className="imggggg " src="Superb_HD_Laptop_Background_Wallpaper.jpg" alt="img"></img>
             <p className="laptopTitle">{user.name}</p>
             <p className="laptopDescription ">{user.address.street}</p>
            
            <button type = "submit"class="btn btn-link bttttt"><a href="/#">ViewMore</a></button>
            
             {/* <div className="button">
            
             </div> */}
                 </div>
                
                
             </div>
            
             
         })}


       

             <button className="button">  View More </button>
        
              
          </div>
         
        
//           <div className="laptop">
//           <div className="  row">
//           <div className="col-sm-1"></div>
//               <div className="col-sm-2" >
//         <img src="/Users/apple/Documents/laptop/src/Components/LaptopListComponent/Superb_HD_Laptop_Background_Wallpaper.jpg" alt="Avatar"></img>
//         <div className="">
//     <h4><b></b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>
//        <div className="col-sm-2">
//         <img src="img_avatar.png" alt="Avatar"></img>
//         <div className="">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>

//        <div className="col-sm-2">
//         <img src="img_avatar.png" alt="Avatar"></img>
//         <div className="">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>

//        <div className="col-sm-2">
//         <img src="img_avatar.png" alt="Avatar"></img>
//         <div className="">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>

//        <div className="col-sm-2">
//         <img src="img_avatar.png" alt="Avatar"></img>
//         <div className="">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>


//           </div>
//           <div className=" laptop row">
//           <div className="col-sm-1"></div>
//               <div className="col-sm-2">
//         <img src="img_avatar.png" alt="Avatar"></img>
//         <div className="">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>
//        <div className="col-sm-2">
//         <img src="img_avatar.png" alt="Avatar"></img>
//         <div className="">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>

//        <div className="col-sm-2">
//         <img src="img_avatar.png" alt="Avatar"></img>
//         <div className="">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>

//        <div className="col-sm-2">
//         <img src="img_avatar.png" alt="Avatar"></img>
//         <div className="">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>

//        <div className="col-sm-2">
//         <img src="img_avatar.png" alt="Avatar"></img>
//         <div className="">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>

//        </div>



//           </div>
//           </div>
       
      );
    };
  }
export default Laptops;