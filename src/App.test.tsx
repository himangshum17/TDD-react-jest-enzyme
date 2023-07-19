import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from './App';

// setup enzyme's react adapter
Enzyme.configure({ adapter: new Adapter() });

test('should render without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test-id='component-app']");
  // assert
  expect(appComponent.length).toBe(1);
});

test('should render the increment button', () => {
  const wrapper = shallow(<App />);
  const buttonElement = wrapper.find("[data-test-id='button-element']");
  // assert
  expect(buttonElement.length).toBe(1);
});

test('should render the counter display', () => {
  const wrapper = shallow(<App />);
  const counterDisplayElement = wrapper.find(
    "[data-test-id='counter-display-element']"
  );
  // assert
  expect(counterDisplayElement.length).toBe(1);
});

test('should render the counter display with 0 initially', () => {});

test('should increment the counter display on icrement button clicked', () => {});
