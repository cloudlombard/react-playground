import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
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
            <Link to={`/users/${user.id}`}>View Details</Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserList;
