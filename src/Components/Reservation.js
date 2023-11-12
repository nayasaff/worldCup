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
            const response = await fetch(`https://shop-api-pied.vercel.app/api/masterlist/${number}`)
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
      !singleMatch ?
      <></> : <div>
            {/************image div**************/}
            <div className="reservation--container">
            <div style={{marginTop : '1rem'}}  className="left-column">
    <img src={require(`../Assets/${number}.JPG`)} alt="worldcupPic" width='450px' height='300px'/>
    
  </div>
 
 

  <div class="right-column">
      {/****************Match Details**************/}
  <h3>Match Details :</h3>
    <div class="product-description">
      
       <p>Title : {singleMatch.homeTeam} vs {singleMatch && singleMatch.awayTeam}</p>  
      <p>Date : {(singleMatch.dateUtc).substr(0, 10) }</p>
      <p>Timing : {(singleMatch.dateUtc).substr(11 , 14)}</p>
      <p>Group : {singleMatch.group}</p>
      <p>Loacation : {singleMatch.location}</p>
      <p>Round number: {singleMatch.roundNumber}</p> 
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
      <input type="text" style={{color : "black"}} value={quantity}/>
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