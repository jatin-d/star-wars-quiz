import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import CustomSingleSelect from './CustomSingleSelect';
import getQuestions from '../services/Api'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setUpCustomSingleSelect = () => {
    let mockState = { counter: 0, trueAnsCounter: 0, answer: {} }
    let mockQuestion = getQuestions()[0]
    const mockSetState = jest.fn();
    jest.mock('react', () => ({
        useState: (counter: number) => [counter, mockSetState]
    }));
    return shallow(<CustomSingleSelect currentQuestion={mockQuestion} parentState={mockState} updateState={mockSetState} />)
}

test('renders first question from the API data', () => {
    const wrapper = setUpCustomSingleSelect()
    const queString = wrapper.find(`[data-test='que-srting']`)
    expect(queString.text()).toBe('Select a characters who appear in every Star Wars movie.')
});

test('renders options for the question from the API data', () => {
    const wrapper = setUpCustomSingleSelect()
    const queString = wrapper.find(`[data-test='opt-srting']`)
    expect(queString.containsAllMatchingElements([
        <label>Luke Skywalker</label>,
        <label>C-3PO</label>,
        <label>Leia Organa</label>,
        <label>Han Solo</label>,
        <label>Obi-Wan Kenobi</label>
    ]))
});