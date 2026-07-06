import { useState } from "react";
import "./Users.css";
import { users as initialUsers } from "../../data/users";

export default function Users({ search = "" }) {
  const [users, setUsers] = useState(initialUsers);

  // DELETE USER
  const handleDelete = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };

  // FILTER USERS
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users">

      <h1>Users</h1>

      {/* TABLE */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "20px",
                  color: "#94A3B8",
                }}
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}