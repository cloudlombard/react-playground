import React from "react";
import BaseUserForm from "./Form";

class ModifyUserForm extends React.Component {
  render() {
    return (
      <BaseUserForm
        id={this.props.userId}
        method="PUT"
        endpoint="/users"
        onFinishCallback={this.props.onFinishCallback}
      />
    );
  }
}

export default ModifyUserForm;
