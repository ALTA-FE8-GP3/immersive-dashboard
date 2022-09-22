import axios from 'axios';
import Router from 'next/router';
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useThemeContext } from "../../context/contextTheme";
import SubNavbar from '../../components/SubNavbar'

const Add = () => {
    // Initiate State
    const { isDark } = useThemeContext()
    const [editMente, setEditMente] = useState();
    const [mentee, setMentee] = useState({
        nama_mentee: "",
        address: "",
        home_address: "",
        email: "",
        gender: "",
        telegram: "",
        phone: "",
        discord: "",
        nama_emergency: "",
        phone_emergency: "",
        status_emergency: "",
        type: "",
        major: "",
        graduate: "",
        status: "",
        id_class: ""
    });

    const goBack = () => {
        Router.push({
            pathname: "/mente"
        })
    }

    // handle Input
    const handleInput = (e) => {
        let newMentee = { ...mentee };
        newMentee[e.target.name] = e.target.value;
        setMentee(newMentee);
    };

    // handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMente) {
            axios
                .put("endpoint url", mentee)
                .then(() => {
                    alert("Update data mentee success!");
                    setEditMente(null);
                    // handle fetch API mentee
                    goBack();
                })
                .catch((err) => console.log(err.response.data));
        } else {
            axios
                .post("endpoint url", mentee)
                .then(() => {
                    alert("Add mentee succeess!");
                    // handle fetch API mentee
                    goBack();
                })
                .catch((err) => console.log(err.response.data));
        }
    }

    // handle Edit
    const handleEdit = ({ id }) => {
        setEditMente(id);
    }

    return (
        <div style={{ backgroundColor: '#F9F9F9' }} className={isDark ? "bg-dark text-white" : ""}>
            <div>
                <div className='px-3'>
                    <SubNavbar
                        title="Add New Mentee"
                    />
                    <Row className='justify-content-center pb-4 '>
                        <Col md='8' xs={12} className='px-5 py-4 mx-3  bg-dark' style={{ border: '1px solid #A3A3A3', borderRadius: '5px' }}>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Name</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Address</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='address' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Home Address</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='address' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Email</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='email' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Gender</Form.Label>
                                <Col sm='10'>
                                    <Form.Check inline label='Male' type='radio' style={{ marginRight: '100px' }} />
                                    <Form.Check inline label='Female' type='radio' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Telegram</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Phone</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='number' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Discord</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' placeholder='' />
                                </Col>
                            </Form.Group>
                            <h5>Emergency Data</h5>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Name</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Phone</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='number' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Status</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' placeholder='' />
                                </Col>
                            </Form.Group>
                            <h5>Education Data</h5>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Type</Form.Label>
                                <Col sm='10'>
                                    <Form.Check inline label='Informatics' type='radio' style={{ marginRight: '100px' }} />
                                    <Form.Check inline label='Non-Informatics' type='radio' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Major</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Graduate</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Status</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Class</Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' placeholder='' />
                                </Col>
                            </Form.Group>
                            <Row lg={6} xs='2' className='container justify-content-end pt-3' style={{ textAlign: 'right' }}>
                                <Col lg='2'>
                                    <Button className='w-100' size='sm'
                                        onClick={goBack}
                                        style={{ backgroundColor: '#F47624', borderColor: '#F47624' }}>Cancel</Button>
                                </Col>
                                <Col lg='2'>
                                    <Button className='w-100' size='sm' style={{ backgroundColor: '#17345F', borderColor: '##17345F' }}>Save</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Add