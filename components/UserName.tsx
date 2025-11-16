import React from 'react';

interface UserNameProps {
  name: string;
}

const UserName: React.FC<UserNameProps> = ({ name }) => {
  return <>{name}</>;
};

export default UserName;
