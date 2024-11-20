import { Button, Modal } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import ModifyUserForm from "../components/User/Modify";
import UserDetails from "../components/User/UserDetails";

const UserDetailsPage = () => {
  const { id } = useParams();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <UserDetails userId={id} />
      <Button type="primary" onClick={showModal}>
        Modify User
      </Button>
      <Modal
        title="Modify User"
        visible={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <ModifyUserForm userId={id} />
      </Modal>
    </>
  );
};

export default UserDetailsPage;
