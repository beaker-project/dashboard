import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, DropdownItem, DropdownToggle } from '@patternfly/react-core';

import { AppState } from '@store';

import { logoutRequest } from '@ducks/user/actions';

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: AppState) => state.user.data.username);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuToggle = (): void => setIsMenuOpen(!isMenuOpen);
  const onMenuSelect = (): void => setIsMenuOpen(false);

  const onLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <Dropdown
      isOpen={isMenuOpen}
      dropdownItems={[
        <DropdownItem onClick={onLogout} key="Logout">
          Logout
        </DropdownItem>,
      ]}
      onSelect={onMenuSelect}
      toggle={
        <DropdownToggle onToggle={onMenuToggle}>{username}</DropdownToggle>
      }
    />
  );
};

export default UserMenu;
