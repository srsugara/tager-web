import React from 'react';
import { shallow } from 'enzyme';
import TaskCard from './TaskCard';

//define empty mock function
const fnClick = jest.fn();

describe('TaskCard', () => {
  it('should render right data props', () => {
    const data = {
      title: 'Belajar unit test',
      tags: 'frontend',
      dirtyAt: '2020-04-06T03:39:21.062Z',
      description: 'Menerapkan unit test terhadap komponen-komponen yang ada',
    };
    const wrapper = shallow(<TaskCard data={data} />);
    expect(wrapper.find('strong').text()).toBe('Belajar unit test');
    expect(wrapper.find('span.tag').text()).toBe('frontend');
    expect(wrapper.find('small.has-text-black').text()).toBe(
      '2020-04-06T03:39:21.062Z'
    );
    expect(wrapper.find('div.has-text-black').text()).toBe(
      'Menerapkan unit test terhadap komponen-komponen yang ada'
    );
  });

  it('should call edit method props', () => {
    const wrapper = shallow(<TaskCard data={{}} onEdit={fnClick} />);
    //simulate a click
    wrapper.find('.button.is-primary.is-small').simulate('click');
    //check if function was called
    expect(fnClick).toHaveBeenCalled();
  });

  it('should call add method props', () => {
    const wrapper = shallow(<TaskCard data={{}} onChangeStatus={fnClick} />);
    wrapper.find('.button.is-small.status').simulate('click');
    expect(fnClick).toHaveBeenCalled();
  });

  it('should call delete method props', () => {
    const wrapper = shallow(<TaskCard data={{}} onDelete={fnClick} />);
    wrapper.find('.button.is-danger.is-small').simulate('click');
    expect(fnClick).toHaveBeenCalled();
  });
});
