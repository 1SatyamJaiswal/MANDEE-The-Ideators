import ProductCard from '../components/ProductCard';
import'../styles/Dashboard.css'
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#ffffff" ),
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

function Dashboard(props) {
    return (
      <div className='main-dashboard'>
        <div className='bold-text'>
          <h1>Dashboard</h1>
          <p style={{color:"rgba(93, 136, 92, 0.91)"}}>View your Uploads, Sales and Revenue Earned!</p>
        </div>

        <div className="profile">
          <img src="https://th.bing.com/th/id/R.1e1135f5962e2e3964631d83527bb24e?rik=73EGi5PjAOkeyg&riu=http%3a%2f%2fwww.nagpurtoday.in%2fwp-content%2fuploads%2f2018%2f06%2fFarmer-1-1-600x295.jpg&ehk=C6Y3dKhD2QQsgn2vlJ7E%2bFOqoH0VhdDa%2fZ0B3O5e1tE%3d&risl=&pid=ImgRaw&r=0" className='profile-img' />
          <div className="profile-details">
            <div className='profile-info'>Name: Harpal Sodhi</div>
            <div className='profile-info'>Farm Name: Harpal Farms</div> 
            <div className='profile-info'>Contact No: 93280265</div>
            <div className='profile-info'>Mail: ixsb.as@axab.com</div>
            <div className='profile-info'>Current Rating: 4.1</div>
            <ColorButton variant="outlined" >Category</ColorButton>
          </div>
        </div>

        <div className="uploads">
          <div className="bold-text"> Uploads </div>
          <ProductCard/>
          <ProductCard/>
        </div>
          
      </div>
    );
}

export default Dashboard;