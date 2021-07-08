import React from "react";
import './CustomSingleSelect.scss'
import { ApplicationState } from '../utility/utils'
import { SingleSelect } from '../utility/utils'

const CustomSingleSelect: React.FC<{ currentQuestion: SingleSelect, parentState: ApplicationState, updateState: React.Dispatch<ApplicationState> }> = props => {
    let question = props.currentQuestion;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        let userAnswer = {
            question: question.topic,
            userAnswer: (event.target as any).value,
            correctAnswer: question.correctAnswer,
            matches: (event.target as any).value.toLowerCase() === question.correctAnswer.toLowerCase()
        }
        let trueAnsCounter = userAnswer.matches ? props.parentState.trueAnsCounter + 1 : props.parentState.trueAnsCounter;
        let ansObj = props.parentState.answer
        ansObj[question.id] = userAnswer
        props.updateState({ counter: props.parentState.counter, trueAnsCounter: trueAnsCounter, answer: ansObj })
    }
    return (
        <div className='questionWrapper'>
            <p className='question' data-test='que-srting'>{question.topic}</p>
            <div className='optionWrapper'>
                {question.answerOptions!.map(option => {
                    return <div className='optionsContainer' key={option}><input id={option} value={option} name="ansOption" type='radio' defaultChecked={props.parentState.answer[question.id]?.userAnswer === option} onClick={handleClick} /><label htmlFor={option} id={option} data-test='opt-srting' >{option}</label></div>
                })}
            </div>
        </div>
    )
}

export default CustomSingleSelect