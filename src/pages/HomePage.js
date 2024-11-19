import { Typography } from "antd";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography.Title style={{ fontSize: "5rem" }}>
        Welcome to my React Playground!
      </Typography.Title>
      <Typography.Text type="secondary">
        This is a basic React application created with create-react-app.
      </Typography.Text>
    </div>
  );
};

export default HomePage;
