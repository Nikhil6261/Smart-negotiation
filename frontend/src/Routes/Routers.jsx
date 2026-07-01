import React from "react";
import {  Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(()=> import("../component/Home") ) 
const Loading  = lazy(()=> import("../component/Loading"))

import Login from "../component/Login";
import Register from "../component/Register";
import Notfound from "../component/Notfound";
import SellerNavbar from "../Pages/Seller/SellerNav";


const BuyerDashboard = lazy(()=> import("../Pages/Buyer/BuyerDash"))
const Pending = lazy(()=> import( '../Pages/Buyer/Pending'))
const Accept = lazy(()=> import( '../Pages/Buyer/Accept'))

const NegotiationHistory = lazy(()=> import('../Pages/Buyer/History'))


const Viewprofile = lazy(()=> import( '../Pages/Buyer/ViewProfile') )

const DealRejectionPage = lazy(()=>import('../Pages/Buyer/RejectPage')) 

const SellerDashboard =lazy( ()=>import("../Pages/Seller/SellerDashboard"))



const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/register" element={<Register />} />

//buyer
        <Route path="/buyerdash" element={<BuyerDashboard/> } />
        <Route path="/pending" element={<Pending/> } />
        <Route path="/accept" element={<Accept/> } />
        <Route path="/history" element={<NegotiationHistory/> } />
        <Route path="/viewprofile" element={<Viewprofile/> } />

        <Route path="/reject" element={<DealRejectionPage/> } />


//seller
        <Route path="/sellerdash" element={<SellerDashboard/> } />
        <Route path="/sellernav" element={<SellerNavbar/> } />

        <Route path="*" element={<Notfound />} />
      </Routes>
    
    </div>
  );
};

export default Routers;
