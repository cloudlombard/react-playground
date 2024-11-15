import { FileOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

const SideMenu = () => {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      mode="inline"
      theme="dark"
    >
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="3" icon={<FileOutlined />}>
        Documents
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
