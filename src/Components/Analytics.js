// import React from 'react'
// import Nav from "./Nav"

// import Table from './Table'
// import  '../Styles/Analytics.css'
// import BarChart from './Chart';



// export default function Analytics(){

//     const [analytic,setAnalytics]= React.useState([]);
    
    
    

    
//     React.useEffect(()=> {
//         async function getAnalytics() {
//             const res = await fetch(
//               "https://analytics-silk-psi.vercel.app/api/analytics"
//             )
//             const data= await res.json()
//             setAnalytics(data)

     
//           }
//         getAnalytics();

//     },[])


//     return(
//         <div>
//             <Nav home=''
//             book='active'/>
//             <Table data={analytic}/>
//             <BarChart/>
//         </div>
//     )
// }
import React from 'react'
import Nav from "./Nav"
import axios from 'axios';
import Table from './Table'
import  '../Styles/Analytics.css'
import BarChart from './BarChart';
import PieChart from './PieChart';
import { useLocation } from 'react-router-dom';
//import {Bar} from 'react-chartjs-2'
//import BarChart from './BarChart';




export default function Analytics(){
    const location = useLocation()
    const[cat1,setCat1]=React.useState(0);
    const[cat2,setCat2]=React.useState(0);
    const[cat3,setCat3]=React.useState(0);



    const [analytic,setAnalytics]= React.useState([]);
    //const [loading, setLoading] = React.useState(true);
    //const [error, setError] = React.useState(null);
    const[pendingCount,setPendingCount]=React.useState(0);
    const[reservedCount,setReservedCount]=React.useState(0);
    const[cancelledCount,setCancelledCount]=React.useState(0);



    
    React.useEffect(()=> {
        async function getAnalytics() {
            //let counts=[];

            const res = await fetch(
              "https://analytics-silk-psi.vercel.app/api/analytics"
            )
            const data= await res.json()
            setAnalytics(data)
            console.log(analytic)
            for(let i=0; i<99;i++){
                if(analytic[i].meta.action==='TICKET_RESERVED'){
                    setReservedCount(prevValue=> prevValue+1);
                }
                else  if(analytic[i].meta.action==='TICKET_PENDING'){
                    setPendingCount(prevValue=> prevValue+1);
                }
                else if(analytic[i].meta.action==='TICKET_CANCELLED'){
                    setCancelledCount(prevValue=> prevValue+1);
                }

            }
            for(let i=0; i<99;i++){
                if(analytic[i].body.tickets.category===1){
                    setCat1(prevValue=> prevValue+1);
                }
                else  if(analytic[i].body.tickets.category===2){
                    setCat2(prevValue=> prevValue+1);
                }
                else if(analytic[i].body.tickets.category===3){
                    setCat3(prevValue=> prevValue+1);
                }

            }

         
          }
        getAnalytics();

    },[analytic])


    return(
        <div>
            <Nav book='active'
            home=''
            />
            <Table data={analytic } />
            <div className='charts'>
            <BarChart data = {reservedCount} data2={pendingCount} data3={cancelledCount}/>
             <PieChart data={cat1} data2={cat2}  data3= {cat3}/> 
             </div>

        </div>
        
    )
}