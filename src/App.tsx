import React from 'react';
import './App.scss';

import getQuestions from './services/Api'
import { useState } from 'react';
import CustomSingleSelect from "./components/CustomSingleSelect";
import CustomTextInput from './components/CustomTextInput'
import ResultEntry from './components/ResultEntry';
import { ApplicationState } from './utility/utils'

const App: React.FC = () => {
  const questionsList = getQuestions()
  let [state, changeState] = useState<ApplicationState>({ counter: 0, trueAnsCounter: 0, answer: {} })
  const handlePrevious = () => {
    if (state.counter > 0) {
      changeState({ counter: state.counter - 1, trueAnsCounter: state.trueAnsCounter, answer: state.answer })
    }
  }
  const handleNext = () => {
    if (state.counter < questionsList.length - 1) {
      changeState({ counter: state.counter + 1, trueAnsCounter: state.trueAnsCounter, answer: state.answer })
    }
  }

  const renderQuestion = () => {
    let question = questionsList[state.counter]
    console.log(state.answer)
    if (question.type === "SingleSelect") {
      return <CustomSingleSelect currentQuestion={question} parentState={state} updateState={changeState} />
    } else if (question.type === "TextInput") {
      return <CustomTextInput currentQuestion={question} parentState={state} updateState={changeState} />
    } else {
      return <p>Invalid Question Error!</p>
    }
  }

  const claculateScore = () => {
    changeState({ counter: -1, trueAnsCounter: state.trueAnsCounter, answer: state.answer })
  }

  if (state.counter >= 0) {
    return (
      <div className='App appContainer' data-test="component-app">
        <h1 data-test="app-heading">Check Your Star Wars Knowledge</h1>
        <h2>Answer a few questions below</h2>
        {renderQuestion()}
        <div className='navigationButtonsContainer'>
          <button className='previousButton mainButtons' data-test="previous-btn"
            onClick={handlePrevious} disabled={state.counter === 0}>Previous
          </button>
          <button className='nextButton mainButtons' data-test="next-btn"
            onClick={handleNext} disabled={state.counter === questionsList.length - 1}>Next
          </button>
        </div>
        <div className='submitButtonContainer'>
          <button className='submitButton mainButtons' data-test="submit-btn"
            onClick={claculateScore}
            disabled={Object.keys(state.answer).length !== questionsList.length}>Submit
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App appContainer">
        <h1>Your Results</h1>
        <h2>You answered {state.trueAnsCounter} questions correctly from total of {questionsList.length}</h2>
        <div className='ansEntryWrapper'>
          {
            Object.keys(state.answer).map(answerKey => {
              return <ResultEntry key={answerKey} entry={state.answer[answerKey]} />
            })
          }
        </div>

      </div>
    );
  }

}

export default App;
