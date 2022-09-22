import axios from 'axios';
import Router, { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useThemeContext } from "../../context/contextTheme";
import SubNavbar from '../../components/SubNavbar'

const Add = () => {
    // Initiate State
    const { isDark } = useThemeContext()
    const router = useRouter();
    const { query: { id } } = router;

    const [allClass, setAllClass] = useState([]);
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
        category: "",
        major: "",
        graduate: "",
        status: "",
        nama_class: "",
        class_id: ""
    });

    const goBack = () => {
        Router.push({
            pathname: "/mente"
        })
    }

    // Get All Class
    const getClass = () => {
        axios
            .get("https://grupproject.site/class")
            .then((res) => setAllClass(res.data.data));
    };
    useEffect(() => {
        getClass();
    }, []);

    // handle Input
    const handleInput = (e) => {
        let newMentee = { ...mentee };
        newMentee[e.target.name] = e.target.value;
        setMentee(newMentee);
        console.log(e.target.name)
        console.log(e.target.value)
    };
    // handle input selected value
    const handleSelect = (e) => {
        let newMentee = { ...mentee };
        const index = e.nativeEvent.target.selectedIndex;
        newMentee["nama_class"] = e.nativeEvent.target[index].label;
        newMentee["class_id"] = e.target.value;
        setMentee(newMentee);
        console.log(newMentee)
    }


    // handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const { nama_mentee, address, home_address, email, gender, telegram, phone, discord, nama_emergency, phone_emergency, status_emergency, category, major, graduate, status, nama_class, class_id } = mentee;
        const data = JSON.stringify({
            nama_mentee: nama_mentee,
            address: address,
            home_address: home_address,
            email: email,
            gender: gender,
            telegram: telegram,
            phone: parseInt(phone),
            discord: discord,
            nama_emergency: nama_emergency,
            phone_emergency: parseInt(phone_emergency),
            status_emergency: status_emergency,
            category: category,
            major: major,
            graduate: graduate,
            status: status,
            class_id: parseInt(class_id),
            nama_class: nama_class
        })
        console.log(data)
        if (id) {
            console.log("put")
            axios
                .put(`https://grupproject.site/mentee/${id}`, data,
                    {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                    })
                .then(() => {
                    alert("Update data mentee success!");
                    setEditMente(null);
                    goBack();
                })
                .catch((err) => console.log(err.response.data));
        } else {
            console.log("post")
            axios
                .post("https://grupproject.site/mentee", data, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                })
                .then(() => {
                    alert("Add mentee succeess!");
                    goBack();
                    console.log(mentee)
                })
                .catch((err) => console.log(err.response.data));
        }
    }

    return (
        <div style={{ backgroundColor: '#F9F9F9' }} className={isDark ? "bg-dark text-white" : ""}>
            <div>
                <div className='px-3'>
                    <SubNavbar
                        title="Add New Mentee"
                    />
                    <Row className='justify-content-center pb-4 '>
                        <Col md='8' xs={12} className={isDark ? "bg-dark text-white px-5 py-4 mx-3" : "px-5 py-4 mx-3"} style={{ border: '1px solid #A3A3A3', borderRadius: '5px' }}>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Name</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='text'
                                        name='nama_mentee'
                                        placeholder='Input name'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Address</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='address'
                                        name='address'
                                        placeholder='Input address'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Home Address</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='address'
                                        name='home_address'
                                        placeholder='Input home address'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Email</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='email'
                                        name='email'
                                        placeholder=''
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName' onChange={(e) => handleInput(e)}>
                                <Form.Label column sm='2'>Gender</Form.Label>
                                <Col sm='10'>
                                    <Form.Check
                                        value="Male"
                                        inline
                                        label="Male"
                                        name="gender"
                                        type="radio"
                                        controlid="exampleForm.ControlInput4"
                                    />
                                    <Form.Check
                                        value="Female"
                                        inline
                                        label="Female"
                                        name="gender"
                                        type="radio"
                                        controlid="exampleForm.ControlInput99"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Telegram</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='text'
                                        name='telegram'
                                        placeholder='Input telegram username'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Phone</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='number'
                                        name='phone'
                                        placeholder='Input number'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Discord</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='text'
                                        name='discord'
                                        placeholder='Input discord username'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <h5>Emergency Data</h5>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Name</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='text'
                                        name='nama_emergency'
                                        placeholder='Input emergency name'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Phone</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='number'
                                        name='phone_emergency'
                                        placeholder='Input emergency phone'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName' onChange={(e) => handleInput(e)}>
                                <Form.Label column sm='2'>Status</Form.Label>
                                <Col sm='10'>
                                    <Form.Select name='status_emergency'>
                                        <option>Select your emergency status</option>
                                        <option value="Orang Tua">Orang Tua</option>
                                        <option value="Kakek Nenek">Kakek Nenek</option>
                                        <option value="Saudara dari Orang Tua">Saudara dari Orang Tua</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <h5>Education Data</h5>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName' onChange={(e) => handleInput(e)}>
                                <Form.Label column sm='2'>Category</Form.Label>
                                <Col sm='10'>
                                    <Form.Check
                                        value="IT"
                                        inline label='Informatics'
                                        name='category'
                                        type='radio'
                                        style={{ marginRight: '100px' }}
                                    />
                                    <Form.Check
                                        value="Non-IT"
                                        inline label='Non-Informatics'
                                        name='category'
                                        type='radio'
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Major</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='text'
                                        name='major'
                                        placeholder='Input latest major'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName'>
                                <Form.Label column sm='2'>Graduate</Form.Label>
                                <Col sm='10'>
                                    <Form.Control
                                        type='text'
                                        name='graduate'
                                        placeholder='Input latest school'
                                        onChange={(e) => handleInput(e)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName' onChange={(e) => handleInput(e)}>
                                <Form.Label column sm='2'>Status</Form.Label>
                                <Col sm='10'>
                                    <Form.Select name='status'>
                                        <option>Select status</option>
                                        <option value="Interview">Interview</option>
                                        <option value="Join Class">Join Class</option>
                                        <option value="Unit 1">Unit 1</option>
                                        <option value="Unit 2">Unit 2</option>
                                        <option value="Unit 3">Unit 3</option>
                                        <option value="Repeat Unit 1">Repeat Unit 1</option>
                                        <option value="Repeat Unit 2">Repeat Unit 2</option>
                                        <option value="Repeat Unit 3">Repeat Unit 3</option>
                                        <option value="Placement">Placement</option>
                                        <option value="Eliminated">Eliminated</option>
                                        <option value="Graduated">Graduated</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mb-2' controlId='formPlainTextName' onChange={(e) => handleSelect(e)}>
                                <Form.Label column sm='2'>Class</Form.Label>
                                <Col sm='10'>
                                    <Form.Select name='nama_class' >
                                        <option>Select class</option>
                                        {allClass.map((obj) => {
                                            const { id, nama_class } = obj;
                                            return (
                                                <option
                                                    label={nama_class}
                                                    value={id}

                                                >
                                                    {nama_class}
                                                </option>
                                            )
                                        })}
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Row lg={6} xs='2' className='container justify-content-end pt-3' style={{ textAlign: 'right' }}>
                                <Col lg='2'>
                                    <Button className='w-100' size='sm'
                                        onClick={goBack}
                                        style={{ backgroundColor: '#F47624', borderColor: '#F47624' }}>Cancel</Button>
                                </Col>
                                <Col lg='2'>
                                    <Button
                                        className='w-100'
                                        size='sm'
                                        style={{ backgroundColor: '#17345F', borderColor: '##17345F' }}
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        Save
                                    </Button>
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