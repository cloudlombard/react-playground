import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Users</h1>
      <Row gutter={[16, 16]}>
        {users.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
            <Card
              title={user.name}
              bordered={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UsersPage;
