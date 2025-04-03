import {Routes, Route} from "react-router-dom";
import Welcome from "./pages/welcome";
import ShopOwnerLogin from "./pages/ownerlogin";
import Adminlogin from "./pages/adminlogin";
import Ownerdashboard from "./pages/ownerdashboard";
import Admindashboard from "./pages/admindashboard";
import Manageinventory from "./pages/manageinventory";
import Setprice from "./pages/setprice";
import Billing from "./pages/billing";
import Addproducts from "./pages/addproducts";
import Uploadimage from "./pages/uploadimage";
import Categorizeproducts from "./pages/categorize products";


function App() {

  return (
    <>
    <Routes>
      <Route path = "/" element = {<Welcome />}/>
      <Route path = "/shopownerlogin" element = {<ShopOwnerLogin />}/>
      <Route path = "/adminlogin" element = {<Adminlogin />}/>
      <Route path = "/ownerdashboard" element = {<Ownerdashboard />}/>
      <Route path = "/admindashboard" element = {<Admindashboard />}/>
      <Route path = "/manageinventory" element = {<Manageinventory />}/>
      <Route path = "/setprice" element = {<Setprice />}/>
      <Route path = "/billing" element = {<Billing />}/>
      <Route path = "/addproducts" element = {<Addproducts />}/>
      <Route path = "/uploadimage" element = {<Uploadimage />}/>
      <Route path = "/categorizeproducts" element = {<Categorizeproducts />}/>
    </Routes>
    </>
  )
}

export default App
