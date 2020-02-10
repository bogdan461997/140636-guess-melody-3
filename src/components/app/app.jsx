import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from 'prop-types';

const App = ({errorsCount}) => {
  return <WelcomeScreen errorsCount={errorsCount} />;
};

App.propTypes = {
  errorsCount: PropTypes.string.isRequired
};

export default App;
