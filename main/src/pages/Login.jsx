import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {TextField,Button,Stack} from '@mui/material';
import '../styles/Register.css';

export default function Register({login,setLogin}) {
    const nav = useNavigate()
    useEffect(() => {
      if (login) {
        nav('/dashboard')
      }
    }, [login])
    

    const [details, setDetails] = useState({
        name: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        })
    };

    const submit =  () => {
        nav('/dashboard')
        setLogin(true)
    }

    console.log(details);

    return (
        <div>
            <div className="registerForm" style={{ "border": "2px solid #A0A189", "borderRadius": "10px" }}>
                <form>
                    <Stack spacing={10} direction="row" justifyContent={"center"} alignItems={"center"}>
                        <div>
                        <h1 className="signUp">Login</h1>
                            <Stack spacing={2}>
                                <div>
                                    <p className="registerText">Name</p>
                                    <TextField name="name" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Password</p>
                                    <TextField name="password" type="password" onChange={handleChange} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                            </Stack>
                        </div>
                        <div>
                            <div className="loginImage"></div>
                            {/* <p style={{color: "white"}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p> */}
                        </div>
                    </Stack>
                    <Button color="inherit" onClick={submit}
                     style={{ "backgroundColor": "#F0F5D1", "width": "60%", "margin": "20px","border": "2px solid #A0A189", "borderRadius": "20px" }}>
                        <p className="Navbar-text">Login</p>
                    </Button>
                </form>
            </div>
        </div>
    )
};