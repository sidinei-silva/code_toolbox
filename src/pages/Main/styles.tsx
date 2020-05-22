import styled from 'styled-components';

import { Container } from '@material-ui/core';

export const StyledContainer = styled(Container)`
  padding: 25px;
`;

export const Title = styled.h1`
  font-weight: 100;
  text-align: center;
  padding: 25px 0;
  font-family: 'Montserrat', sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 25px 0;
`;
