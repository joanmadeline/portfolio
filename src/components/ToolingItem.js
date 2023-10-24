import React from "react";
import './tooling.css';
import { Icon } from "react-icons";


const ToolingItem = (props) => {
    const tooling = props.tooling;
    const faIcon = props.faIcon;

    return (
        <div className="tooling-item grid grid-cols-2 bg-black rounded-md py-3 px-4">
            <div className="text-3xl text-red h-max my-auto">{faIcon}</div>
            <p className="leading-none font-medium h-max my-auto">{tooling}</p>
        </div>
    )
}

export default ToolingItem;