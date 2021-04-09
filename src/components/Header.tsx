import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="mb-6" data-testid="Header">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    </header>
  );
};

export default Header;
