import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import DetalleCafe from './detalleCafe';
import { FormattedMessage } from 'react-intl';

function CafeList() {

    const [cafes, setCafes] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [cafeStatus, setCafe] = useState("");

    const handleClick = event => {
        setIsShown(current => !current);
    };
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
        <div class='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">
                <FormattedMessage id="el aroma mágico"/>
                </a>
            </nav>
            <img src="./cafebanner.jpeg" width="100%" height="250" class="d-inline-block align-top" alt="logo" />
            <div class="row">
                <div class="col">
                    <table class="table table-light">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"><FormattedMessage id="Nombre"/></th>
                                <th scope="col"><FormattedMessage id="Tipo"/> </th>
                                <th scope="col"><FormattedMessage id="Region"/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cafes.map((cafe, index) => (
                                <tr onClick={() => {
                                    setIsShown(true);
                                    fetch('http://localhost:3001/cafes/' + cafe.id).then(res => {
                                        return res.json();
                                    })
                                        .then(data => {
                                            console.log(data);
                                            setCafe(data);
                                        });
                                }}>
                                    <th scope="row">{cafe.id}</th>
                                    <td>{cafe.nombre}</td>
                                    <td>{cafe.tipo}</td>
                                    <td>{cafe.region}</td>

                                </tr>
                            ))}</tbody>
                    </table>
                </div>
                <div class="col">
                    {isShown && 
                    <DetalleCafe
                        cafe={{ id: cafes.id }}
                        imagen={cafeStatus.imagen}
                        nombre={cafeStatus.nombre}
                        tipo={cafeStatus.tipo}
                        region={cafeStatus.region}
                        altura = {cafeStatus.altura}
                        notas = {cafeStatus.notas}
                        fecha_cultivo = {cafeStatus.fecha_cultivo}

                    ></DetalleCafe>
                    }
                </div>

            </div>
        </div>
    ); // [] is a dependency array, which is empty in this case. This means that the useEffect will only run once, when the component is mounted.};
}
export default CafeList;