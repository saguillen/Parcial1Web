import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Navbar } from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login() {
    const [login, setLogin] = useState([]);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({ username: "", password: "", favClass: "1" });
    const [validationStates, setValidationStates] = useState({ usernameState: false, passwordState: false });

    const handleUsernameChange = ((e) => {
        setFormValues({ ...formValues, username: e.target.value })
    });

    const handlePasswordChange = ((e) => {
        setFormValues({ ...formValues, password: e.target.value })
        const passwordRegex = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/gm;

    });

    const handleSelectChange = ((e) => {
        setFormValues({ ...formValues, favClass: e.target.value })
    });

    const clickSubmit = async () => {
        try {
            const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isUserValid = usernameRegex.test(formValues.username);

            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login: formValues.username, password: formValues.password })
            });

            if (response.ok) {
                navigate('/cafes')
            }
            else {
                setValidationStates({ username: false, password: false });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
        const clickSubmit2 = ((e) => {

            window.location.reload(false)
        })


        return (

            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <FormattedMessage id="el aroma mágico" />
                    </a>
                </nav>
                <img src="./cafebanner.jpeg" width="100%" height="250" class="d-inline-block align-top" alt="logo" />
                <hr></hr>
                <div className="row justify-content-center">
                    <div className="col-lg-5"  >
                        <Form >
                            <Form.Group className="mb-6" controlId="formBasicUserId">
                                <Form.Label><FormattedMessage id="Nombre de Usuario" /></Form.Label>
                                <Form.Control type="text" placeholder="juanvaldez" onChange={handleUsernameChange} value={formValues.username} />
                                {!validationStates.emailState && <Form.Text className="text-muted" type="invalid" >We'll never share your username with anyone else.</Form.Text>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label> <FormattedMessage id="Contraseña" /> </Form.Label>
                                <Form.Control type="password" placeholder="******" onChange={handlePasswordChange} value={formValues.password} />
                            </Form.Group>
                            <Button variant="primary" onClick={clickSubmit}>
                                <FormattedMessage id="Ingresar" />
                            </Button>
                            <Button variant="danger" onClick={clickSubmit2}>
                                <FormattedMessage id="Cancelar" />
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        );

    }
    export default Login;