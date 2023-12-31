
import {Routes, Route } from 'react-router-dom'
import Shopitems from "./pages/Shopitems";
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
  
  
         <Routes>
        
        
        <Route path="/" element={<Shopitems/>}/>
        <Route path="/cart" element={<Cart/>}/>


       </Routes>


    </div>
  );
}

export default App;
