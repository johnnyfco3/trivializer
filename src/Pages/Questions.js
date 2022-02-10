import React, { useState } from "react"

export function Questions(props){

    function handleChange(e){
        const [name, checked] = e.target;
        props.setAnswers((preState)=>{
            return{
                ...preState,
                [name]: checked
            }
        })

    }

    return(
        <div id="questions">
            <form onSubmit={props.handleSubmit}>
                <h2>How would one say goodbye in Spanish</h2>
                <div className="choices">
                    <input type="radio" id="choice1" name="question1" value="Hola" checked={props.answers.question1 = "Hola"} onChange={handleChange}/>
                    <label for="choice1">Hola</label>
                </div>
                <div className="choices">
                    <input type="radio" id="choice1" name="question2" value="Hola" checked={props.answers.question2 = "Hola"} onChange={handleChange}/>
                    <label for="choice1">Hola</label>
                </div>
                <div className="choices">
                    <input type="radio" id="choice1" name="question3" value="Hola" checked={props.answers.question3 = "Hola"} onChange={handleChange}/>
                    <label for="choice1">Hola</label>
                </div>
                <div className="choices">
                    <input type="radio" id="choice1" name="question4" value="Hola" checked={props.answers.question4 = "Hola"} onChange={handleChange}/>
                    <label for="choice1">Hola</label>
                </div>
                <div className="choices">
                    <input type="radio" id="choice1" name="question5" value="Hola" checked={props.answers.question5 = "Hola"} onChange={handleChange}/>
                    <label for="choice1">Hola</label>
                </div>
                <div className="bottom">
                    <p>You scored 5/5 correct answers</p><button>Submit Answers</button>
                </div>
            </form>
        </div>
    )
}

export default Questions;