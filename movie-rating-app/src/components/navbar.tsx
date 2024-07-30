import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const Navbar = ({ isLogin, setIsLogin }) => {


    const handleLogOutClick = () => {
        setIsLogin(false);
    }

    return (
        <Menu fixed="top" size="huge" color="black" inverted>

            {isLogin ? (
                <>
                    <Menu.Item as={Link} to="/homepage" style={{ fontSize: "1.3rem", color: "red", fontWeight: "600" }} >Home</Menu.Item>

                    <Menu.Item as={Link} to="/rated" style={{ fontSize: "1.2rem", color: "red", fontWeight: "600" }} >Rated</Menu.Item>

                    <Menu.Menu position="right">
                        <Menu.Item as={Link} to="/" style={{ fontSize: "1.2rem", color: "red", fontWeight: "600" }} onClick={handleLogOutClick}>Log Out</Menu.Item>

                    </Menu.Menu>
                </>
            ) : (
                <>
                    <Menu.Item style={{ fontWeight: "900", fontSize: "3rem", color: "red", padding: "1rem", marginLeft: "1.5rem" }}>R</Menu.Item>
                    <Menu.Item style={{ margin: "0 auto", color: "red", fontWeight: "600", fontSize: "2rem", letterSpacing: "9px" }}>RATEFLIX</Menu.Item>
                    <Menu.Item style={{ fontWeight: "900", fontSize: "3rem", color: "red", padding: "1rem", marginRight: "1.5rem" }}>R</Menu.Item>
                </>
            )}


        </Menu>
    )
}