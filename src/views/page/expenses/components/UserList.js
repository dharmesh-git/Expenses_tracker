import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../Context";

const UserList = () => {
  const {
    users,
    userLength,
    editMode,
    cancelEdit,
    updateUser,
    deleteUser,
  } = useContext(AppContext);

  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateUser(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (id, user_desc, user_Amount,user_date,Category) => {
    setNewData({ id, user_desc, user_Amount,user_date,Category });
    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };

  return !userLength ? (
    <p>{userLength === null ? "Loading..." : "Please insert some users."}</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, user_desc, user_Amount,user_date,Category,isEditing }) => {
          return isEditing === true ? (
            <tr key={id}>
              <td>
                <input
                  type="number"
                  defaultValue={user_Amount}
                  onChange={(e) => updateNewData(e, "user_Amount")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={Category}
                  onChange={(e) => updateNewData(e, "user_catg")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_desc}
                  onChange={(e) => updateNewData(e, "user_desc")}
                />
              </td>
              <td>
                <input
                  type="date"
                  defaultValue={user_date}
                  onChange={(e) => updateNewData(e, "user_date")}
                />
              </td>
              <td>
                <button className="btn green-btn" onClick={() => saveBtn()}>
                  Save
                </button>
                <button
                  className="btn default-btn"
                  onClick={() => cancelEdit(id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={id}>
              <td>{user_Amount}</td>
              <td>{Category}</td>
              <td>{user_desc}</td>
              <td>{user_date}</td>
              <td>
                <button
                  className="btn default-btn"
                  onClick={() => enableEdit(id, user_desc, user_Amount,user_date,Category)}
                >
                  Edit
                </button>
                <button
                  className="btn red-btn"
                  onClick={() => deleteConfirm(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
