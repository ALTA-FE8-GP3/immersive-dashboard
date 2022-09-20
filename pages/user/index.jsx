import React from 'react'
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import SubNavbar from '../../components/SubNavbar';

const Index = () => {

  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      <div>
        <div className='px-3'>
          <SubNavbar
            title="User List"
          />
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
                <li className='page-item '>
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