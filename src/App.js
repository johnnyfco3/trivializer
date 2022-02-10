import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Start from './Pages/Start';
import Questions from './Pages/Questions';
import { useEffect, useState } from 'react';

function App() {

  const [qArray, setQArray] = useState([]);
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  const [confirm, setConfirm] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
  })

  useEffect(()=>{
    async function getQuestion(){
      const res = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
      const data = await res.json();
      setQArray(data.results)
    }
    getQuestion()
  },[])

  const [choices, setChoices] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    

  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route exact path="/questions" element={
                                                  <Questions 
                                                    qArray={qArray} 
                                                    handleSubmit={handleSubmit} 
                                                    answers={answers}
                                                    setAnswers={setAnswers}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
