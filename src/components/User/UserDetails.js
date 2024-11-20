import { Descriptions, Spin } from "antd";
import React, { useEffect, useState } from "react";

const UserDetails = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:8001/api/users/${userId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <Spin size="large" />;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <Descriptions title="User Details" bordered>
      <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
      <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
      <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
      <Descriptions.Item label="Bio">{user.bio}</Descriptions.Item>
    </Descriptions>
  );
};

export default UserDetails;
