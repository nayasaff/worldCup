import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import '../index.css'
import '../Styles/Home.css'
import axios from "axios";


export default function Home(){
    const [allMatches, setAllMatches] = React.useState([])

    React.useEffect(()=>{
      fetch("https://shop-api-pied.vercel.app/api/masterlist",)
      .then((res)=> res.json())
      .then(data => setAllMatches(data))
    }, [])
    
    const matches = allMatches.map(match=>{
        if(  match.matchNumber >= 48)
            return null;
      return (
          <Link key={match._id} to={`./reservation?number=${match.matchNumber}`}>
          <div className='homeCard' >
            <img src={require(`../Assets/${match.matchNumber}.JPG`)}  alt="flags"/>
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

            <h2>Click on match to reserve</h2>
            <div className="homecontainer">
              
            {matches}
        </div>
        </div>
    )
}

//match ui