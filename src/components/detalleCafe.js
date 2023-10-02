import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { FormattedDate } from 'react-intl';
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
    <Card style={{ width: "18rem", height: "28rem" }} className="d-flex align-items-center">
      <Card.Title>
        {props.nombre}
      </Card.Title>
      <Card.Subtitle>
        <FormattedDate
          value={props.fecha_cultivo}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </Card.Subtitle>
      <Card.Img
        style={{ height: "13rem" }}
        variant="top"
        src={props.imagen}
        alt={props.descripcion}
      />
      <Card.Body>
        <Card.Subtitle><FormattedMessage id="Notes" /></Card.Subtitle>
        <Card.Text>{props.notas}</Card.Text>
        <Card.Text>{props.tipo}</Card.Text>
        <Card.Subtitle>  <FormattedMessage id="Cultivado a una altura de" /> { props.altura} <FormattedMessage id="msnm" /></Card.Subtitle>

      </Card.Body>
    </Card>
  );


} export default DetalleCafe;