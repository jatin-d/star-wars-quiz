import React from "react";
import { useRef } from "react"
import './CustomTextInput.scss'
import { TextInput } from '../utility/utils'
import { ApplicationState } from '../utility/utils'

const CustomTextInput: React.FC<{ currentQuestion: TextInput, parentState: ApplicationState, updateState: React.Dispatch<ApplicationState> }> = props => {
    const question = props.currentQuestion
    const inputRef = useRef<HTMLInputElement>(null)
    const inputChangeHandler = () => {
        if (inputRef.current && (inputRef.current.value !== "" || (props.parentState.answer[question.id].userAnswer !== "" && inputRef.current.value === ""))) {
            let ansObj = props.parentState.answer;
            if (inputRef.current.value === "") {
                delete ansObj[question.id];
                props.updateState({ counter: props.parentState.counter, trueAnsCounter: props.parentState.trueAnsCounter, answer: ansObj })
            } else {
                let userAnswer = {
                    question: question.topic,
                    userAnswer: inputRef.current.value,
                    correctAnswer: question.correctAnswer,
                    matches: inputRef.current.value.toLowerCase() === question.correctAnswer.toLowerCase()
                }
                let trueAnsCounter = userAnswer.matches ? props.parentState.trueAnsCounter + 1 : props.parentState.trueAnsCounter;
                ansObj[question.id] = userAnswer
                props.updateState({ counter: props.parentState.counter, trueAnsCounter: trueAnsCounter, answer: ansObj })
            }
        }
    }
    return (
        <div className='questionWrapper'>
            <p className='question' data-test='que-srting'>{question.topic}</p>
            <input className='textArea' type='text' data-test='text-area' onChange={inputChangeHandler} ref={inputRef} required defaultValue={props.parentState.answer[question.id]?.userAnswer} />
        </div>
    )
}

export default CustomTextInput