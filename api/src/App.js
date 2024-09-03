import "./App.css";
import UserList from "./UserList";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        setUsers(result.data);
      });
  }, []); 

  return (
    
    <div className="App">
      <header className="App-header">
      <h1> Users List </h1>

        <Container>
          <Row>
            {users.map((user) => (
              <Col key={user.id} md={4} lg={3}>
                <UserList user={user} />
              </Col>
            ))}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
