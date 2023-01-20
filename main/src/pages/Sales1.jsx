import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import "../styles/home.css";
import Rslider from "../components/Rslider";
import Slider from "../components/Slider";
import '../styles/Sales1.css';
// import Footer from "../components/Footer";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sales({setSearch,search}){
    const nav = useNavigate()

    const handleClick = () => {
        console.log("I got clicked");
    }

    const searchQ = () => {
        
    }
     
    return (
        <div>
        <div className="home">
        <div className="content">
        <p className="line-1">Special Offers Today on</p>
        <p className="line-1">Rice and Paddy</p>
        <p className="line-2">30% Flat Off</p>
        <p className="line-3">Buy fresh paddy produce from the farms</p>
        </div>
        <div className="searchField">
            {/* Find What you Need */}
        <div style={{display:"flex"}}>
        <TextField  style={{"backgroundColor": "#rgba(255, 254, 240, 0.5);","width": "60%","margin":"20px", "borderRadius":"20px",border:"2px solid white",color:"white"}}  onChange={(e)=>setSearch(e.target.value)}/>

          <Button variant="contained" onClick={() => {nav('/products')}} style={{background:"green",height:"50px",marginTop:"20px"}}>search</Button>
        </div>
        </div>
        </div>
        <div className="sliderSales">
            <Slider products={[{name : "Cabbage"},{name : "Potato1"},{name : "Potato2"},{name : "Potato3"},{name : "Potato4"}]} title={"Top Selling Products"} />
        </div>
        <div className="sliderSales">
            <Slider products={[{name : "Cabbage"},{name : "Potato1"},{name : "Potato2"},{name : "Potato3"},{name : "Potato4"}]} title={"Live Auction"}/>
        </div>
        <div className="sliderSales">
            <Rslider products={[{name : "Cabbage"},{name : "Potato1"},{name : "Potato2"},{name : "Potato3"},{name : "Potato4"}]}/>
        </div>
        {/* <Footer /> */}
        </div>
    )
} 