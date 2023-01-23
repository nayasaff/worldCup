const axios = require('axios');
const { tickets } = require('../../sp-reservations-api/validation/shared-schema');

const processPendingTicket = async (message) => {
  console.log('[processPendingTicket]', message)
  //call patch axious
   await axios.patch(`http://localhost:3300/api/masterlist/{"matchNumber": 1,"count": 1, "category": 2}`)
  
  await axios.post(`https://analytics-silk-psi.vercel.app/api/analytics`, message)
  
  return Promise.resolve('[processPendingTicket]')
};

const processCancelledTicket = async (message) => {
  console.log('[processCancelledTicket]', message)
  //call delete axious
   await axios.delete(`https://shop-api-2-de325v29m-nayasaff.vercel.app/api/masterlist/{"matchNumber": ${message.body.matchNumber},"count": ${message.body.tickets.quantity}, "category": ${message.body.tickets.category}}`)
  
  await axios.post(`https://analytics-silk-psi.vercel.app/api/analytics`, message)
  console.log("messagess 1", message)
  return Promise.resolve('[processCancelledTicket]')
};

const processReservedTicket = async (message) => {
  console.log('[processReservedTicket]', message)
  //cal post reservation
  

  //  await axios.post("https://shop-api-2-de325v29m-nayasaff.vercel.app/api/reservation", req.body)
  //  const response = await axios.post("https://payment-api-sable.vercel.app/payment", {
  //      amount: req.body.tickets.quantity * req.body.tickets.price * 100,
  //      id 
  //  })

   await axios.post(`https://analytics-silk-psi.vercel.app/api/analytics`, message)
  

  return Promise.resolve('[processReservedTicket]')
};

const processMasterlist = async (message) => {
  console.log('[processMasterlist]', message)
  //get master list
  return Promise.resolve('[processMasterlist]')
};

module.exports = {
  processPendingTicket,
  processReservedTicket,
  processCancelledTicket,
};
