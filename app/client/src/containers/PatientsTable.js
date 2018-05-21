import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter'

import Paper from '@material-ui/core/Paper';

import { patientQueryAction, resetPatientsListAction } from '../actions/'

import PatientsTableTitleToolbar from '../components/PatientsTableTitleToolbar'
import PatientsTableHeader from '../components/PatientsTableHeader'
import PatientsTableFooter from '../components/PatientsTableFooter'

const columnData = [
  { id: 'patientId', numeric: false, disablePadding: false, label: 'ID' },
  { id: 'patientMrn', numeric: false, disablePadding: false, label: 'MRN' },
  { id: 'patientName', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'patientGender', numeric: false, disablePadding: false, label: 'Gender' },
  { id: 'patientBirthdate', numeric: false, disablePadding: false, label: 'Birthdate' },
];

const patientsTableBodyStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class PatientsTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: 'id',
      page: 0,
      rowsPerPage: 20,
      searchEnabled: false
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    order === 'desc' ? this.props.patients.list.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)) : this.props.patients.list.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handletogglePatientSearch = bool => {
    this.setState({searchEnabled: !this.state.searchEnabled})

    // clear query...
    if (!bool) {
      this.props.resetPatientsListAction(this.props.patients.masterList)
    }
  };

  handlePatientsQuery = event => {
    // todo: comment why were not firing action here
    //if (event.target.value.length > 0)
    this.props.patientQueryAction(this.props.patients.masterList, event.target.value)
  };

  render() {
    const { classes, patients } = this.props
    const { order, orderBy, rowsPerPage, page, searchEnabled } = this.state

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, patients.list.length - page * rowsPerPage)

    return (
      <div>
        <PatientsTableTitleToolbar
          searchEnabled={searchEnabled}
          searchPatients={this.handlePatientsQuery}
          togglePatientSearch={this.handletogglePatientSearch}
          selectedPatient={patients.selected}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <PatientsTableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              columnData={columnData}
            />
            <TableBody>
              {patients.list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(patient => {
                return (
                  <TableRow hover key={patient.id}>
                    <TableCell>{patient.id}</TableCell>
                    <TableCell>{patient.mrn}</TableCell>
                    <TableCell>{patient.full_name}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.birthdate}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={columnData.length += 1}
                  count={patients.list.length}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[20, 50, 100]}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={PatientsTableFooter}    
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    );
  }
}

PatientsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    patients: state.patients
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    patientQueryAction,
    resetPatientsListAction
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(patientsTableBodyStyles)(PatientsTable))