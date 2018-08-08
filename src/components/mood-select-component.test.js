import React from 'react';
import {shallow} from 'enzyme';

import {MoodSelectComponent} from './mood-select-component';

describe('<MoodSelectComponent />', () => {
    it('Renders without crashing', () => {
        shallow(<MoodSelectComponent />);
    });
});