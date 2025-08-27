import React from "react";

// Um componente simples para exibir o título
const Header = ({ title }) => {
  return (
    <header className="text-center my-4 bg-neutral-900">
      <h1 className="text-3xl font-bold m-0 text-white">{title}</h1>
    </header>
  );
};

export default Header;
