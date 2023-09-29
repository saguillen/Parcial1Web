import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Navbar } from 'react-bootstrap/Navbar';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login() {
    const [login, setLogin] = useState([]);
    useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'test', password: 'test' })
    };
        fetch('http://localhost:3001/login',requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setLogin(data);
            });
    }, []); // [] is a dependency array, which is empty in this case. This means that the useEffect will only run once, when the component is mounted.

    
    const [formValues, setFormValues] = useState({ username: "", password: "", favClass: "1" });
    const [validationStates, setValidationStates] = useState({ usernameState: false, passwordState: false });

    const handleUsernameChange = ((e) => {
        setFormValues({ ...formValues, username: e.target.value })



    });

    const handlePasswordChange = ((e) => {
        setFormValues({ ...formValues, password: e.target.value })
        const passwordRegex = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/gm;
        if (e.target.value.length >= 9 && e.target.value.match(passwordRegex)) {
            setValidationStates({ ...validationStates, passwordState: true });
        } else {
            setValidationStates({ ...validationStates, passwordState: false });
        }

    });

    const handleSelectChange = ((e) => {
        setFormValues({ ...formValues, favClass: e.target.value })
    });

    const clickSubmit = ((e) => {
        //Call fetch
        const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isUserValid = usernameRegex.test(formValues.username);
        if (isUserValid) {
            setValidationStates({ ...validationStates, usernameState: true });
        } else {
            setValidationStates({ ...validationStates, usernameState: false });
        }

        //setValidationStates({...validationStates, emailState: isEmailValid});
        //alert(JSON.stringify(formValues))
    })


    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">
                    El aroma mágico
                </a>


            </nav>
            <h1>Inicio de Sesión</h1>
            <img src="./cafebanner.jpeg" width="100%" height="250" class="d-inline-block align-top" alt="logo" />

            <Form>
                <Form.Group className="mb-6" controlId="formBasicUserId">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Nombre de Usuario" onChange={handleUsernameChange} value={formValues.username} isInvalid={!(validationStates.usernameState)} />
                    {!validationStates.emailState && <Form.Text className="text-muted" type="invalid" >We'll never share your email with anyone else.</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isValid={validationStates.passwordState} isInvalid={!validationStates.passwordState} />
                </Form.Group>
                <Button variant="primary" onClick={clickSubmit}>
                    Submit
                </Button>
            </Form>
        </div>

    );

}
export default Login;