import Enzyme, { ShallowWrapper } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from './App';
import { findbytestIdAttr, setup } from './utils/testUtils';

// setup enzyme's react adapter
Enzyme.configure({ adapter: new Adapter() });

test('should render without crashing', () => {
  const wrapper: ShallowWrapper = setup(<App />);
  const appComponent = findbytestIdAttr(wrapper, 'component-app');
  // assert
  expect(appComponent.length).toBe(1);
});

test('should render the increment button', () => {
  const wrapper: ShallowWrapper = setup(<App />);
  const buttonElement = findbytestIdAttr(wrapper, 'button-element');
  // assert
  expect(buttonElement.length).toBe(1);
});

test('should render the counter display', () => {
  const wrapper: ShallowWrapper = setup(<App />);
  const counterDisplayElement = findbytestIdAttr(
    wrapper,
    'counter-display-element'
  );
  // assert
  expect(counterDisplayElement.length).toBe(1);
});

test('should render the counter display with 0 initially', () => {
  const wrapper: ShallowWrapper = setup(<App />);
  const count = findbytestIdAttr(wrapper, 'count').text();
  // assert
  expect(count).toBe('0');
});

test('should increment the counter display on icrement button clicked', () => {
  // check for the button element
  const wrapper: ShallowWrapper = setup(<App />);
  const buttonElement = findbytestIdAttr(wrapper, 'button-element');
  // click the button element
  buttonElement.simulate('click');
  // find the display count and test that the number has incremented or not
  const count = findbytestIdAttr(wrapper, 'count').text();
  // assert
  expect(count).toBe('1');
});
