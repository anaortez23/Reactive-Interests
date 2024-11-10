import React from "react";

const WorkoutGrid = ({ programs, onProgramClick }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {programs.map((program, index) => (
                <div
                    key={index}
                    className="p-4 border rounded-lg shadow-md bg-white cursor-pointer"
                    onClick={() => onProgramClick(program)}
                >
                    <h3 className="text-xl font-bold">{program.name}</h3>
                    <p>Duration: {program.duration}</p>
                    <p>Difficulty: {program.difficulty}</p>
                </div>
            ))}
        </div>
    );
};

export default WorkoutGrid;
