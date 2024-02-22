import { useState } from "react"
import questions from "./utils/questions"

function App() {
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState();
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleUserAnswer = (option)=>{
    setUserAnswer(option);
  }
  const handleNext = ()=>{
    if(userAnswer==questions[currentQuestion].answer){
      console.log("Hello");
      setScore(score+1);
      setShowAnswer(false);
    }
    setCurrentQuestion(currentQuestion+1);
    setUserAnswer(undefined);
  }
  const handleAnswer = ()=>{
    setShowAnswer(!showAnswer)
  }
  return <>
  <div className="p-2 m-2 flex flex-col content-center items-center">
    <h1 className="text-7xl font-mono font-extrabold">हिंदी भाषा</h1>
    {currentQuestion==questions.length ?(
      <div>
        <h1>Test Completed</h1>
        <h2>Your Score is {score}</h2>
      </div>
    ) :
    (
      <div className="w-full">
        <div className="border border-black mt-5 p-2 font-mono ">
              <h2 className="text-2xl ">Question {currentQuestion+1}: </h2>
              <h3 className="text-2xl mb-2 mt-5 bg-blue-500 p-2 text-white">{questions[currentQuestion].question}</h3>
            <ul>
              {
                questions[currentQuestion].options.map((option,index)=>(
                  <li key={index} className="mt-1">
                    <input type="radio" value={option} name={`question ${currentQuestion}`} onChange={()=>handleUserAnswer(option)} checked={option === userAnswer}/>
                    {option}
                  </li>
                ))
              }
            </ul>
            <button className="bg-teal-500 px-4 py-2 rounded-full text-white mt-2" onClick={handleNext}>{`${(currentQuestion==questions.length-1)?"Submit":"Save and Next"}`}</button>
        </div>
        <div>
          <button className="bg-teal-600 px-4 py-2 rounded-full text-white mt-2" onClick={handleAnswer}>{`${showAnswer?"Hide Answer":"Show Answer"}`}</button>
          {
            showAnswer?<div>
                <h1>Correct Answer is: </h1>
                <h2>{questions[currentQuestion].answer}</h2>
            </div>:<div></div>
          }
        </div>
      </div>
    )
}
</div>
</>
}

export default App
