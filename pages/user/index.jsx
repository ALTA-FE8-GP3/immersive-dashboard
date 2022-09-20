import React from 'react'
import { CgProfile } from "react-icons/cg";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { Button, Col, Form, InputGroup, Pagination, Row, Table } from 'react-bootstrap';

const Index = () => {
  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      <div className='pt-3'>
        <h4 style={{ fontSize: '2rem' }} className='px-3'>Immersive Bootcamp</h4>
        <div className='px-3'>
          <Row>
            <Col lg='6'>
              <p style={{ fontSize: '20px' }}>User List</p>
            </Col>
            <Col lg='6'>
              <div className='text-end'>
                <p><CgProfile style={{ fontSize: '40px', paddingRight: '10px' }} /> Hello, (Your name)</p>
              </div>
            </Col>
          </Row>
          <div style={{ borderTop: '1px solid #CAC8C8' }}></div>
          <div style={{ borderTop: '1px solid #CAC8C8', marginTop: '10px' }}></div>
          <div className='bg-white mt-3 p-4'>
            <InputGroup style={{ width: '300px' }}>
              <InputGroup.Text id='basic-addon1' style={{ backgroundColor: '#17345F', color: 'white' }}>Search</InputGroup.Text>
              <Form.Control
                placeholder='search here...'
                aria-label='Search'
                aria-describedby='basic-addon1'
              />
            </InputGroup>
            <div style={{ paddingTop: '15px' }}>
              <Button style={{ width: '300px', backgroundColor: '#F47624', borderColor: '#F47624' }}>Add New User</Button>
            </div>
            <div style={{ paddingTop: '30px' }}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Team</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Si Pitung</td>
                    <td>sipitung@mail.com</td>
                    <td>Mentor</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td><BiEditAlt /></td>
                    <td><MdDeleteOutline /></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Si Pitung</td>
                    <td>sipitung@mail.com</td>
                    <td>Mentor</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td><BiEditAlt /></td>
                    <td><MdDeleteOutline /></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Si Pitung</td>
                    <td>sipitung@mail.com</td>
                    <td>Mentor</td>
                    <td>Admin</td>
                    <td>Active</td>
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

export default Index