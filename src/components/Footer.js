import React from "react";
import { Link } from "react-router-dom";

export default function CustomFooter() {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
        padding: "20px 0",
      }}
    >
      <p>
        Copyright &copy; 2023{" "}
        <Link to="/" style={{ color: "#61dafb" }}>
          React Playground
        </Link>
      </p>
      <p>
        <Link to="/about" style={{ color: "#61dafb" }}>
          About
        </Link>{" "}
        |{" "}
        <Link to="/terms" style={{ color: "#61dafb" }}>
          Terms of Service
        </Link>{" "}
        |{" "}
        <Link to="/privacy" style={{ color: "#61dafb" }}>
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
