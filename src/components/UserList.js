import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  function getUsers() {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="disp_flex_between">
        <h2>Blue Whales</h2>
        <button className="btn" onClick={getUsers}>
          Get User List
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img
                    src={user.avatar}
                    alt={user.first_name + " " + user.last_name}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="err_msg" colSpan={4}>No data found to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
