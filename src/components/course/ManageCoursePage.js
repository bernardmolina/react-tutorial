import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <div>
        <h1>manage page</h1>
        <CourseForm course={this.state.course} />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {

};

function mapStateToProps(state, ownProps){
  return{
    state: state
  };
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
