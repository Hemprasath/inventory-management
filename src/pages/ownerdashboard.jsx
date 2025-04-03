import React from 'react'
import "../csspage/ownerdashboard.css"
import { useNavigate } from "react-router-dom";

const Ownerdashboard = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='login-container'>
    <h1 className='head1'>Owner Dashboard</h1>
    <br />
    <br />
    <div className='cards'>

    <div className='card'>
      <h4 className='heading1'>Total Sales  <span className='symbol'>$</span></h4>
      <h2>$ 45,231.3</h2>
      <span className='last'>+20.1% from last month</span>
    </div>

    <div className='card'>
      <h4 className='heading1'>  Inventory Items  <span className='symbol'>📦</span></h4>
      <h2>+ 2304</h2>
      <span className='last'>+180 new items</span>
    </div>

    <div className='card'>
      <h4 className='heading1'> Active Users  <span className='symbol'>👥</span></h4>
      <h2>+ 556</h2>
      <span className='last'>+202 since last hour</span>
    </div>


    <div className='card'>
      <h4 className='heading1'>   Revenue <span className='symbol'>💰</span></h4>
      <h2>+ 25%</h2>
      <span className='last'>+7% from last month</span>
    </div>

    </div>

    <div className='buttons'>
    <button className='button1' onClick={() => navigate("/manageinventory")}>📦  Manage Inventory</button>
    <button className='button1' onClick={() => navigate("/setprice")}>🏷️  Set Price</button>
    <button className='button1'  onClick={() => navigate("/billing")}>🧾  Billing</button>
    </div>
    </div>
    </>
  )
}

export default Ownerdashboard
