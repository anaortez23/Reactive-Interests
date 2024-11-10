import React, { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                className="w-full text-left py-2 font-semibold"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </button>
            {isOpen && <div className="pl-4 pb-2">{content}</div>}
        </div>
    );
};

export default Accordion;
