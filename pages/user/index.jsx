import React, { useState } from 'react'
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { Button, Form, InputGroup, Pagination, Table } from 'react-bootstrap';
// Import Components
import SubNavbar from '../../components/SubNavbar';
import AddModal from '../../components/AddModal';
import axios from 'axios';

const Index = () => {
  // Dont distract
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Initiate State
  const [edit, setEdit] = useState(false)
  const [user, setUser] = useState({
    nama_user: "",
    email: "",
    password: "",
    role: "",
    team: "",
    status: ""
  })

  // handle input 
  const handleInput = (e) => {
    let newUser = { ...user }
    newUser[e.target.name] = e.target.value
    setUser(newUser)
  }

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://grupproject.site/users", user)
      .then(() => {
        alert("Add user successfully")
        handleClose()
      }
      )
      .catch(err => console.log(err.response.data))
  }


  return (
    <>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div>
          <div className='px-3'>
            <SubNavbar
              title="User List"
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
                <Button onClick={handleShow} style={{ width: '300px', backgroundColor: '#F47624', borderColor: '#F47624' }}>Add New User</Button>
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

      {/* Modal */}
      <AddModal
        add="user"
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        user={user}
        setEdit={setEdit}
      />
    </>
  )
}

export default Index