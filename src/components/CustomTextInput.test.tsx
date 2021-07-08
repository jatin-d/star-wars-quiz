import CustomTextInput from './CustomTextInput';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import getQuestions from '../services/Api'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setUpCustomTextInput = () => {
    let mockState = { counter: 0, trueAnsCounter: 0, answer: {} }
    let mockQuestion = getQuestions()[1]
    const mockSetState = jest.fn();
    jest.mock('react', () => ({
        useState: (counter: number) => [counter, mockSetState]
    }));
    return shallow(<CustomTextInput currentQuestion={mockQuestion} parentState={mockState} updateState={mockSetState} />)
}

test('renders question where answer is a text input', () => {
    const wrapper = setUpCustomTextInput()
    const queString = wrapper.find(`[data-test='que-srting']`)
    expect(queString.text()).toBe('Who played Princess Leia?')
});

test('text area element is rendered', () => {
    const wrapper = setUpCustomTextInput()
    const queString = wrapper.find(`[data-test='text-area']`)
    expect(queString.length).toBe(1)
});