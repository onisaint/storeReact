import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CourseActions from '../../actions/course.actions'

class ManageCoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (

    )
  }
}

ManageCoursesPage.PropTypes = {

};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(CourseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage)
