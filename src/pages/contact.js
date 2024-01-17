import React from "react";
import SocialItem from "../components/SocialItem";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
 
const Contact = () => {
    return (
        <div className="page">
            <div className="page-content">
                <div className="container m-auto px-10 py-20 sm:px-10 md:px-12 lg:px-24 xl:px-60">
                    <div className="grid grid-cols-1 gap-8">
                        <h1 className="title grid">Hey there,<br/>Code Connoisseurs 🚀</h1>
                        <p> Welcome to the dazzling world of pixels, where every line of code is a dance move, and bugs are just party crashers we didn't invite. Whether you're here to explore my portfolio, stay updated on my latest projects, or simply connect with like-minded individuals, I'm grateful for your presence.</p> 
                        
                        <h2 className="subtitle">Let's Stay Connected ✨</h2>
                        <div>
                            <SocialItem faIcon={<FaLinkedin />} social="LinkedIn" url="https://www.linkedin.com/in/madelineponiman/" description="For a more professional touch, connect with me on LinkedIn. Stay updated on my career milestones, and let's explore potential collaborations and opportunities together." />
                            <SocialItem faIcon={<FaGithub />} social="GitHub" url="https://github.com/joanmadeline/" description="Explore the code galaxy with me on GitHub. From sleek UI designs to interactive masterpieces, this is where the magic of version control happens. Fork, commit and code, anyone?" />
                            <SocialItem faIcon={<MdMarkEmailUnread />} social="Send me an Email" url="mailto: meddonaldss@gmail.com" description="Have a professional inquiry, collaboration proposal, or just want to reach out directly? Hit me up by dropping me an email at meddonaldss@gmail.com, and let's start a conversation!" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Contact;