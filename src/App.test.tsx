import App from './App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const findElementByDataTest = (wrapper: any, value: string) => wrapper.find(`[data-test='${value}']`)
const getApp = () => shallow(<App />)

test('app component is rendered with app heading without error', () => {
  const wrapper = getApp()
  const appComponent = findElementByDataTest(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
});

test('application title is rendered', () => {
  const wrapper = getApp()
  const appHeading = findElementByDataTest(wrapper, 'app-heading').text()
  expect(appHeading).toBe('Check Your Star Wars Knowledge')
});

test('"previous" button is rendered and is disabled', () => {
  const wrapper = getApp()
  const previpousBtn = findElementByDataTest(wrapper, 'previous-btn')
  expect(previpousBtn.length).toBe(1)
  expect(previpousBtn.props().disabled).toBeTruthy()
});

test('"submit" button is rendered and is disabled', () => {
  const wrapper = getApp()
  const submitBtn = findElementByDataTest(wrapper, 'submit-btn')
  expect(submitBtn.length).toBe(1)
  expect(submitBtn.props().disabled).toBeTruthy()
});

test('"next" button is rendered and is enabled', () => {
  const wrapper = getApp()
  const nextBtn = findElementByDataTest(wrapper, 'next-btn')
  expect(nextBtn.length).toBe(1)
  expect(nextBtn.props().disabled).toBeFalsy()
});

test('Clicking "next" button enables "previous" button', () => {
  const wrapper = getApp()
  wrapper.find("[data-test='next-btn']").simulate('click')
  const previpousBtn = findElementByDataTest(wrapper, 'previous-btn')
  expect(previpousBtn.props().disabled).toBeFalsy()
});