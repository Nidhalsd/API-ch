// userList Comp
import React from 'react';
import { Card } from 'react-bootstrap';
import './UserList.css'; 

const UserList = ({ user }) => {
  return (
    <Card className="user-card">
      <Card.Body>
        <Card.Title className="user-name"> {user.name}</Card.Title>
        <Card.Subtitle className="user-username">Username: {user.username}</Card.Subtitle>
        <Card.Subtitle className="user-email mb-2 text-muted">E-mail: {user.email}</Card.Subtitle>
        <Card.Text className="user-address">
          Street: {user.address.street}<br />
          City: {user.address.city}<br />
          Zipcode: {user.address.zipcode}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserList;
