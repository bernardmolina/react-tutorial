import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  render(){
    return (
      <div>
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          allAuthors={[]} />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  let course =  {
    id: '',
    whatHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  return{
    course: course
  };
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
