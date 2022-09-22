import React, { useEffect, useState } from 'react'
import { Form, InputGroup, Button, Row, Col, DropdownButton, Dropdown, Table, Pagination } from 'react-bootstrap'
import SubNavbar from '../../components/SubNavbar'
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";
import Router from 'next/router';
import { useThemeContext } from "../../context/contextTheme";

const Index = () => {

  const { isDark } = useThemeContext()
  const [allClass, setAllClass] = useState([]);

  const buttonAddStyle = {
    width: '300px',
    backgroundColor: '#F47624',
    borderColor: '#F47624'
  }

  const buttonFilter = {
    backgroundColor: '#17345F',
    borderColor: '#17345F',
    width: '100px'
  }

  const GoAdd = () => {
    Router.push({
      pathname: '/mente/add'
    }
    )
  }

  // Get All Class
  const getClass = async () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://virtserver.swaggerhub.com/raorafarhan/ImmersiveDashboard/1.0.0/class',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MzgzMjYxODAsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJhZG1pbiJ9.AebFR-oQjUSOMez2ucDWkiMrS2eQIPmcYm5c71qZ_co'
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setAllClass(response.data.data);
        console.log(allClass)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getClass();
  }, []);

  return (
    <div className={isDark ? "bg-dark text-white px-3" : "px-3"} style={{ backgroundColor: '#F9F9F9' }}>
      <div>
        <div className='px-3'>
          <SubNavbar
            title="Mentee List"
          />
          <div className={isDark ? "bg-dark text-white p-4 mt-3" : "p-4 mt-3"}> 
            <InputGroup style={{ width: '300px' }}>
              <InputGroup.Text id='basic-addon1' style={{ backgroundColor: '#17345F', color: 'white' }}>Search</InputGroup.Text>
              <Form.Control
                placeholder='search here...'
                aria-label='Search'
                aria-describedby='basic-addon1'
              />
            </InputGroup>
            <div style={{ paddingTop: '15px' }}>
              <Button style={buttonAddStyle} onClick={GoAdd}>Add New Mentee</Button>
            </div>
            <div className='container px-5 py-4'>
              <Row lg={6} className='justify-content-center text-center'>
                <Col sm className='py-2'>
                  <Button style={buttonFilter} size='sm'>Export</Button>
                </Col>
                <Col sm className='py-2'>
                  <DropdownButton id='dropdown-basic-button' title='All Class' size='sm' variant='secondary'>
                    <Dropdown.Item href='#/action-1'>FE 8</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>BE 11</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>QE 7</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col sm className='py-2'>
                  <DropdownButton id='dropdown-basic-button' title='All Status' size='sm' variant='secondary'>
                    <Dropdown.Item href='#/action-1'>Interview</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Join Class</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Unit 1</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Unit 2</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Unit 3</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Repeat Unit 1</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Repeat Unit 2</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Repeat Unit 3</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Placement</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Eliminated</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Graduated</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col sm className='py-2'>
                  <DropdownButton id='dropdown-basic-button' title='All Category' size='sm' variant='secondary'>
                    <Dropdown.Item href='#/action-1'>Informatics</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Non Informatics</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col sm className='py-2'>
                  <Button style={buttonFilter} size='sm'>Filter</Button>
                </Col>
              </Row>
            </div>
            <div>
              <Table className={isDark ? "text-white" : ""} responsive>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Status</th>
                    <th>Category</th>
                    <th>Gender</th>
                    <th>Detail</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Si Pitung</td>
                    <td>FE 7</td>
                    <td>Graduated</td>
                    <td>Informatics</td>
                    <td>Male</td>
                    <td><AiFillFolderOpen /></td>
                    <td><BiEditAlt /></td>
                    <td><MdDeleteOutline /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Si Pitung</td>
                    <td>FE 7</td>
                    <td>Graduated</td>
                    <td>Informatics</td>
                    <td>Male</td>
                    <td><AiFillFolderOpen /></td>
                    <td><BiEditAlt /></td>
                    <td><MdDeleteOutline /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Si Pitung</td>
                    <td>FE 7</td>
                    <td>Graduated</td>
                    <td>Informatics</td>
                    <td>Male</td>
                    <td><AiFillFolderOpen /></td>
                    <td><BiEditAlt /></td>
                    <td><MdDeleteOutline /></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Si Pitung</td>
                    <td>FE 7</td>
                    <td>Graduated</td>
                    <td>Informatics</td>
                    <td>Male</td>
                    <td><AiFillFolderOpen /></td>
                    <td><BiEditAlt /></td>
                    <td><MdDeleteOutline /></td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='pt-3'>
              <Pagination className='justify-content-end'>
                <Pagination.Prev>Prev</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item active>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
