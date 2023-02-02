import React from "react";
import "./Home.css";
import img from "../../images/20544.jpg";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../QuizTopic/QuizTopic";

const Home = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4 ">
        <div className="max-h-[600px] relative ">
          {/* overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[600px] bg-black/50 flex flex-col justify-center  rounded-lg">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-md">
              Test your knowledge
            </h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-md">
              <span>About</span>{" "}
              <span className="text-gray-200">web development</span>
            </h1>
          </div>
          <img
            className="w-full max-h-[600px] object-cover  rounded-lg"
            src={img}
            alt=""
          />
        </div>
        <div className="background ml-44"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {data.map((quizTopic) => (
          <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>
        ))}
      </div>
    </div>
  );
};

export default Home;
