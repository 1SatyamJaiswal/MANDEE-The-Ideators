import React, { useState } from "react";
import { Typography, TextField, Stack, Button, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import IconButton from '@mui/material/IconButton';
import '../styles/Upload.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Upload() {
    const [details, setDetails] = useState({
        name: "",
        category: "",
        quantity: "",
        details:"",
        expire: "",
        storage: "",
        price: "",
        type: "",
    })

    const [image , setImage] = useState("");

    const handleImage = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
        console.log(image);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        })
    };

    console.log(details);

    return (
        <div className="Upload">
            <Navbar />
            <div className="Message">
                <Typography variant="h2" className="largeHeading">Upload your Crop!</Typography>
                <Typography variant="p" className="mediumHeading">Upload your Crops on -- to get the best Buyers and Results</Typography>
            </div>
            <div className="uploadForm" style={{ "border": "2px solid #A0A189", "borderRadius": "10px" }}>
                <form>
                    <Stack spacing={15} direction="row" justifyContent={"center"} alignItems={"center"}>
                        <div>
                        <Stack alignItems="center" spacing={2} className="uploadImage">
                        <IconButton aria-label="upload picture" component="label" style={{"color":"#50734F"}}>
                        <input hidden onChange={handleImage} accept="image/*" type="file" />
                        <AddAPhotoIcon />
                        </IconButton>
                        <Button variant="contained" component="label" color="inherit" style={{"backgroundColor": "#F0F5D1","width": "60%","margin":"20px", "borderRadius":"20px"}}>
                        <p className='Navbar-text'>Image of your crop</p>
                        <input hidden onChange={handleImage} accept="image/*" multiple type="file" />
                    </Button>
                    </Stack>
                        </div>
                        <div>
                            <Stack spacing={5}>
                                <div>
                                    <p className="Navbar-text">Name</p>
                                    <TextField name="name" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 30px", "width": "90%" }} />
                                </div>
                                <div>
                                    <Stack spacing={5} direction="row">
                                        <div>
                                            <p className="Navbar-text">Category</p>
                                            <TextField name="category" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} />
                                        </div>
                                        <div>
                                            <p className="Navbar-text">Quantity(kg)</p>
                                            <TextField name="quantity" onChange={handleChange} type="number" variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} />
                                        </div>
                                        <div>
                                            <p className="Navbar-text">Details</p>
                                            <TextField name="details" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} />
                                        </div>
                                    </Stack>
                                </div>
                                <div>
                                    <Stack spacing={5} direction="row">
                                        <div>
                                            <p className="Navbar-text">Expire</p>
                                            <TextField name="expire" onChange={handleChange} type="date" variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} />
                                        </div>
                                        <div>
                                            <p className="Navbar-text">Storage</p>
                                            <TextField name="storage" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} />
                                        </div>
                                        <div>
                                            <p className="Navbar-text">Price(/kg)</p>
                                            <TextField name="price" onChange={handleChange} type="number" variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "margin": "0px 20px 20px", "width": "100%" }} />
                                        </div>
                                    </Stack>
                                </div>
                                <FormControl>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormLabel id="demo-row-radio-buttons-group-label"><p className="Navbar-text">Select an option to sell</p></FormLabel>
                                        <div style={{"width":"30px"}}></div>
                                        <FormControlLabel onClick={handleChange} name="type" value="auction" control={<Radio sx={{ "color": "#50734F", '&.Mui-checked': { "color": "#50734F" } }} />} label="Auction" />
                                        <FormControlLabel onClick={handleChange} name="type" value="sell" control={<Radio sx={{ "color": "#50734F", '&.Mui-checked': { "color": "#50734F" } }} />} label="Direct Sell" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </div>
                    </Stack>
                    <Button color="inherit" style={{ "backgroundColor": "#F0F5D1", "width": "60%", "margin": "30px", "borderRadius": "20px" }}><p className="Navbar-text">Upload</p></Button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Upload;