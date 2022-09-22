import React, { useEffect, useState } from 'react'
import { Form, InputGroup, Button, Row, Col, DropdownButton, Dropdown, Table, Pagination } from 'react-bootstrap'
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";
import Router, { useRouter } from 'next/router';
import axios from 'axios';
// import components
import SubNavbar from '../../components/SubNavbar'
import { useThemeContext } from "../../context/contextTheme";

const Index = () => {

  const { isDark } = useThemeContext()
  const [allClass, setAllClass] = useState([]);
  const [menteeList, setMenteeList] = useState([]);

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

  // Navigate to add mentee page
  const router = useRouter()
  const GoAdd = (id) => {
    router.push({
      pathname: '/mente/add',
      query: { id: id }
    }
    )
  }

  // handle Edit
  const [editMente, setEditMente] = useState();
  const handleEdit = (id) => {
    GoAdd(id)
  }

  // Get All Mentee
  const getMentee = () => {
    axios
      .get("https://grupproject.site/mentee")
      .then((res) => setMenteeList(res.data.data));
  };

  // Get All Class
  const getClass = () => {
    axios
      .get("https://grupproject.site/class")
      .then((res) => setAllClass(res.data.data));
  };

  useEffect(() => {
    getMentee();
    getClass();
  }, []);

  // handle Delete
  const handleDelete = ({ ID }) => {
    axios
      .delete(`https://grupproject.site/mentee/${ID}`)
      .then(() => {
        alert("Mentee deleted");
        getMentee();
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className={isDark ? "bg-dark text-white px-3" : "px-3"} style={{ backgroundColor: '#F9F9F9', minHeight: "120vh" }}>
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
                  <Form.Select size='sm'>
                    <option selected>All Class</option>
                    {allClass.map((obj) => {
                      const { id, nama_class } = obj;
                      return (
                        <option value={id}>{nama_class}</option>
                      )
                    })}
                  </Form.Select>
                </Col>
                <Col sm className='py-2'>
                  <Form.Select name='status'>
                    <option>All status</option>
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
                <Col sm className='py-2'>
                  <Form.Select size='sm'>
                    <option>All Category</option>
                    <option value="IT">IT</option>
                    <option value="Non-IT">Non-IT</option>
                  </Form.Select>
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
                  {menteeList.map((obj, index) => {
                    const { ID, nama_mentee, nama_class, status, category, gender } = obj;
                    return (
                      <tr key={index} onClick={goLog}>
                        <td>{index + 1}</td>
                        <td>{nama_mentee}</td>
                        <td>{nama_class}</td>
                        <td>{status}</td>
                        <td>{category}</td>
                        <td>{gender}</td>
                        <td><AiFillFolderOpen /></td>
                        <td><BiEditAlt onClick={() => handleEdit(ID)} /></td>
                        <td><MdDeleteOutline onClick={() => handleDelete(obj)} /></td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
            <div className="pt-3 float-end">
              <Button variant={isDark ? "light" : ""} style={{ backgroundColor: "#F47624" }}>
                <GrFormPrevious />
                <GrFormPrevious />
              </Button>
              <Button variant={isDark ? "light" : ""} className="ms-4" style={{ backgroundColor: "#F47624" }}>
                <GrFormNext />
                <GrFormNext />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
