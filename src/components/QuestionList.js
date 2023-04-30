import React,{useState,useEffect}from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions,setQuesions] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then ((r) => r.json())
    .then((data) =>{setQuesions(data)})
  },[])


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map(question => (
          <QuestionItem key={question.id} question={question} />
  ))}
      </ul>
    </section>
  );
}

export default QuestionList;
