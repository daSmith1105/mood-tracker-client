import React from 'react';
import {shallow} from 'enzyme';

import {NoteComponent} from './note-component';

describe('<NoteComponent />', () => {
    it('Renders without crashing', () => {
        shallow(<NoteComponent />);
    });
});