import React from "react";

const BackgroundComponent = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.jpg'})` }}
        >
            <h1 className="text-4xl font-bold">Welcome to Ana's Workout App</h1>
        </div>
    );
};

export default BackgroundComponent;