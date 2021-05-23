import React from 'react';

import {
  ListItem,
  ListVariant,
  LoginFooterItem,
  LoginPage,
} from '@patternfly/react-core';

import backgroundImage from '@assets/img/login-bg.jpg';
import logo from '@assets/img/logo.png';

import Login from './Login';

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
      <Login />
    </LoginPage>
  );
};

export default loginScreen;
