import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom';

import {
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
} from '@patternfly/react-core';

import { AppState } from '../../store';

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
      logo="Logo"
      headerTools={<PageHeaderTools>Toolbar | Avatar</PageHeaderTools>}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={onNavToggle}
    />
  );
  const Navigation = (
    <Nav id="nav-primary-simple" theme="dark">
      <NavList id="nav-list-simple">
        <NavItem>
          <NavLink exact to="/" activeClassName="pf-m-current">
            Start
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar
      nav={Navigation}
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
