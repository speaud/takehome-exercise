import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { initializationAction } from '../actions/'

class RoutingPageOne extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if (!this.props.patients.meta.fetched) {
      this.props.initializationAction()
    }
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          content
        </div>
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(RoutingPageOne);