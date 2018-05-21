import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import VisibilityIcon from '@material-ui/icons/Visibility';


import TextField from 'material-ui/TextField'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SearchIcon from '@material-ui/icons/Search'
import CancelIcon from '@material-ui/icons/Cancel'

const PatientsTableTitleToolbar = props => {
  const { searchPatients, searchEnabled, togglePatientSearch, selectedPatient } = props;

  return (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text="Patients" />
      </ToolbarGroup>
      <ToolbarGroup>
        {searchEnabled ? (
          <ToolbarGroup>
            <TextField
              hintText="Search for patients by name"
              onChange={event => searchPatients(event)}
            />
            <Tooltip title="Cancel Search">
              <IconButton
                aria-label="Cancel Search"
                onClick={event => togglePatientSearch(!searchEnabled)}
              >
                <CancelIcon />
              </IconButton>
            </Tooltip>          
          </ToolbarGroup>
        ) : (
          <ToolbarGroup>
            {selectedPatient.length ? (
              <Tooltip title="View Selected Patient">
                <IconButton aria-label="View Selected Patient">
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Search Patients">
                <IconButton
                  aria-label="Filter list"
                  onClick={event => togglePatientSearch(!searchEnabled)}
                >
                  <SearchIcon/>
                </IconButton>
              </Tooltip>
            )}
          </ToolbarGroup>
        )}
      </ToolbarGroup>
    </Toolbar>
  );
};

PatientsTableTitleToolbar.propTypes = {
  searchEnabled: PropTypes.bool.isRequired,
  searchPatients: PropTypes.func.isRequired,
  togglePatientSearch: PropTypes.func.isRequired,
  selectedPatient: PropTypes.array.isRequired,
};

export default PatientsTableTitleToolbar