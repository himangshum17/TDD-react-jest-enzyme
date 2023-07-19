import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
type SetupProps = React.ReactElement<any, any>;

/**
 * A function to create ShallowWrapper for react componet.
 *
 * @function setup
 * @param {SetupProps} component
 * @returns {ShallowWrapper}
 * @example ```setup(<App />)```
 */
const setup = (component: SetupProps): ShallowWrapper => shallow(component);

/**
 * A testing helper function to find an element by 'data-test-id'.
 *
 * @function findbytestIdAttr
 * @param {ShallowWrapper} wrapper
 * @param {string} id
 * @returns {ShallowWrapper}
 * @example ```findbytestIdAttr(wrapper, "id")```
 */
const findbytestIdAttr = (
  wrapper: ShallowWrapper,
  id: string
): ShallowWrapper => wrapper.find(`[data-test-id='${id}']`);

// exports
export { setup, findbytestIdAttr };
