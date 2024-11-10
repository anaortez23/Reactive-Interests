import React from "react";
import "../App.css";

const Header = ({ title }) => {
    return (
        <header className="custom-header">
            <h1 className="text-3xl font-bold">{title}</h1>
        </header>
    );
};

export default Header;
