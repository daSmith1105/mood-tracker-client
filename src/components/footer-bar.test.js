import React from 'react';
import {shallow} from 'enzyme';

import {FooterBar} from './footer-bar';

describe('<FooterBar />', () => {
    it('Renders without crashing', () => {
        shallow(<FooterBar />);
    });
});