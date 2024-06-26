import React from "react";

const Nav = props => {
    let suporte = <li className="text-light-green text-[max(.90278vw,.73125rem)] uppercase hover:text-light-green-600"><a href="/suporte"><u>suporte</u></a></li>
    if (props.semSuporte) {
        suporte = ""
    }
    return (<nav className="font-extralight mr-[.9375rem] text-[.90278vw] max-sm:m-0">
        <ul className="h-full flex gap-3 mr-1 *:my-auto">
            {suporte}
            {props.elements.map((element, index) => <li key={index}>{element}</li> )}
        </ul>
    </nav>)}

export default Nav