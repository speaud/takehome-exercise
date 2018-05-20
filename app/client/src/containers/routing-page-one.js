import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { initializationAction } from '../actions/'

import Description from '../components/Description'
import PatientsTable from './PatientsTable'

class RoutingPageOne extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if (!this.props.patients.meta.fetched || !this.props.description.meta.fetched) {
      this.props.initializationAction()
    }
  }

  render(){
    const {description, patients} = this.props

    return (
      <div className="container">
        <div className="row">


          {description.meta.fetched ?  <Description content={description.content} /> : 'Loading...' }

          


          {patients.meta.fetched ? <PatientsTable /> : 'fetching...'}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    description: state.description,
    patients: state.patients
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    initializationAction
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutingPageOne);