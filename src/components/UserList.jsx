import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Card, Row, Col, Container } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import './userList.css';

export const UserList = ({ userList, selectUser, getUsers }) => {
  //Alphabetic Order function
  userList.sort((a, b) => a.first_name.localeCompare(b.first_name));

  //Delete User funtion

  const deleteUser = (user) => {
    alert(user.first_name);
    axios
      .delete(`https://users-crud.academlo.tech/users/${user.id}/`)
      .then(() => getUsers());
  };

  return (
    <Container>
      <Row className="m-5">
        {userList.map((user) => (
          <div className="col-md-4">
            <Card key={user.id} style={{ width: "18rem" }} className="card">
              <Card.Body className="my-1 p-4" >
                <Card.Title>
                  {user.first_name} {user.last_name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Correo
                </Card.Subtitle>
                <Card.Text>{user.email}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Fecha de Nacimiento
                </Card.Subtitle>
                <Card.Text>{user.birthday}</Card.Text>

                <Button
                  variant="outline-primary"
                  onClick={() => selectUser(user)}
                >
                  <span>
                    <MdModeEditOutline />
                  </span>
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  <span>
                    <MdDeleteForever />
                  </span>
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};
