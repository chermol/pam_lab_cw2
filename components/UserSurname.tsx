import React, { Component } from 'react';

interface UserSurnameProps {
  surname: string;
}

class UserSurname extends Component<UserSurnameProps> {
  render() {
    return <>{this.props.surname}</>;
  }
}

export default UserSurname;
