import React from 'react';
import {shallow} from 'enzyme';

import {SignUpPage} from './signup-page';

describe('<SignUpPage />', () => {
    it('Renders without crashing', () => {
        shallow(<SignUpPage />);
    });
});