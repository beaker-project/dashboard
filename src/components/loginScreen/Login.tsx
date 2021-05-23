import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoginForm } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

import { AppState } from '@store';

import { loginRequest } from '@ducks/user/actions';

const FormControl: React.FC = () => {
  const dispatch = useDispatch();
  const showHelperText = useSelector((state: AppState) => state.user.error);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(loginRequest({ username, password }));
  };

  return (
    <LoginForm
      helperText="Invalid log in Credentials"
      helperTextIcon={<ExclamationCircleIcon color="red" />}
      showHelperText={showHelperText}
      usernameValue={username}
      onChangeUsername={handleUsernameChange}
      passwordValue={password}
      isShowPasswordEnabled
      onChangePassword={handlePasswordChange}
      onLoginButtonClick={handleSubmit}
    />
  );
};

export default FormControl;
