// import React from "react";
// import { useLocation} from "react-router-dom";
// import Nav from "./Nav";
// import '../Styles/Reservation.css'
// import { Link } from "react-router-dom";

// function useQuery() {
//     const { search } = useLocation();
  
//     return React.useMemo(() => new URLSearchParams(search), [search]);
//   }
  

// export default function Reservation(){
//   /***************************************React states**************************************************** */
//     const [singleMatch, setSingleMatch] = React.useState();
//     const [category, setCetgory] = React.useState(1);
//     const [price , setPrice] = React.useState(75);
//     const [quantity, setQuantity] = React.useState(1)

//     let query = useQuery();
//     let number = query.get("number")
//     React.useEffect(()=>{
//             async function fetchData(){
//             const response = await fetch(`https://shop-api-2-de325v29m-nayasaff.vercel.app/api/masterlist/${number}`)
//             const data = await response.json()
//             setSingleMatch(data)
//         }

//         fetchData() ;
//     }, [number])
    
 
//     function handleChange(event){
//       if(event.target.value === 'two')
//       setCetgory(oldcat => 2)
//       else if(event.target.value === 'three')
//       setCetgory(oldcat => 3)
//       else
//       setCetgory(oldcat => 1)
      
//     }

//     function convertToNum(value){
//       if(value === 'one')
//         return 'category1';
//       if(value === 'two')
//         return 'category2';
//       else
//       return 'category3';
//     }
    
//     async function toggleButton(){
//       if(category === 'three')
//         await setPrice(oldVal => 190)
//       else if(category === 'two')
//         await setPrice(oldVal => 125)

//     }
    
//     return(
//         <div>
//             <Nav/>
//             {/*************************************image div*****************************************/}
//             <div className="reservation--container">
//             <div class="left-column">
//     <img src={require(`../Img/${number}.JPG`)} alt="worldcupPic" width='450px' height='300px'/>
    
//   </div>
 
 

//   <div class="right-column">
//       {/*********************************************Match Details***************************************/}
//   <h3>Match Details :</h3>
//     <div class="product-description">
      
//       <p>Title : {singleMatch && singleMatch.homeTeam} vs {singleMatch && singleMatch.awayTeam}</p> 
//       <p>Date : {singleMatch && (singleMatch.dateUtc).substr(0, 10) }</p>
//       <p>Timing : {singleMatch && (singleMatch.dateUtc).substr(11 , 14)}</p>
//       <p>Group : {singleMatch && singleMatch.group}</p>
//       <p>Loacation : {singleMatch && singleMatch.location}</p>
//       <p>Round number: {singleMatch && singleMatch.roundNumber}</p> 
//     </div>
 
  
//     <div class="product-configuration">
 
   
//       <div class="product-color">
//         <span>Category</span>
 
//         <div class="color-choose">
//         <select id="Product" name="category" value={category} onChange={event=>handleChange(event)}>
//           <option value="one"><i class="fa-solid fa-shirt"></i>One</option>
//           <option value="two">Two</option>
//           <option value="three">Three</option>
//         </select>  
 
    
//         </div>
 
//       </div>
//       <div class="product-color">
//         <span>Quantity</span>
 
//         <div class="color-choose">
//         <div class="counter">
//       <span class="down" onClick={()=> setQuantity(prev => 1)}>-</span>
//       <input type="text" value={quantity}/>
//       <span class="up"  onClick={()=> setQuantity(prev => 2)}>+</span>
//     </div>  
 
    
//         </div>
 
//       </div>
 
    
  
//     </div>
 
    
//     <div class="product-price">
//       <span>{category === 'three' ? '190' : (category ==='two' ? '125' : '75' )}$</span>
//       {(singleMatch &&((singleMatch.availability[convertToNum(category)].available - quantity > -1 )) )
//        ?
//       <Link to='/payment' state={{
//         matchNumber : singleMatch && singleMatch.matchNumber,
//         price : price,
//         quantity : quantity,
//         category : category
//       }} 
//        class="cart-btn" onClick={()=>toggleButton}>
//         Book Now</Link> : <div className="cart-btn">Book Now</div> }
//        <p>{singleMatch &&((quantity >= 1 && singleMatch.availability[convertToNum(category)].available === 0)) && "Tickets out of stocks" }  </p>
//        <p>{singleMatch &&singleMatch.availability[convertToNum(category)].available === 1 && "Only one ticket left"}</p>
//     </div>
//   </div>              
//             </div>
//         </div>
//     )
// }

import React from "react";
import { useLocation} from "react-router-dom";
import Nav from "./Nav";
import '../Styles/Reservation.css'
import { Link } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  

export default function Reservation(){
  /**************React states***************** */
    const [singleMatch, setSingleMatch] = React.useState();
    const [category, setCetgory] = React.useState(0);
    const [price , setPrice] = React.useState(75);
    const [quantity, setQuantity] = React.useState(1)

    let query = useQuery();
    let number = query.get("number")
    React.useEffect(()=>{
            async function fetchData(){
            const response = await fetch(`https://shop-api-2-de325v29m-nayasaff.vercel.app/api/masterlist/${number}`)
            const data = await response.json()
            setSingleMatch(data)
        }

        fetchData() ;
    }, [number])
    
 
    function handleChange(event){
      setCetgory(oldcat => event.target.value)
      
    }
    
    async function toggleButton(){
      if(category === 'three')
        await setPrice(oldVal => 190)
      else if(category === 'two')
        await setPrice(oldVal => 125)

    }
    return(
        <div>
            <Nav/>
            {/************image div**************/}
            <div className="reservation--container">
            <div class="left-column">
    <img src={require(`../Img/${number}.JPG`)} alt="worldcupPic" width='450px' height='300px'/>
    
  </div>
 
 

  <div class="right-column">
      {/****************Match Details**************/}
  <h3>Match Details :</h3>
    <div class="product-description">
      
       <p>Title : {singleMatch && singleMatch.homeTeam} vs {singleMatch && singleMatch.awayTeam}</p>  
      <p>Date : {singleMatch && (singleMatch.dateUtc).substr(0, 10) }</p>
      <p>Timing : {singleMatch && (singleMatch.dateUtc).substr(11 , 14)}</p>
      <p>Group : {singleMatch && singleMatch.group}</p>
      <p>Loacation : {singleMatch && singleMatch.location}</p>
      <p>Round number: {singleMatch && singleMatch.roundNumber}</p> 
    </div>
 
  
    <div class="product-configuration">
 
   
      <div class="product-color">
        <span>Category</span>
 
        <div class="color-choose">
        <select id="Product" name="category" value={category} onChange={event=>handleChange(event)}>
          <option value="one"><i class="fa-solid fa-shirt"></i>One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>  
 
    
        </div>
 
      </div>
      <div class="product-color">
        <span>Quantity</span>
 
        <div class="color-choose">
        <div class="counter">
      <span class="down" onClick={()=> setQuantity(prev => 1)}>-</span>
      <input type="text" value={quantity}/>
      <span class="up"  onClick={()=> setQuantity(prev => 2)}>+</span>
    </div>  
 
    
        </div>
 
      </div>
 
    
  
    </div>
 
    
    <div class="product-price">
      <span>{category === 'three' ? '190' : (category ==='two' ? '125' : '75' )}$</span>
      <Link to='/payment' state={{
        matchNumber : singleMatch && singleMatch.matchNumber,
        price : price,
        quantity : quantity,
        category : category
      }} 
       class="cart-btn" onClick={()=>toggleButton}>Book Now</Link>
    </div>
  </div>              
            </div>
        </div>
    )
}