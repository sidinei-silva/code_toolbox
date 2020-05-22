import React from 'react';

import { GitHub, Email, LinkedIn } from '@material-ui/icons';
import { Content, StyledTypography, StyledGrid, StyledButton } from './styles';

const Footer: React.FC = () => {
  return (
    <Content>
      <StyledGrid spacing={1} container justify="center" alignItems="center">
        <StyledGrid item md={12}>
          <StyledTypography align="center" color="initial">
            © 2020 Code Toolbox
          </StyledTypography>
        </StyledGrid>
        <StyledGrid item md={12}>
          <StyledGrid
            spacing={1}
            container
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <StyledButton
              href="https://github.com/sidinei-silva"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="secondary"
              size="small"
            >
              <GitHub fontSize="small" />
            </StyledButton>
            <StyledButton
              href="mailto:sidinei.developer@gmail.com?subject=Code Toolbox - Contact"
              aria-label="contact email"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="secondary"
              size="small"
            >
              <Email fontSize="small" />
            </StyledButton>
            <StyledButton
              href="https://www.linkedin.com/in/sidinei-silva-472570b2/"
              aria-label="linkedin"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="secondary"
              size="small"
            >
              <LinkedIn fontSize="small" />
            </StyledButton>
          </StyledGrid>
        </StyledGrid>
      </StyledGrid>
    </Content>
  );
};

export default Footer;
