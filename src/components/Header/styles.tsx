import styled from 'styled-components';

import { Button } from '@material-ui/core';

export const StyledButton = styled(Button)`
  color: white;
`;

export const Navbar = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  background: #090856;
  padding: 25px;
  img {
    text-align: center;
    max-width: 350px;
    padding: 15px;
  }
`;
