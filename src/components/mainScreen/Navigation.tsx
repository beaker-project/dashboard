import React from 'react';
import { NavLink } from 'react-router-dom';

import { Nav, NavItem, NavList } from '@patternfly/react-core';

const Navigation = () => (
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

export default Navigation;
