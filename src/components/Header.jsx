import React from "react";

// Um componente simples para exibir o título
const Header = ({ title }) => {
  return (
    <header
      style={{
        textAlign: "center",
        margin: "1rem 0",
        background: "#212121",
    
      }}
    >
      <h1
        style={{ fontSize: "2rem", fontWeight: 700, margin: 0, color: "#fff" }}
      >
        {title}
      </h1>
    </header>
  );
};

export default Header;
