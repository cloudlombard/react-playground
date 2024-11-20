import { Button, Modal } from "antd";
import React, { useState } from "react";
import AddUserForm from "../components/User/Add";
import UserList from "../components/User/UserList";

const UsersPage = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const handleShowAddUserForm = () => setShowAddUserForm(true);
  const handleHideAddUserForm = () => setShowAddUserForm(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Users</h1>
      <Button type="primary" onClick={handleShowAddUserForm}>
        Add User
      </Button>
      <Modal
        title="Add User"
        visible={showAddUserForm}
        onOk={handleHideAddUserForm}
        onCancel={handleHideAddUserForm}
      >
        <AddUserForm onFinish={handleHideAddUserForm} />
      </Modal>
      <UserList />
    </div>
  );
};

export default UsersPage;
