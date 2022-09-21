import React, { useState, useEffect } from 'react'
import { InputGroup, Form, Button, Table, Pagination } from 'react-bootstrap'
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
// Components
import SubNavbar from '../../components/SubNavbar'
import AddModal from '../../components/AddModal';

const Index = () => {

  // Dont distract
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [allClass, setAllClass] = useState([]);
  const [newClass, setNewClass] = useState([]);
  // const [classId, setClassId] = useState([]);
  const [editClass, setEditClass] = useState([]);


  // Get All Class
  const getClass = async () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://virtserver.swaggerhub.com/raorafarhan/ImmersiveDashboard/1.0.0/class'
    };

    axios(config)
      .then(function (response) {
        setAllClass(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getClass();
  }, []);

  // Add new class
  const addNewClass = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      nama_class: newClass
    });

    var config = {
      method: 'post',
      url: 'https://virtserver.swaggerhub.com/raorafarhan/ImmersiveDashboard/1.0.0/class',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        getClass();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleNewClass = (event) => {
    setNewClass(event.target.value);
  }

  // Edit Class
  const handleEditClass = (event) => {
    setEditClass(event.target.value);
  }
  const handleEdit = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      nama_class: editClass
    });

    var config = {
      method: 'put',
      url: `https://virtserver.swaggerhub.com/raorafarhan/ImmersiveDashboard/1.0.0/class/${id}`,
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
              <Button onClick={handleShow} style={{ width: '300px', backgroundColor: '#F47624', borderColor: '#F47624' }}>Add New Class</Button>
            </div>
            <div style={{ paddingTop: '30px' }}>
              {allClass.map((item) => {
                return (
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
                        <td>{item.nama_class}</td>
                        <td>
                          <a onClick={handleShow}><BiEditAlt style={{ color: 'black' }} /></a>
                        </td>
                        <td><MdDeleteOutline /></td>
                      </tr>
                    </tbody>
                  </Table>
                )
              })}
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
      {/* Modal */}
      <AddModal
        add="class"
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        handleSubmit={(e) => addNewClass(e.target.value)}
        handleNewClass={handleNewClass}
      />
    </div>
  )
}

export default Index