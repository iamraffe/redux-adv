import React, { PropTypes }from 'react'
import Header from './common/Header'
import { connect } from 'react-redux'

class App extends React.Component{
  render(){
    let { loading, children } = this.props
    return(
      <div className="container-fluid">
        <Header
          loading={loading}
        />
        {children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps){
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App)