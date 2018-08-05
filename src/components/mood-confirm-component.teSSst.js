import React from 'react';
import {shallow} from 'enzyme';

import {MoodConfirmComponent} from './mood-confirm-component';

describe('<MoodConfirmComponent/>', () => {
    it('Renders without crashing', () => {
        shallow(<MoodConfirmComponent props={props}/>);
    });
});