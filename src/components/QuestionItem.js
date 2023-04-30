import React from "react";

function QuestionItem({ question,onDelete}) {
  const { id, prompt, answers, correctIndex } = question;
  

  const options = answers?.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  const deleteQuestion = () => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete question');
        }
        onDelete(id); // call parent component's onDelete function to update state
      })
      .catch(error => console.error(error));
  };
  
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
