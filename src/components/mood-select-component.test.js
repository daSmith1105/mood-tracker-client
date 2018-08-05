import React from 'react';
import {shallow} from 'enzyme';

import {MoodSelectComponent} from './mood-select-component';

describe('<AMoodSelectComponent />', () => {
    it('Renders without crashing', () => {
        shallow(<MoodSelectComponent />);
    });
});