import React, { useState } from "react";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import WorkoutGrid from "./components/WorkoutGrid";
import BackgroundComponent from "./components/BackgroundComponent"; // Import the BackgroundComponent
import "./App.css";

const accordionData = [
  { title: "Warm-Up", content: "5-10 minutes of stretching and breathing exercises." },
  { title: "Strength Training", content: "3 sets of 8-12 reps for each exercise." },
  { title: "Cardio", content: "30 minutes of 170 - 180bpm cardio." },
];

const carouselData = [
  { image: "./images/squats1.jpg", title: "Squats", description: "Strength exercise for lower body." },
  { image: "./images/pushups3.avif", title: "Push-Ups", description: "Strength exercise for upper body." },
  { image: "./images/plank1.jpg", title: "Plank", description: "Core stability exercise." },
];

const workoutPrograms = [
  {
    name: "Full Body Blast",
    duration: "45 mins",
    difficulty: "Intermediate",
    routine: ["Squats - 3 sets of 12 reps", "Push-Ups - 3 sets of 15 reps", "Plank - 3 sets of 1 min hold"]
  },
  {
    name: "Cardio Burn",
    duration: "30 mins",
    difficulty: "Beginner",
    routine: ["Jump Rope - 5 mins", "High Knees - 3 sets of 1 min", "Burpees - 3 sets of 10 reps"]
  },
  {
    name: "Core Strength",
    duration: "20 mins",
    difficulty: "Advanced",
    routine: ["Sit-Ups - 3 sets of 20 reps", "Leg Raises - 3 sets of 15 reps", "Russian Twists - 3 sets of 30 reps"]
  },
  {
    name: "Leg Day",
    duration: "40 mins",
    difficulty: "Intermediate",
    routine: ["Lunges - 3 sets of 12 reps each leg", "Leg Press - 3 sets of 10 reps", "Calf Raises - 4 sets of 15 reps"]
  },
];

function App() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen " style={{ backgroundColor: "aliceblue" }} >
      <Header title="Ana's Workout App" />
      <main className="flex-grow p-4 max-w-6xl mx-auto">
        <Carousel items={carouselData} />
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <section className="md:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Workout Routine</h2>
            {accordionData.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </section>
          <section className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Workout Programs</h2>
            <WorkoutGrid programs={workoutPrograms} onProgramClick={handleProgramClick} />
          </section>
        </div>
      </main>
      <Footer />

      {/* Modal for Workout Details */}
      {showModal && selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            {/* Close Icon */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold">{selectedProgram.name} - Routine</h3>
            <ul className="list-disc pl-5 mt-2">
              {selectedProgram.routine.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
