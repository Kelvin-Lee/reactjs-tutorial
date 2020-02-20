import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
it('renders without crashing', () => {
  let squares = [],
      onClick = function(){}
  shallow(<Board squares={squares} onClick={onClick}/>);
});
