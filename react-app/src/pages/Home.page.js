import { Button, Card } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/user.context';
// import ReactModal from 'react-modal'; 
// import React, {useState} from 'react';
import axios from 'axios';
import { Container } from './container';
import Dynamic from './dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card } from './Card';
// import styled from "styled-components";
// https://youtu.be/1Y7KFvP8aOk
export default function Home() {
 const { logOutUser } = useContext(UserContext);
 
 // This function is called when the user clicks the "Logout" button.
 const logOut = async () => {
   try {
     // Calling the logOutUser function from the user context.
     const loggedOut = await logOutUser();
     // Now we will refresh the page, and the user will be logged out and
     // redirected to the login page because of the <PrivateRoute /> component.
     if (loggedOut) {
       window.location.reload(true);
     }
   } catch (error) {
     alert(error)
   }
}

const triggerText = 'Open form';
const onSubmit = async (event) => {
  // event.preventDefault(event);
  // console.log(event.target.name.value);
  // console.log(event.target.email.value);
  // console.log(event.target.description.value);
  // console.log(event.target.amount.value);
  // console.log(event.target.upidetails.value);
  const response = await axios.post('http://localhost:5000/create',{
    "title":event.target.name.value,
    "email":event.target.email.value,
    "desc":event.target.description.value,
    "amount":event.target.amount.value,
    "details":event.target.upidetails.value
  })
  this.handleCloseModal(); 
  console.log(response.data.status);

};





 return (
   <>
     {/* <h1>Welcome to Expengo</h1> */}
     
     <div className="Home">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
    <div>
      <Dynamic />
    </div>

     {/* <h2> Hello world</h2> */}
     <Button variant="contained" onClick={logOut}>Logout</Button>
   </>
 );


//    return(
//     <>
//     <Button onClick={form}>Create Project</Button>
//     </>
//    );
}

