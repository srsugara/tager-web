import React from 'react';
import { shallow } from 'enzyme';
import TaskTable from './TaskTable';

describe('TaskTable', () => {
  it('should render my component', () => {
    shallow(<TaskTable />);

  });
});
