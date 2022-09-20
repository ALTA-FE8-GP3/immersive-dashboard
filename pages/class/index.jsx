import React from 'react'
import { InputGroup, Form, Button, Table, Pagination } from 'react-bootstrap'
import SubNavbar from '../../components/SubNavbar'
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const Index = () => {

  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      <div>
        <div className='px-3'>
          <SubNavbar
            title="Class List"
          />
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
              <Button style={{ width: '300px', backgroundColor: '#F47624', borderColor: '#F47624' }}>Add New Class</Button>
            </div>
            <div style={{ paddingTop: '30px' }}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Front End Batch 8</td>
                    <td><BiEditAlt /></td>
                    <td><MdDeleteOutline /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Back End Batch 11</td>
                    <td><BiEditAlt /></td>
                    <td><MdDeleteOutline /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Quality Engineering Batch 7</td>
                    <td><BiEditAlt /></td>
                    <td><MdDeleteOutline /></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Back End Batch 12</td>
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