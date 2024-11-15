import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = ({ children }) => {
  return (
    <div
      className="layout"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header style={{ flexShrink: 0 }}>
        <Header />
      </header>
      <div style={{ display: "flex", flexDirection: "row", flex: "1" }}>
        <aside style={{ flexShrink: 0 }}>
          <SideMenu />
        </aside>
        <main
          style={{ flex: "1", padding: "20px", backgroundColor: "#f0f2f5" }}
        >
          <div
            className="content"
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {children}
          </div>
        </main>
      </div>
      <footer style={{ flexShrink: 0 }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
