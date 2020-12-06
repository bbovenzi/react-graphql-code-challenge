import React from 'react';
import renderer from 'react-test-renderer';
import User from 'components/User';

test('User matches snapshot', () => {
  const mockUser = {
    id: 1,
    name: 'name',
    email: 'email@email.com',
    phone: '5555555555',
  }
  const component = renderer.create(
    <User user={mockUser} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
