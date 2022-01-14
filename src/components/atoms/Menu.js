import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { pages } from "../../const/pages";
import NavItem from "../atoms/NavItem";

export default function Menu ({ close }) {
    return (
        <div className="menu">
            <MenuList>
                <NavItem as={NavLink} to={pages.glowna.path} style={{color: 'white', marginBottom: '1rem'}}>
                    Home
                </NavItem>
                <NavItem as={NavLink} to={pages.oNas.path} style={{color: 'white', marginBottom: '1rem'}}>
                    O Nas
                </NavItem>
                <NavItem as={NavLink} to={pages.zalety.path} style={{color: 'white', marginBottom: '1rem'}}>
                    Zalety
                </NavItem>
                <NavItem as={NavLink} to={pages.oferta.path} style={{color: 'white', marginBottom: '1rem'}}>
                    Oferta
                </NavItem>
                <NavItem as={NavLink} to={pages.kontakt.path} style={{color: 'white', marginBottom: '1rem'}}>
                    Kontakt
                </NavItem>
            </MenuList>
        </div>
    );
}

const MenuList = styled.ul`
    color: white;
    display: flex;
    flex-flow: column nowrap;
`;

const MenuItem = styled.li``;