import React from 'react';
import WelcomeScreen from './welcome-screen.jsx';
import renderer from 'react-test-renderer';

it(`WelcomeScreen renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={4}
      onWelcomeButtonClick={() => { }}></WelcomeScreen>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
