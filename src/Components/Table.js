import React from 'react'

const Table = (props) => {
  if(props.data.length !== 0)
  console.log(props.data[1])
  return (
    <>
    <table>
        <thead>
          <tr>
            <th>match number</th>
            
            <th>category</th>
            <th>quantity</th>
            <th>price</th>
            <th>status</th>
          </tr>
        </thead>
        {props.data.length !== 0 && (<tbody>
          {props.data.map((item, _id) => {
         
          if(_id >= 100)
            return null;
          else

          return (
           
            <tr key={_id}>
              <td>{item.body.matchNumber}</td> 
              
              
               <td>{item && item.body.tickets.category}</td>
              <td>{item &&item.body.tickets.quantity}</td>
              <td>{item && item.body.tickets.price}</td>
              <td>{item && item.meta.action}</td>
             
            </tr>
          )  })}
        </tbody>) }
      </table>

      
    </>
  )
}

export default Table