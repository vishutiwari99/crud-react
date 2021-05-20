import React from 'react'
import './UserTable.css';
const UserTable = props => (
  <>
    {/* <input type="text" name="name" onChange={(event) => props.filter(event.target.value)} /> */}
    <table>
      <thead >
        <tr className='table_title'>
          <th>Name</th>
          <th>Phone</th>
          <th>gender</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.filter((user) => {
            if (props.search === "") {
              return user
            } else if (user.name.includes(props.search)) {
              return user
            }
          }).map(user => (
            <tr key={user.id} >
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td >

                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="button delete_btn"
                >
                  X
              </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  </>
)

export default UserTable
