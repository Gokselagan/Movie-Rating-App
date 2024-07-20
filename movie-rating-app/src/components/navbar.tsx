import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <Menu fixed="top" size="huge" color="black" inverted>

            <Menu.Item  as={Link} to="/" style={{fontSize: "1.3rem", color: "red", fontWeight: "600" }} >Home</Menu.Item>

            <Menu.Item  as={Link} to="/rated" style={{fontSize: "1.2rem", color:"red", fontWeight: "600" }} >Rated</Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item as={Link} to="/auth" style={{fontSize: "1.2rem", color:"red", fontWeight: "600" }} >Auth</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}