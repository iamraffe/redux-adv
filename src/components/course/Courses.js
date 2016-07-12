import React, { PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import { bindActionCreators } from 'redux'
import CourseList from './CourseList'

class Courses extends React.Component{
  constructor(props, context){
    super(props, context)

    // this.state = {
    //   course: { title: "" }
    // }
    // this.onTitleChange = this.onTitleChange.bind(this)
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course')
  }

  render(){
    const { courses } = this.props
    
    return(
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses} />
      </div>
    )
  }
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses)