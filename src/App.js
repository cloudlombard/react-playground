import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import FileUploadPage from "./pages/FileUploadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/upload"
          element={
            <Layout>
              <FileUploadPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
