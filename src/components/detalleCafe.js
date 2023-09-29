import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function DetalleCafe(props) {
    const [cafe, setCafe] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/cafes/1')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setCafe(data);
            });
    }, []); // [] is a dependency array, which is empty in this case. This means that the useEffect will only run once, when the component is mounted.

    return (
        <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
        <Card.Img
          style={{ height: "14rem" }}
          variant="top"
          src={props.mascota.foto}
          alt={props.mascota.descripcion}
        />
        <Card.Body>
          <Card.Title>
            <Link to={"/cafes/" + props.cafe.id}>
              {props.cafe.nombre}
            </Link>
          </Card.Title>
          <Card.Text>{props.cafe.tipo}</Card.Text>
        </Card.Body>
      </Card>
    );
    

} export default DetalleCafe;