import { Button, Form, Input } from "antd";
import { useParams } from "react-router-dom";

const BaseUserForm = ({
  method = "POST",
  endpoint = "/users",
  onFinishCallback,
}) => {
  const [form] = Form.useForm();

  const { id } = useParams();
  const onFinish = async (values) => {
    const url = endpoint + (method === "PUT" && id ? `/${id}` : "");
    const response = await fetch(`http://localhost:8001/api${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      form.resetFields();
    } else {
      console.error("Error:", response.status, response.statusText);
    }

    if (onFinishCallback) {
      onFinishCallback();
    }
  };

  return (
    <Form form={form} name="user-form" onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: method === "POST",
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: method === "POST", message: "Please input your email!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: method === "POST",
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label="First Name" name="first_name">
        <Input />
      </Form.Item>

      <Form.Item label="Last Name" name="last_name">
        <Input />
      </Form.Item>

      <Form.Item label="Birth Date" name="birth_date">
        <Input type="date" />
      </Form.Item>

      <Form.Item label="Age" name="age">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Height" name="height">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Weight" name="weight">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Is Active" name="is_active" valuePropName="checked">
        <Input type="checkbox" />
      </Form.Item>

      <Form.Item label="Bio" name="bio">
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Profile Picture" name="profile_picture">
        <Input />
      </Form.Item>

      <Form.Item label="Street" name={["address", "street"]}>
        <Input />
      </Form.Item>

      <Form.Item label="City" name={["address", "city"]}>
        <Input />
      </Form.Item>

      <Form.Item label="State" name={["address", "state"]}>
        <Input />
      </Form.Item>

      <Form.Item label="Zip" name={["address", "zip"]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BaseUserForm;
