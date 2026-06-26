import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import Loading from "../component/Loading";
import Login from "../component/Login";
import Register from "../component/Register";
import Notfound from "../component/Notfound";


import BuyerDashboard from "../Pages/Buyer/BuyerDash";
import Pending from '../Pages/Buyer/Pending'
import Accept from '../Pages/Buyer/Accept'
import NegotiationHistory from '../Pages/Buyer/History'
import Viewprofile from '../Pages/Buyer/ViewProfile'
import DealRejectionPage from '../Pages/Buyer/RejectPage'

import SellerDashboard from "../Pages/seller/SellerDashboard";



const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/register" element={<Register />} />

//buyer
        <Route path="/sellerdash" element={<SellerDashboard/> } />
        <Route path="/pending" element={<Pending/> } />
        <Route path="/accept" element={<Accept/> } />
        <Route path="/history" element={<NegotiationHistory/> } />
        <Route path="/viewprofile" element={<Viewprofile/> } />

        <Route path="/reject" element={<DealRejectionPage/> } />


//seller
        <Route path="/buyerdash" element={<BuyerDashboard/> } />

        <Route path="*" element={<Notfound />} />
      </Routes>
    
    </div>
  );
};

export default Routers;
