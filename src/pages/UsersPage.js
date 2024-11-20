import React from "react";
import UserList from "../components/User/UserList";

const UsersPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Users</h1>
      <UserList />
    </div>
  );
};

export default UsersPage;
