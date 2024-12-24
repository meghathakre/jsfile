import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard"
import InsertProduct from "./admin/InsertProduct";
import CartData from "./pages/CartData";
import ProductDetails from "./pages/ProductDetails";





import CheckOut from "./pages/CheckOut";
import ThankYou from "./components/ThankYou";
import Failed from "./components/Failed"

// import Header from './components/Header'

const App = () => {
  return (
    <>
      {/* <h1>Welcome to E-commerceWeb!!!</h1> */}
      {/* <Header/> */}
      
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="carddata" element={<CartData />} />
            <Route path="prodetail/:proid" element={<ProductDetails/>} />
           
        
            
    
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="thankyou" element={<ThankYou/>}/>
            <Route path="failed" element={<Failed/>}/>
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="insertpro" element={<InsertProduct/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
