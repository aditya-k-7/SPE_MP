
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import Payment from './payment';
import {Popover } from '@mui/material'


export default function Dynamic() {

    const [products, setProducts] = useState("");
    useEffect(()=>{
    const fetchdata = async()=>{
        const data = await axios.get('http://localhost:5000/get');
        console.log("products>>>>",data);
        setProducts(data);
    };
    fetchdata();
    }, []);

    // const payment = async()=>{
    //     <Popover 
    //     anchorReference="anchorPosition"
    //     anchorPosition={{ top: 200, left: 400 }}
    //     anchorOrigin={{
    //         vertical: 'center',
    //         horizontal: 'left',
    //     }}
    //     transformOrigin={{
    //         vertical: 'center',
    //         horizontal: 'left',
    //     }}
    //     >
    //     The content of the Popover.
    //     </Popover>
    // };

    return(
        <Container>
                <Row>
                    {
                        products && products?.data.map((product, k)=>(
                            <Col key={k} xs={12} md={4} lg={3}>
                            <Card >
                                <Card.Img src="https://via.placeholder.com/150x75" />
    
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Subtitle>{product.email}</Card.Subtitle>
                                    <Card.Text>{product.desc}</Card.Text>
                                    <Card.Header>{product.amount}</Card.Header>
                                    <Card.Footer>{product.details}</Card.Footer>
                                    <Popup trigger=
                                        {<button> Fund </button>}
                                        modal nested>
                                        {
                                            close => (
                                                <div className>
                                                    <div className>
                                                        <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
                                                    </div>
                                                    <div>
                                                        <button onClick=
                                                            {() => close()}>
                                                                X
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </Popup>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))
                    }
                </Row>
            </Container>
    )
}