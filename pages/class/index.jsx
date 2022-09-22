import React, { useState, useEffect } from "react";
import { InputGroup, Form, Button, Table } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { MdDeleteOutline } from "react-icons/md";
import { getCookie } from "cookies-next";
// Components
import { useThemeContext } from "../../context/contextTheme";
import SubNavbar from '../../components/SubNavbar'
import AddModal from '../../components/AddModal';
import axios from 'axios';

export const getServerSideProps = async (context) => {
  const token = getCookie("token", context);
  const response = await fetch(`https://grupproject.site/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response)
  const userList = await response.json();
  return {
    props: {
      mentor: userList,
    },
  };
};

const Index = (props) => {
  // Dont distract
  const { isDark } = useThemeContext()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.mentor.data);

  // Initiate State
  const [allClass, setAllClass] = useState();
  const [newClass, setNewClass] = useState({
    nama_class: "",
  });
  const [editClass, setEditClass] = useState([]);
  const [idClass, setIdClass] = useState();
  const [mentor, setMentor] = useState();
  // console.log(mentor);

  // Get All Class
  const getClass = async () => {
    var config = {
      method: "get",
      url: "https://grupproject.site/class",
    };

    await axios(config)
      .then((response) => {
        console.log(response.data.data);
        setAllClass(response.data.data);
        console.log(allClass);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getClass();
  }, []);

  // Add new class & Edit class
  const handleInput = (e) => {
    setNewClass(e.target.value);
    setEditClass(e.target.value);
  };

  const handleInputMentor = (e) => {
    setMentor(e.target.value)
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idClass) {
      var data = {
        nama_class: editClass,
        user_id: parseInt(mentor)
      };
      var config = {
        method: "put",
        url: `https://grupproject.site/class/${idClass}`,
        data: data,
      };

      axios(config)
        .then(() => {
          alert("Edit class success!");
          getClass();
          handleClose();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    } else {
      var data = {
        nama_class: newClass,
        user_id: parseInt(mentor),
      };
      var config = {
        method: "post",
        url: "https://grupproject.site/class",
        data: data,
      };

      axios(config)
        .then(() => {
          alert("Add class success!");
          getClass();
          handleClose();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  };

  const handleEdit = ({ id }) => {
    handleShow();
    setIdClass(id);
  };

  // handle delete
  const handleDelete = (id) => {
    var config = {
      method: "delete",
      url: `https://grupproject.site/class/${id}`,
    };
    axios(config)
      .then(() => {
        console.log(idClass);
        alert("Class deleted!");
        getClass();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div style={{ backgroundColor: '#F9F9F9', minHeight: "100vh" }} className={isDark ? "bg-dark text-white" : ""}>
      <div>
        <div className='px-3'>
          <SubNavbar
            title="Class List"
          />
          <div className={isDark ? "bg-dark text-white p-4 mt-3" : "p-4 mt-3"}>
            <InputGroup style={{ width: '300px' }}>
              <InputGroup.Text id='basic-addon1' style={{ backgroundColor: '#17345F', color: 'white' }}>Search</InputGroup.Text>
              <Form.Control
                placeholder="search here..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <div style={{ paddingTop: "15px" }}>
              <Button
                onClick={handleShow}
                style={{
                  width: "300px",
                  backgroundColor: "#F47624",
                  borderColor: "#F47624",
                }}
              >
                Add New Class
              </Button>
            </div>
            <div style={{ paddingTop: "30px" }}>
              <Table className={isDark ? "text-white" : ""} responsive>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allClass?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.nama_class}</td>
                        <td>
                          <a onClick={() => handleEdit(item)}>
                            <BiEditAlt />
                          </a>
                        </td>
                        <td>
                          <MdDeleteOutline
                            onClick={() => handleDelete(item.id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className="me-5 float-end">
              <Button variant={isDark ? "light" : ""} style={{backgroundColor : "#F47624"}}>
                <GrFormPrevious />
                <GrFormPrevious />
              </Button>
              <Button variant={isDark ? "light" : ""} className="ms-4" style={{backgroundColor : "#F47624"}}>
                <GrFormNext />
                <GrFormNext />
              </Button>
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
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        mentor={props.mentor.data}
        handleInputMentor={handleInputMentor}
      />
    </div>
  );
};

export default Index;
