import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper'

const App = (props) => (
  <Paper>
    {React.cloneElement({...props}.children, {...props})}
  </Paper>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
