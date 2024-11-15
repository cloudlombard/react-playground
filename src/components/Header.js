import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        backgroundColor: "#333",
        color: "#fff",
        height: "4rem",
      }}
    >
      <Link to="/">
        <h1 style={{ margin: 0 }}>React Playground</h1>
      </Link>
      <nav>
        <Link to="/file-upload">
          <span>File Upload</span>
        </Link>
      </nav>
    </header>
  );
}
