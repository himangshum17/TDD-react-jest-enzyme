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

test('should render the counter display with 0 initially', () => {});

test('should increment the counter display on icrement button clicked', () => {});
