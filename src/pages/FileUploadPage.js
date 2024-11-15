import { Button, Upload } from "antd";
import { useState } from "react";

const FileUploadPage = () => {
  const [fileList, setFileList] = useState([]);

  const handleUpload = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onRemove = (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      fileList={fileList}
      onChange={handleUpload}
      onRemove={onRemove}
      multiple
    >
      <Button type="primary">Select File</Button>
    </Upload>
  );
};

export default FileUploadPage;
