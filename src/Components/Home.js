import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import '../index.css'
import '../Styles/Home.css'


export default function Home(){
    const [allMatches, setAllMatches] = React.useState([])

    
  
    
  
    React.useEffect(()=>{
      fetch("https://shop-api-2-de325v29m-nayasaff.vercel.app/api/masterlist")
      .then((res)=> res.json())
      .then(data => setAllMatches(data))
    }, [])
    
    const matches = allMatches.map(match=>{
        if(  match.matchNumber >= 48)
            return null;
      return (
          <Link to={`./reservation?number=${match.matchNumber}`}>
          <div className='homeCard' >
            <img src={require(`../Img/${match.matchNumber}.JPG`)}  alt="flags"/>
            <div className="homeCard--text"><a href="/#">{match.homeTeam} vs {match.awayTeam}</a></div>
            
          </div>
          </Link>
        
      )
    })
    function searchProducts(searchName){
      console.log("rr")
        console.log(matches)
      //   matches.filter((match, i, a) => {
      //   return match.awayTeam.toLowerCase().includes(searchName.toLowerCase());
      // });
     }

    return (
            <div className="homepage">
            <Nav home='active'
            book=''
          
            search={searchProducts}/>
            <h2>Click on match to reserve</h2>
            <div className="homecontainer">
              
            {matches}
        </div>
        </div>
    )
}