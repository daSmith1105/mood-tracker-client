import React from 'react';
import {shallow} from 'enzyme';

import { MoodLog } from './mood-log';

describe('<MoodLog />', () => {
    it('Renders without crashing', () => {
        shallow(<MoodLog store={name}/>);
    });
});