import React, { useState, useEffect } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import {
  Title,
  Content,
  Container,
  StyledCard,
  StyledCardActions,
  StyledCardContent,
  StyledCardHeader,
  StyledDivider,
  StyledTypography,
  StyledButton,
} from './styles';

import Header from '../../components/Header';

const Timestamp: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const tick = () => setTime(new Date());

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, [time]);

  return (
    <>
      <Header />
      <Container>
        <Title>Timestamp</Title>
        <Content>
          <StyledCard>
            <StyledCardHeader
              title="Generate Now"
              subheader="Generate timestamp now time"
            />

            <StyledDivider />

            <StyledCardContent>
              <StyledTypography
                className="title"
                color="textSecondary"
                gutterBottom
              >
                Current Time
              </StyledTypography>
              <StyledTypography variant="body2">
                The time is
                {time.toString()}
              </StyledTypography>
            </StyledCardContent>
            <StyledCardActions>
              <StylesProvider injectFirst>
                <StyledButton>Get TimeStamp</StyledButton>
              </StylesProvider>
            </StyledCardActions>
          </StyledCard>
          <StyledCard>
            <StyledCardHeader
              title="Generate Now"
              subheader="Generate timestamp now time"
            />
            <StyledDivider />
            <StyledCardContent>
              <StyledTypography
                className="title"
                color="textSecondary"
                gutterBottom
              >
                Current Time
              </StyledTypography>
              <StyledTypography variant="body2">
                The time is
                {time.toString()}
              </StyledTypography>
            </StyledCardContent>
            <StyledCardActions>
              <StylesProvider injectFirst>
                <StyledButton>Get TimeStamp</StyledButton>
              </StylesProvider>
            </StyledCardActions>
          </StyledCard>
        </Content>
      </Container>
    </>
  );
};

export default Timestamp;
