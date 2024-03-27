import React from "react";

import Nav from './Nav';

const Header = props => 
    <header className="font-inter w-screen h-[6.3477vh] flex justify-between bg-dark-green">
        <img className="h-[8.88672vh] my-auto" src="./logo-contrast.png" alt="Logo do My Game List Contraste" />
        <Nav elements={props.elements}/>
    </header>

export default Header