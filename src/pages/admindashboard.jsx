import React from 'react'
import "../csspage/ownerdashboard.css"
import { useNavigate } from "react-router-dom";

const Admindashboard = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='login-container'>
    <h1 className='head1'>Admin Dashboard</h1>
    <br />
    <br />
    <div className='cards'>

    <div className='card'>
      <h4 className='heading1'>Total Revenue <span className='symbol'>$</span></h4>
      <h2>$ 15,231.3</h2>
      <span className='last'>+20.1% from last month</span>
    </div>

    <div className='card'>
      <h4 className='heading1'>  Active Shops  <span className='symbol'>🏪</span></h4>
      <h2>+ 304</h2>
      <span className='last'>+18 new shops this month</span>
    </div>

    <div className='card'>
      <h4 className='heading1'> Total Users  <span className='symbol'>👥</span></h4>
      <h2>+ 11,556</h2>
      <span className='last'>+2028 since last Month</span>
    </div>


    <div className='card'>
      <h4 className='heading1'> Total Products <span className='symbol'>📦</span></h4>
      <h2>+ 2,534</h2>
      <span className='last'>+54 new products this week</span>
    </div>

    </div>

    <div className='buttons'>
    <button className='button1' onClick={() => navigate("/addproducts")}>📦  Add Products</button>
    <button className='button1' onClick={() => navigate("/uploadimage")}> 🖼️  Upload Image</button>
    <button className='button1'  onClick={() => navigate("/categorizeproducts")}>📂  Categorize Products</button>
    </div>
    </div>
    </>
  )
}
export default Admindashboard
