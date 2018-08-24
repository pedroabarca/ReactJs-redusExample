import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { createUser } from "../actions/userActions";

class UserLoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
  render(){
    return (
      <div className="UserLoginForm">
    
      </div>
    )
  }
}
UserLoginForm.propTypes = {
}

export default UserLoginForm;