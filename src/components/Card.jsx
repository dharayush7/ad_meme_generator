import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={props.value.url} />
      <Card.Body>
        <Card.Title>{props.value.name}</Card.Title>
        <Button variant="primary" onClick={(e) => navigate(`/edit?url=${props.value.url}`)} >Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
