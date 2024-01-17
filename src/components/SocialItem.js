import React from "react";
import './tooling.css';


const SocialItem = (props) => {
    const social = props.social;
    const faIcon = props.faIcon;
    const url = props.url;
    const description = props.description;

    return (
        <div className="mb-6">
            <div className="mb-2">
                <a href={url} target="blank" className="text-white hover:text-red transition duration-300">
                    <div className="flex items-center">
                        <h3>{faIcon}</h3>
                        <h3 className="ml-2">{social}</h3>
                    </div>
                </a>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default SocialItem;