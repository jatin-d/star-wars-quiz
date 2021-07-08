import React from "react";
import './ResultEntry.scss'
import { Entry } from '../utility/utils'

const ResultEntry: React.FC<{ entry: Entry }> = props => {
    return (
        <div className='resultCard'>
            <p data-test='que-srting'><span className='quePrompt'>Question :</span> {props.entry.question}</p>
            <p data-test='user-ans-srting'><span className='quePrompt'>Your answer :</span> {props.entry.userAnswer}</p>
            <p data-test='correct-ans-srting'>
                {props.entry.matches ? <span className='ansResult'>Your Answer is Correct</span> : <span className='correctAns'><span className='emphText'>Correct Answer is :</span> {props.entry.correctAnswer}</span>}
            </p>

        </div>
    )
}

export default ResultEntry