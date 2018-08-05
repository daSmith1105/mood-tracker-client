import React from 'react';
import {shallow} from 'enzyme';

import {MoodNav} from './mood-nav';

describe('<MoodNav />', () => {
    it('Renders without crashing', () => {
        shallow(<MoodNav />);
    });
});