import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

import Results, { GET_USERS } from 'components/Results';

it('should first render loading, and then render users', async () => {
  const mocks = [
    {
      request: {
        query: GET_USERS,
      },
      result: {
        data: {
          users: [
            {
              email: 'email@email.com',
              id: '123abc',
              name: 'john john',
              phone: '5555555555',
            }
          ],
        },
      },
    },
  ];

  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Results />
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children).toContain('Loading...');

  await new Promise(resolve => setTimeout(resolve, 0));

  const users = component.toJSON().children;
  expect(users).toHaveLength(1);
  const name = component.root.findByType('h2');
  expect(name.children).toContain('john john');
});

it('should show error', async () => {
  const errorMock = {
    request: {
      query: GET_USERS,
    },
    error: new Error('oops'),
  };

  const component = renderer.create(
    <MockedProvider mocks={[errorMock]} addTypename={false}>
      <Results />
    </MockedProvider>,
  );

  await new Promise(resolve => setTimeout(resolve, 0)); // wait for response

  const tree = component.toJSON();
  expect(tree.children).toContain('Error :(');
});
