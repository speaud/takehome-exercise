import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { initializationAction } from '../actions/'
import TablePaginationFooter from '../components/TablePaginationFooter'

const tableBodyStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class PatientsTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // data: this.props.patients
      page: 0,
      rowsPerPage: 20,
    };

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  handleChangePage(event, page) {
    this.setState({ page })
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value })
  }

  render() {
    const { classes, patients } = this.props
    const { rowsPerPage, page } = this.state

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, patients.list.length - page * rowsPerPage)
    // id, full_name, gender, mrn, birthdate

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>        
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Birthdate</TableCell>
              </TableRow>
            </TableHead>          
            <TableBody>
             {patients.list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(patient => {
                return (
                  <TableRow key={patient.id}>
                    <TableCell scope="row">{patient.full_name}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.birthdate}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={patients.list.length}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[20, 50, 100]}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationFooter}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
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
    initializationAction
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(tableBodyStyles)(PatientsTable));