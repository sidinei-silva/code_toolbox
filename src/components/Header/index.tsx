import React from 'react';
import { GitHub, Home } from '@material-ui/icons';
import { Navbar, StyledButton } from './styles';

import logo from '../../assets/img/logo_transparent.png';

const Header = () => {
  return (
    <Navbar>
      <img src={logo} alt="generations-hub" />

      <div id="button-group">
        <StyledButton
          href="/"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="secondary"
          size="large"
        >
          <Home fontSize="large" />
        </StyledButton>
        <StyledButton
          href="https://github.com/sidinei-silva/generations_hub"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="secondary"
          size="large"
        >
          <GitHub fontSize="large" />
        </StyledButton>
      </div>
    </Navbar>
  );
};

export default Header;
