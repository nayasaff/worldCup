import './App.css';
import Home from './Components/Home';
import Reservation from './Components/Reservation';
import Payment from './Components/Payment';
import { Routes, Route } from 'react-router-dom';
import Analytics from './Components/Analytics';
import Success from './Components/Success';
import BarChart from './Components/Chart';
import Nav from './Components/Nav';

function App() {
  return (
    <>
          <Nav home='active'
        book=''/>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path='/reservation' element={<Reservation/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path='/analytics' element={<Analytics/>}/>
    <Route path='/payment/success' element={<Success/>}/>
    {/* <Route path='/bar' element={<BarChart/>}/> */}
  </Routes>
  </>
  );
}

export default App;
