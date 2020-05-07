import React from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import Login from './Login';

// 1. Menampilkan label button yang benar. yaitu: Login
it('shows correct header', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('.button.is-primary.is-fullwidth').text()).toBe('Login');
});

it('check email state from input', () => {
  const wrapper = shallow(<Login />);
  wrapper
    .find('input[type="email"]')
    .simulate('change', { target: { value: 'syauqi@gmail.com' } });
  expect(wrapper.state('email')).toEqual('syauqi@gmail.com');
});

it('login check id with right data format', () => {
  const wrapper = shallow(<Login />);
  wrapper
    .find('input[type="email"]')
    .simulate('change', { target: { value: 'syauqi@gmail.com' } });
  wrapper.find('button').simulate('click');
  expect(wrapper.instance().setId()).toEqual('syauqi');
});
