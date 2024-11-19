import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FileUploadPage from "./pages/FileUploadPage";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/upload" element={<FileUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
