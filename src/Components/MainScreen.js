
import './MainScreen.css'
import React from 'react'
import Question from './Question'
import { nanoid } from "nanoid"




export default function MainScreen() {

    const [triviaData, setTriviaData] = React.useState([])
    const [answersChecked, setAnswersChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)

    function getData() {
        fetch("https://opentdb.com/api.php?amount=4&category=14&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => {

                const dataArr = data.results.map(element => {

                    const correctAnswer = element.correct_answer;
                    const incorrectAnswers = element.incorrect_answers;

                    function createOptionsArray(incorrectAnswers, correctAnswer) {
                        const randomNum = Math.floor(Math.random() * 4);
                        let options = [...incorrectAnswers]
                        options.splice(randomNum, 0, correctAnswer)
                        return options.map(option => {
                            return {
                                option: option,
                                clicked: false,
                                id: nanoid(),
                                correctAnswer: false,
                                wrongAnswer: false
                            }
                        })
                    }

                    return {
                        question: element.question,
                        correctAnswer: correctAnswer,
                        incorrectAnswers: incorrectAnswers,
                        options: createOptionsArray(incorrectAnswers, correctAnswer)
                    }
                })
                setTriviaData(dataArr)
            })

    }


    React.useEffect(() => {
        getData()
    }, [])




    function clicked(event) {
        setTriviaData(prevData => {
            return prevData.map(obj => {
                return {
                    ...obj,
                    options: obj.options.map(option => {
                        return {
                            ...option,
                            clicked: event.target.id === option.id ? !option.clicked : option.clicked
                        }
                    })
                }
            })
        })
    }


    function checkAnswers() {

        console.log('checking answers')
        setTriviaData(prevData => {
            return prevData.map(prevObj =>
            ({
                ...prevObj,
                options: prevObj.options.map(option => {
                    if(option.clicked && prevObj.correctAnswer === option.option) {
                        console.log('c.a' + prevObj.correctAnswer)
                        console.log('o' + option.option)
                        setScore(prevScore => prevScore + 1)
                    }

                    return {
                        ...option,
                        correctAnswer: prevObj.correctAnswer === option.option ? true : false,
                        wrongAnswer: option.clicked && prevObj.correctAnswer !== option.option ? true : false
                    }
                })
            }))
        })
        setAnswersChecked(true)
    }


    function playAgain() {
        getData()
        setAnswersChecked(false)
        setScore(0)
    }


    const questions = triviaData.map(triviaObj => {
        return (
            <Question
                question={triviaObj.question}
                options={triviaObj.options}
                clicked={clicked}
                key={nanoid()}
            />
        )
    })


    return (
        <div className='main'>
            <div>
                {questions}
            </div>
            {
                answersChecked ?
                    <div>
                        <div>{`Your score is ${score}/4`}</div>
                        <button onClick={playAgain}>Play again</button>
                    </div> :
                    <button onClick={checkAnswers}>Check answers</button>
            }
        </div>
    )
}