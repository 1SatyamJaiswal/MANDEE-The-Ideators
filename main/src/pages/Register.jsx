import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";import {TextField,FormControlLabel,Button,Stack,FormControl,RadioGroup,FormLabel,Radio} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import IconButton from '@mui/material/IconButton';
import '../styles/Register.css';
import axios from "axios";
import FormData from 'form-data'

export default function Register({login,setLogin}) {
    const [name,setName] = useState("jhsdjg");
    const [file,setFile] = useState(null);
    const [location, setLocation] = useState('')
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState(0)



    const setimgfile = (e)=>{
        setFile(e.target.files[0])
    }
    const nav = useNavigate()
    useEffect(() => {
      if (login) {
        // console.log("kjknjkb");
        nav('/dashboard')
      }
    }, [login])

    // const submit = () => {
    //     let fd = new FormData();
    //     fd.append('image', details.image, details.image.name);
    //     console.log(details.image,fd)

    //     let z = URL.createObjectURL(details.image)
    //     axios.post('http://localhost:4000/', {details,fd})
    //         .then((response) => {
    //           //handle success
    //           console.log(response);
    //         }).catch((error) => {
    //           //handle error
    //           console.log(error);
    //         });
          
       
    // }

    const submit = async(e)=>{
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo",file)
        formData.append("name",name);
        formData.append("email",email)
        formData.append("password",password)
        formData.append("type",type)
        formData.append("location",location)
        formData.append("phone",phone)
        formData.append("company",company)
        // console.log(details)

        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }

        const res = await axios.post('http://localhost:4000/register',formData,config);
       
         // nav('/dashboard')
        // setLogin(true)
    }

    // console.log(details);

    return (
        <div>
            {file?<img src={URL.createObjectURL(file)} alt="" />:null}
            <div className="registerForm" style={{ "border": "2px solid #A0A189", "borderRadius": "10px" }}>
                <form>
                    <Stack spacing={10} direction="row" justifyContent={"space-evenly"} alignItems={"center"}>
                        <div>
                        <h1 className="signUp">Sign up</h1>
                            <Stack spacing={2}>
                                <div>
                                    <p className="registerText">Name</p>
                                    <TextField name="name" onChange={(e) => setName(e.target.value) } variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Email</p>
                                    <TextField name="email" type="email" onChange={(e) => setEmail(e.target.value)} style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Phone</p>
                                    <TextField name="phone" type="tel" onChange={(e) => setPhone(e.target.value)} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Password</p>
                                    <TextField name="password" type="password" onChange={(e) => setPassword(e.target.value)} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                            </Stack>
                        </div>
                        <div>
                        <div>
                        <Stack alignItems="center" spacing={2} className="uploadPersonalImage">
                        <IconButton aria-label="upload picture" component="label" style={{"color":"#50734F"}}>
                        <input hidden onChange={setimgfile} accept="image/*" type="file"name="photo" />
                        <AddAPhotoIcon />
                        </IconButton>
                        <Button variant="contained" component="label" color="inherit" style={{"backgroundColor": "#F0F5D1","width": "100%","margin":"20px", "borderRadius":"20px"}}>
                        <p className='registerTextImage'>Your Image</p>
                        <input onChange={setimgfile} accept="image/*" type="file" name="photo"/>
                        </Button>
                        </Stack>
                        <Stack spacing={2}>
                                <div>
                                    <p className="registerText">Location</p>
                                    <TextField name="location" onChange={(e) => setLocation(e.target.value)} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Company</p>
                                    <TextField name="company" onChange={(e) => setCompany(e.target.value)} style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                        </Stack>
                        </div>
                            <div style={{ "width": "30px", "height":"20px" }}></div>
                            <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label"><p className="registerText">Select the account type</p></FormLabel>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel onClick={(e) => setType(e.target.value)} name="type" value="0" control={<Radio sx={{ "color": "#A0A189", '&.Mui-checked': { "color": "#A0A189" } }} />} label="Farmer" /> {/*0-farmer*/}
                                        <FormControlLabel onClick={(e) => setType(e.target.value)} name="type" value="1" control={<Radio sx={{ "color": "#A0A189", '&.Mui-checked': { "color": "#A0A189" } }} />} label="Buyer" />
                                    </RadioGroup>
                            </FormControl>
                        </div>
                    </Stack>
                    <p className="alreadyRegistered">Already have an account?<a href="#"> Login</a></p>
                    <Button 
                    color="inherit" onClick={submit}
                    style={{ "backgroundColor": "#F0F5D1", "width": "60%", "margin": "20px","border": "2px solid #A0A189", "borderRadius": "20px" }}>
                        <p className="Navbar-text">Submit</p>
                    </Button>
                </form>
            </div>
        </div>
    )
};
