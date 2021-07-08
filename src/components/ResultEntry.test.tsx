import ResultEntry from './ResultEntry';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import { Entry } from '../utility/utils';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setUpResultEntry = (mockKey: string, mockEntry: Entry) => {
    return shallow(<ResultEntry key={mockKey} entry={mockEntry} />)
}

test('renders question response for an incorrect entry', () => {
    let mockKey = "QYdnsqT6LLMptJxL8qDZ_"
    let mockEntry = {
        question: "What does AT-AT stand for?",
        userAnswer: "At&t",
        correctAnswer: "All Terrain Armored Transport",
        matches: false
    }
    const wrapper = setUpResultEntry(mockKey, mockEntry)
    let queString = wrapper.find(`[data-test='que-srting']`)
    expect(queString.text()).toBe("Question : What does AT-AT stand for?")
    queString = wrapper.find(`[data-test='user-ans-srting']`)
    expect(queString.text()).toBe("Your answer : At&t")
    queString = wrapper.find(`[data-test='correct-ans-srting']`)
    expect(queString.text()).toBe("Correct Answer is : All Terrain Armored Transport")
});

test('renders question response for a correct entry', () => {
    let mockKey = "QYdnsqT6LLMptJxL8qDZ_"
    let mockEntry = {
        question: "What does AT-AT stand for?",
        userAnswer: "All Terrain Armored Transport",
        correctAnswer: "All Terrain Armored Transport",
        matches: true
    }
    const wrapper = setUpResultEntry(mockKey, mockEntry)
    let queString = wrapper.find(`[data-test='que-srting']`)
    expect(queString.text()).toBe("Question : What does AT-AT stand for?")
    queString = wrapper.find(`[data-test='user-ans-srting']`)
    expect(queString.text()).toBe("Your answer : All Terrain Armored Transport")
    queString = wrapper.find(`[data-test='correct-ans-srting']`)
    expect(queString.text()).toBe("Your Answer is Correct")
});