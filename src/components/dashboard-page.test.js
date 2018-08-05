import React from 'react';
import {shallow} from 'enzyme';

import {Dashboard} from './dashboard-page';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard />);
    });
});