import React, {useEffect, useState} from "react";
// import {render} from "react-dom";
import axios from 'axios';
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => setListOfUSer(response.data)).catch(err => setError(err));

    }, [])

const showUsers= listOfUSer.map((user) => {
    return <div >
    <Card id="card"
      className="mb-2"
    >
      <Card.Header id="Header">user</Card.Header>
      <Card.Body>
        <Card.Title> {user.name} </Card.Title>
        <Card.Title> { user.username} </Card.Title>
        <Card.Title> { user.email} </Card.Title>
        <Card.Title>{ user.address.street} ,{user.address.city},{user.address.zipcode}  </Card.Title>
        <Card.Title> { user.phone}  </Card.Title>
      </Card.Body>
    </Card>
  
        
    </div>
 
}) 
    return ( 
        <>
        {listOfUSer && showUsers}
        </>      
    )
}


export default UserList;

