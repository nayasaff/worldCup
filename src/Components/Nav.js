import React from "react";
import '../index.css'
import { Link } from "react-router-dom";
import '../Styles/Nav.css'




export default function Nav(props){

  const [searchName, setSearchName] = React.useState("");

  function handleChange(event){
    setSearchName(prev => event.target.value)
  }

  function searchMatch(event, searchFunction){
    if(event.keyCode === 13)
      searchFunction(searchName);
  }
    return(
        <div className ='container'>
        <div className=''>
          <div className=''>
          <img src={require("../Assets/World-Cup-logo-landscape-on-dark.webp")} width="120" height="50" alt='fifa word cup'/>
  
  
          </div>
        </div>
  
          <div className='pages'>
            <Link to="/" className={window.location.href === '/' ? 'pages' : ''}> 
              <a href="/#">Home</a>
              </Link>
              
            
            <Link to="/analytics" className={window.location.href === '/analytics' ? 'pages' : ''} >
              <a href="/#">Analytics</a> 
               </Link>
        
              </div>
              <div class="search-container">
          {/* <input type="text" placeholder="Search.. " name="search" value={searchName} onChange={e=> handleChange(e)}
          onKeyPress={e=> searchMatch(e, props.search)} /> */}
        
        </div>
      </div>
    )
}