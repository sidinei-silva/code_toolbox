import React from 'react';
import { GitHub, Home, LinkedIn } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { Navbar, StyledButton } from './styles';

// import logo from '../../assets/img/logo_transparent.png';

const Header = () => {
  return (
    <Navbar>
      <img src="/logo_transparent.png" alt="generations-hub" />
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
          href="https://github.com/sidinei-silva"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="secondary"
          size="large"
        >
          <GitHub fontSize="large" />
        </StyledButton>

        <StyledButton
          href="www.linkedin.com/in/sidinei-silva-472570b2"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="secondary"
          size="large"
        >
          <LinkedIn fontSize="large" />
        </StyledButton>
      </div>
    </Navbar>
  );
};

export default Header;
