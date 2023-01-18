import React from "react";
import Footer from "../components/Footer";
import Information from "../components/Information";
import '../styles/Guidelines.css'

export default function Guidelines(){
    return (
        <div>
            {/* <Navbar /> */}
            {/* <div className="mainImg"></div> */}
            <h1 className="largeHeading" style={{"textAlign":"center","padding":"0% 5% 5%","marginTop":"0px"}}>Kisaan Seva</h1>
            <Information />
            <Footer />
        </div>
    );
}