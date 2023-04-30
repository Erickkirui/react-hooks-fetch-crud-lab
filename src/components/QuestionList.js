import React,{useState,useEffect}from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {
  const [questions,setQuestions] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then ((r) => r.json())
    .then((data) =>{setQuestions(data)})
  },[])

  function handleDelete(id) {
    setQuestions(questions.filter(question => question.id !== id));
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map(question => (
          <QuestionItem key={question.id} onDelete={handleDelete} question={question} />
  ))}
      </ul>
    </section>
  );
}

export default QuestionList;
