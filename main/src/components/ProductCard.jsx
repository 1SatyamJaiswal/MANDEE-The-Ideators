import '../styles/Products.css'
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#ffffff" ),
    backgroundColor: "#F0F5D1",
    '&:hover': {
        backgroundColor: "#A0A189",
        color:"#F0F5D1"
    },
    border: "none",
    borderRadius: "30px",
    color:"#5D885C",
    fontWeight:"bold",
    marginLeft:"20px",
    marginRight:"20px",
    paddingLeft:"25px",
    paddingRight:"25px",
    fontSize: "17px"
}));


function ProductCard(props) {



    return (
        <div className='product-card'>
            {/* <div className=''> */}
                <img className='product-image' src="https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop-500x500.jpg"  />
            {/* </div> */}
            <div className='product-detail'>
                <div className='product-title'>Basmati Rice, Harpal Farms</div> 
                <div className='product-info'>Rs. 200 per kg</div>
                <div className='product-info'>Up for sale 3hrs ago</div>
                <div className='product-info'>Ludhiana, Punjab</div>
                <div className='product-info'>Contact No: 93280265</div>
                <div className='product-info'>Mail: ixsb.as@axab.com</div>
                <div className='product-buttons'>
                <ColorButton variant="contained" >Buy Now</ColorButton>
                <ColorButton variant="contained" >Connect</ColorButton>
                <ColorButton variant="contained" >Add to Cart</ColorButton>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;