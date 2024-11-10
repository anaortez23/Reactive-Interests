import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <p>&copy; 2024 Workout App. All rights reserved.</p>
            <p>
                Follow us on{" "}
                <a href="https://twitter.com" className="text-blue-400">
                    Twitter
                </a>{" "}
                and{" "}
                <a href="https://instagram.com" className="text-pink-400">
                    Instagram
                </a>
            </p>
        </footer>
    );
};

export default Footer;
