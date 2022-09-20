import React from 'react'
import { CgProfile } from "react-icons/cg";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const Index = () => {
  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      <div>Tes</div>
      <div>
        <h4 style={{ fontSize: '2rem' }} className='px-3'>Immersive Bootcamp</h4>
        <div className='px-3'>
          <div className='row'>
            <div className='col-6'>
              <p style={{ fontSize: '20px' }}>User List</p>
            </div>
            <div className='col-6'>
              <p className='text-end'>
                <p><CgProfile style={{ fontSize: '40px', paddingRight: '10px' }} /> Hello, (Your name)</p>
              </p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #CAC8C8' }}></div>
          <div style={{ borderTop: '1px solid #CAC8C8', marginTop: '10px' }}></div>
          <div className='bg-white mt-3 p-4'>
            <div className='input-group flex-nowrap' style={{ width: '300px' }}>
              <span className='input-group-text' id='addon-wrapping' style={{ backgroundColor: '#17345F', color: 'white' }}>Search</span>
              <input type='text' className='form-control' placeholder='search here..' aria-label='Search' aria-describedby='addon-wrapping' />
            </div>
            <div style={{ paddingTop: '15px' }}>
              <button style={{ width: '300px', backgroundColor: '#F47624', borderColor: '#F47624' }}>Add New User</button>
            </div>
            <div style={{ paddingTop: '30px' }} className='table-responsive'>
              <table className='table'>
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
              </table>
            </div>
            <div>
              <ul className='pagination'>
                <li className='page-item disabled'>
                  <a className='page-link'>Prev</a>
                </li>
                <li className='page-item'><a className='page-link' href='#'>1</a></li>
                <li>
                  <a>2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index