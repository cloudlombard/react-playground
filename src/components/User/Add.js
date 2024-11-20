import React from "react";
import BaseUserForm from "./Form";

class AddUserForm extends React.Component {
  render() {
    return (
      <BaseUserForm
        method="POST"
        endpoint="/users"
        onFinishCallback={this.props.onFinishCallback}
      />
    );
  }
}

export default AddUserForm;
