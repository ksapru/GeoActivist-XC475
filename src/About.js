import React from 'react'
import navbar from './components/Navbar'
import Button from 'react-bootstrap/Button'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
export default function About() {
    return (
        
          <div className="Login">
           <Button>Create an Account</Button>
           <br/>
           <br/>
           <Button>Login</Button>
          </div>
                
            
    )
}
