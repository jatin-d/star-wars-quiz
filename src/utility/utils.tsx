export interface ApplicationState {
    counter: number,
    trueAnsCounter: number,
    answer: { [answerKey: string]: { question: string, userAnswer: string, correctAnswer: string, matches: boolean } }
}
export interface SingleSelect {
    topic: string,
    answerOptions?: string[],
    type: string,
    correctAnswer: string,
    id: string
}
export interface TextInput {
    topic: string,
    type: string,
    correctAnswer: string,
    id: string
}
export interface Entry {
    question: string,
    userAnswer: string,
    correctAnswer: string,
    matches: boolean
}