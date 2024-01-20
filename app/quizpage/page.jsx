"use client";
import React from 'react'
import { useState } from 'react';
const page = () => {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState();
    const [showQuiz, setshowQuiz] = useState(true);

    const increment = () => {
        setStep(step + 1);
        isCorrect.target.style = "bg-green-200";
        if (step === qnArray.length - 1) {
            setshowQuiz(false);
        }
    };
    const checkAnswer = (answer, e) => {
      try {
        isCorrect.target.style = "bg-green-200";
      } catch (error) {
        console.log(error)
        
      }
        
        if (answer === qnArray[step].correctAns) {
            setScore(score + 1);
            e.target.style.backgroundColor = "green";
        } else {
          setScore(score-1)
            e.target.style.backgroundColor = "red";
        }
        setIsCorrect(e);
    };
    const qnArray = [
        {
            qn1: "Q1. What is sustainability in the context of the environment?",
            answers: [
                "Rapid resource depletion",
                "Meeting the needs of the present without compromising the ability of future generations to meet their own needs",
                "Industrial pollution",
                "Deforestation for economic growth",
            ],
            correctAns:
                "Meeting the needs of the present without compromising the ability of future generations to meet their own needs",
        },
        {
            qn1: "Q2. What is the purpose of the 3 R's in sustainability?",
            answers: [
                "Reading, 'Rithmetic, and Writing",
                "Reduce, Reuse, Recycle",
                "Renewable, Recyclable, Replenishable",
                "Reforestation, Resource management, Rainwater harvesting",
            ],
            correctAns: "Reduce, Reuse, Recycle",
        },
        {
            qn1: "Q3. What is the term for the loss of a species from a particular habitat or from the entire planet?",
            answers: ["Evolution", "Extinction", "Migration", "Overpopulation"],
            correctAns: "Extinction",
        },
        {
            qn1: "Q4. Which of the following is an example of a sustainable practice in agriculture?",
            answers: [
                "Heavy use of chemical pesticides",
                "Monoculture farming",
                "Agroforestry",
                "Excessive irrigation",
            ],
            correctAns: "Agroforestry",
        },
        {
            qn1: "Q5. Which of the following is NOT a characteristic of sustainable development?",
            answers: [
                "Environmental conservation",
                "Social inclusions",
                "Unlimited exploitation of resources",
                "Economic viability",
            ],
            correctAns: "Unlimited exploitation of resources",
        },
    ];
    return (
        <>
            {showQuiz ? (
                <div className="flex flex-col items-center justify-center gap-5  bg-green-100 h-screen">
                    <div className="flex flex-col gap-4 w-[40vw] ">
                        <div className="bg-green-400 font-bold text-xl min-h-[8vh] w-[40vw] flex items-center mt-5 p-4 rounded">
                            {qnArray[step].qn1}
                        </div>
                        <div className="flex flex-col gap-5">
                            <div
                                onClick={(e) => {
                                    checkAnswer(qnArray[step].answers[0], e);
                                }}
                                className="bg-green-200 font-bold h-[5vh] flex items-center px-5 rounded"
                            >
                                {qnArray[step].answers[0]}
                            </div>
                            <div
                                onClick={(e) => {
                                    checkAnswer(qnArray[step].answers[1], e);
                                }}
                                className="bg-green-200 font-bold h-[5vh] flex items-center px-5 rounded"
                            >
                                {qnArray[step].answers[1]}
                            </div>
                            <div
                                onClick={(e) => {
                                    checkAnswer(qnArray[step].answers[2], e);
                                }}
                                className="bg-green-200 font-bold h-[5vh] flex items-center px-5 rounded"
                            >
                                {qnArray[step].answers[2]}
                            </div>
                            <div
                                onClick={(e) => {
                                    checkAnswer(qnArray[step].answers[3], e);
                                }}
                                className="bg-green-200 font-bold h-[5vh] flex items-center px-5 rounded"
                            >
                                {qnArray[step].answers[3]}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={increment}
                            className="bg-green-400 w-[10vw] h-[5vh] rounded"
                        >
                            next
                        </button>
                    </div>
                </div>
            ) : (
                <div className="w-[100vw] h-[100vh] text-white flex justify-center items-center ">
                    <div className="bg-[#005936] w-[40vw] h-[60vh] flex items-center justify-center font-bold text-4xl rounded">
                        Total rewards for you : {score}
                    </div>
                </div>
            )}
        </>
    );
            }

export default page