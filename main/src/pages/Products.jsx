// import React from 'react'
import Search from '../components/Search'
import '../styles/Products.css'
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import Sort from '../components/Sort';



const Products = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
      // color: theme.palette.getContrastText("#ffffff" ),
      backgroundColor: "#fffffg",
      '&:hover': {
        backgroundColor: "#A0A189",
        color:"#F0F5D1"

      },
      border: "1px solid #A0A189",
      borderRadius: "30px",
      color:"#5D885C",
      fontWeight:"bold",
      marginLeft:"20px",
      marginRight:"20px",
      paddingLeft:"25px",
      paddingRight:"25px"
  }));

  return (
    <div className='main'>
        <div className='text-above-search'>Find what you Need!</div>
        <div className='search'>
          <Search/>
          <div className="buttton-group">
            <ColorButton variant="outlined" >Category</ColorButton>
            <ColorButton variant="outlined" >Location</ColorButton>
            <ColorButton variant="outlined" >Submit</ColorButton>
            <Sort/>
          </div>
        </div>
        <div className='product-list'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>


    </div>
  )
}

export default Products