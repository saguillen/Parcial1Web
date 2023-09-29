import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function CafeList(){

    const [cafes, setCafes] = useState([]);

useEffect(() => {
    fetch('http://localhost:3001/cafes')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        setCafes(data);
    });
}, []); // [] is a dependency array, which is empty in this case. This means that the useEffect will only run once, when the component is mounted.


    return (
        <table class="table table-light">

        <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Tipo</th>
        <th scope="col">Region</th>
        </tr>
    </thead>
    <tbody>
        {cafes.map((cafe,index) => (
        <Link key={index} to={`/detalleCafe/${index}`} className="cafe-link">
        <tr>
        <th scope="row">{cafe.id}</th>
        <td>{cafe.nombre}</td>
        <td>{cafe.tipo}</td>
        <td>{cafe.region}</td>
        </tr>
        </Link>
        ))}</tbody>
    </table>
    ); // [] is a dependency array, which is empty in this case. This means that the useEffect will only run once, when the component is mounted.};
    }
    export default CafeList;