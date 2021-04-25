import React from 'react';

import {
  ListItem,
  ListVariant,
  LoginFooterItem,
  LoginForm,
  LoginPage,
} from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

import backgroundImage from './img/login-bg.jpg';
import logo from './img/logo.png';

const FormControl: React.FC = () => {
  return (
    <LoginForm
      helperText="Invalid log in Credentials"
      helperTextIcon={<ExclamationCircleIcon color="red" />}
      showHelperText
    />
  );
};

const footer = (
  <>
    <ListItem>
      <LoginFooterItem href="https://beaker-project.org/">
        Beaker website
      </LoginFooterItem>
    </ListItem>
    <ListItem>
      <LoginFooterItem href="https://beaker-project.org/docs/">
        Documentation
      </LoginFooterItem>
    </ListItem>
  </>
);

const loginScreen: React.FC = () => {
  return (
    <LoginPage
      backgroundImgSrc={backgroundImage}
      backgroundImgAlt="Beaker Login Background"
      brandImgSrc={logo}
      brandImgAlt="Beaker Logo"
      loginTitle="Log in to Beaker"
      textContent="Beaker is open-source software for managing and automating labs of test computers."
      footerListItems={footer}
      footerListVariants={ListVariant.inline}
    >
      <FormControl />
    </LoginPage>
  );
};

export default loginScreen;
