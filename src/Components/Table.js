import React from 'react'

const Table = (props) => {

  const getStatus = (status) => {
      if(status === "TICKET_PENDING")
      return "Pending"
      else if(status === "TICKET_RESERVED")
      return "Reserved"
      else if(status === "TICKET_CANCELLED")
      return "Cancelled"
  }

  if(props.data.length !== 0)
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
          return (
           
            <tr key={_id}>
              <td>{item.body.matchNumber}</td> 
               <td>{item && item.body.tickets.category}</td>
              <td>{item &&item.body.tickets.quantity}</td>
              <td>{item && item.body.tickets.price}</td>
              <td>{item && getStatus(item.meta.action)}</td>
            </tr>
          )  })}
        </tbody>) }
      </table>
      
    </>
  )
}

export default Table