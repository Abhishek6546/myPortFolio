import React from "react";

import todo from"../../public/todo.jpeg";
import tictac from"../../public/tictac.jpeg";
import Votingapp from "../../public/Votingapp.png"
import jobportal from"../../public/jobportal.png";
import ecommerce from"../../public/ecommerce.png";
import bookstore from"../../public/bookstore.png";
import mockmate from "../../public/mockmate.png"

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: ecommerce,
      name: "Forever",
      paragraph:
        "E-Commerce website using MernStack",
      demoLink: "https://forever-frontend-pearl.vercel.app/",
      sourceCodeLink: "https://github.com/Abhishek6546/E-Commerce", 
    },
    {
      id: 2,
      logo: bookstore,
      name: "BookHeaven",
      paragraph:
        "Bookstore website using Reactjs,Nodejs and MongoDb",
      demoLink: "https://bookstore78.netlify.app/",
      sourceCodeLink: "https://github.com/Abhishek6546/BookStore", 
    },
    {
      id: 3,
      logo: jobportal,
      name: "Hirrd",
      paragraph:
        "JobPortal website using Reactjs and Supabase for backend",
      demoLink: "https://hirrdjobportal.netlify.app/",
      sourceCodeLink: "https://github.com/Abhishek6546/Job-Portal", 
    },
    {
      id: 4,
      logo: mockmate,
      name: "MockMate",
      paragraph:
        "AI MockInterviewer Website using Nextjs ",
      demoLink: "https://mock-mate-three.vercel.app/",
      sourceCodeLink: "https://github.com/Abhishek6546/MockMate", 
    },
    {
      id: 5,
      logo:Votingapp ,
      name: "BallotBox",
      paragraph:
        "Voting website using mern stack technology",
      demoLink: "https://voting-app-theta-two.vercel.app/", 
      sourceCodeLink: "https://github.com/Abhishek6546/VotingApp", 
    },
    {
      id: 6,
      logo: todo,
      name: "Todo App",
      paragraph:
        "Todo App with Reactjs and it Store Todos in Local Storage",
      demoLink: "https://todo-app-bice-three-35.vercel.app/", 
      sourceCodeLink: "https://github.com/Abhishek6546/TodoApp", 
    },
    {
      id: 7,
      logo: tictac,
      name: "TicTacToe",
      paragraph:
        "TicTacToe Game with HTML CSS and Javascript",
      demoLink: "https://tictactoebyabhishek123.netlify.app/",
      sourceCodeLink: "https://github.com/Abhishek6546/TicTacToe", 
    },
   
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, paragraph, demoLink, sourceCodeLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{paragraph}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                  >
                    Demo
                  </a>
                )}
                {sourceCodeLink && (
                  <a
                    href={sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  >
                    Source code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
