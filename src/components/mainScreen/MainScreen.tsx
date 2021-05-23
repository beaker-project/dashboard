import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import {
  Brand,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
} from '@patternfly/react-core';

import logo from '../../assets/img/logo.png';

import { AppState } from '../../store';

import Navigation from './Navigation';
import UserMenu from './UserMenu';

import LandingPage from '../landingPage/LandingPage';
import LoginScreen from '../loginScreen/LoginScreen';
import PageNotFound from '../pageNotFound/PageNotFound';

const MainScreen: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const isLoggedIn = useSelector(
    (state: AppState) => state.user.data.isLoggedIn
  );

  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  const onNavToggle = (): void => setIsNavOpen(!isNavOpen);

  const Header = (
    <PageHeader
      logo={<Brand src={logo} alt="Beaker Logo" />}
      headerTools={
        <PageHeaderTools>
          <UserMenu />
        </PageHeaderTools>
      }
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={onNavToggle}
    />
  );

  const Sidebar = (
    <PageSidebar
      nav={<Navigation />}
      isNavOpen={isNavOpen}
      theme="dark"
      data-testid="sidebar"
    />
  );

  return (
    <Page header={Header} sidebar={Sidebar}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Page>
  );
};

export default MainScreen;
