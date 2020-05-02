/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Title,
  StyledContainer,
  StyledCard,
  StyledCardActions,
  StyledCardContent,
  StyledCardHeader,
  StyledDivider,
  StyledTypography,
  StyledButton,
  StyledTextField,
  Form,
  StyledGrid,
  StyledExpansionPanel,
  StyledExpansionPanelSummary,
  StyledExpansionPanelDetails,
} from './styles';

import Header from '../../components/Header';

import timezones from './timezones';

const Timestamp: React.FC = () => {
  // Generate Now
  const [time, setTime] = useState(new Date());
  time.setSeconds(0);
  time.setMilliseconds(0);

  const [currentTimestamp, setCurrentTimestamp] = useState(0);

  // Inputs Date/Time Local - Timestamp
  const [dataTimeLocalForm, setDataTimeLocalForm] = useState(
    `${time.toLocaleDateString().split('/')[2]}-${
      time.toLocaleDateString().split('/')[1]
    }-${time.toLocaleDateString().split('/')[0]}T${
      time.toLocaleTimeString().split(':')[0]
    }:${time.toLocaleTimeString().split(':')[1]}`,
  );

  const [timezoneFormTimezone, setTimezoneFormTimezone] = React.useState(
    time.getTimezoneOffset(),
  );
  const [timeStampResultTimezone, setTimeStampResultTimezone] = useState(0);

  // TimeStamp Now
  const getTimeStamp = () => {
    setCurrentTimestamp(time.getTime());
  };

  // Form Date/Time - Timestamp
  const convertDateTimezone = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = new Date(dataTimeLocalForm);

    date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    date.setTime(date.getTime() + -1 * timezoneFormTimezone * 60 * 1000);
    setTimeStampResultTimezone(date.getTime());
  };

  // Form Timestamp - date
  const [timeStampForm, setTimeStampForm] = useState(time.getTime());
  const [dateResultTimeStampForm, setDateResultTimeStampForm] = useState(time);
  const convertTimestamp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDateResultTimeStampForm(new Date(timeStampForm));
  };

  useEffect(() => {
    const runClock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      // Limpa a assinatura antes do componente deixar a tela
      clearInterval(runClock);
    };
  }, []);

  return (
    <>
      <Header />
      <StyledContainer>
        <Title>Timestamp - Javascript</Title>
        <StyledGrid container alignItems="stretch" justify="center" spacing={3}>
          <StyledGrid item xs={12}>
            <StyledCard>
              <StyledExpansionPanel defaultExpanded>
                <StyledExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <StyledCardHeader
                    title="Date/Time Timezone - Timestamp"
                    subheader="Convert date time with timezone to timestamp "
                  />
                </StyledExpansionPanelSummary>

                <StyledDivider />
                <StyledExpansionPanelDetails>
                  <StyledGrid container justify="center">
                    <StyledGrid item xs>
                      <StyledCardContent>
                        <Form
                          onSubmit={convertDateTimezone}
                          id="timezone-convert"
                        >
                          <StyledTextField
                            id="datetime"
                            label="Date/Hours"
                            type="datetime-local"
                            variant="outlined"
                            margin="dense"
                            size="small"
                            value={dataTimeLocalForm}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={event =>
                              setDataTimeLocalForm(event.target.value)
                            }
                          />

                          <StyledTextField
                            className="digit-4"
                            id="outlined-select-currency"
                            select
                            label="Timezone"
                            value={timezoneFormTimezone}
                            margin="dense"
                            variant="outlined"
                            size="small"
                            SelectProps={{
                              native: true,
                            }}
                            onChange={event =>
                              // eslint-disable-next-line radix
                              setTimezoneFormTimezone(
                                parseInt(event.target.value),
                              )
                            }
                          >
                            {timezones.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </StyledTextField>
                          <StyledButton
                            className="submit"
                            type="submit"
                            color="primary"
                            form="timezone-convert"
                          >
                            Get TimeStamp
                          </StyledButton>
                        </Form>
                      </StyledCardContent>
                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          TimeStamp
                        </StyledTypography>
                        <StyledTypography variant="h5" align="center">
                          {` ${timeStampResultTimezone.toString()}`}
                        </StyledTypography>
                      </StyledCardContent>
                    </StyledGrid>
                  </StyledGrid>
                </StyledExpansionPanelDetails>
              </StyledExpansionPanel>
            </StyledCard>
          </StyledGrid>
          <StyledGrid item xs={12}>
            <StyledCard>
              <StyledExpansionPanel>
                <StyledExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <StyledCardHeader
                    title="Generate Now"
                    subheader="Generate timestamp now time"
                  />
                </StyledExpansionPanelSummary>
                <StyledDivider />
                <StyledExpansionPanelDetails>
                  <StyledGrid container direction="row" justify="space-evenly">
                    <StyledGrid item xs={4}>
                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          Current Time - Local
                        </StyledTypography>
                        <StyledTypography align="center" variant="body1">
                          {`${time.toString()}`}
                        </StyledTypography>
                      </StyledCardContent>

                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          Current Time - Local
                        </StyledTypography>
                        <StyledTypography align="center" variant="body1">
                          {`${time.toLocaleString()}`}
                        </StyledTypography>
                      </StyledCardContent>
                    </StyledGrid>
                    <StyledGrid item xs={4}>
                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          Current Time - ISO Format
                        </StyledTypography>
                        <StyledTypography align="center" variant="body1">
                          {`${time.toISOString()}`}
                        </StyledTypography>
                      </StyledCardContent>
                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          Current Time - UTC Format
                        </StyledTypography>
                        <StyledTypography align="center" variant="body1">
                          {`${time.toUTCString()}`}
                        </StyledTypography>
                      </StyledCardContent>
                    </StyledGrid>
                    <StyledGrid item xs={12}>
                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          Current TimeStamp
                        </StyledTypography>
                        <StyledTypography variant="h5" align="center">
                          {`${currentTimestamp.toString()}`}
                        </StyledTypography>
                      </StyledCardContent>
                      <StyledCardActions>
                        <StyledButton onClick={getTimeStamp}>
                          Get TimeStamp
                        </StyledButton>
                      </StyledCardActions>
                    </StyledGrid>
                  </StyledGrid>
                </StyledExpansionPanelDetails>
              </StyledExpansionPanel>
            </StyledCard>
          </StyledGrid>
          <StyledGrid item xs={12}>
            <StyledCard>
              <StyledExpansionPanel>
                <StyledExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <StyledCardHeader
                    title="Timestamp - Date"
                    subheader="Convert timestamp to date"
                  />
                </StyledExpansionPanelSummary>

                <StyledDivider />
                <StyledExpansionPanelDetails>
                  <StyledGrid container direction="row" justify="space-evenly">
                    <StyledGrid item xs={12}>
                      <StyledCardContent>
                        <Form
                          onSubmit={convertTimestamp}
                          id="timestamp-convert"
                        >
                          <StyledTextField
                            id="timestamp"
                            label="Timestamp"
                            variant="outlined"
                            margin="dense"
                            size="small"
                            value={timeStampForm}
                            onChange={event =>
                              setTimeStampForm(parseInt(event.target.value))
                            }
                          />
                          <StyledButton
                            className="submit"
                            type="submit"
                            color="primary"
                            form="timestamp-convert"
                          >
                            Get TimeStamp
                          </StyledButton>
                        </Form>
                      </StyledCardContent>
                    </StyledGrid>
                    <StyledGrid item xs={4}>
                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          Date - Local
                        </StyledTypography>
                        <StyledTypography variant="body1" align="center">
                          {`${dateResultTimeStampForm}`}
                        </StyledTypography>
                      </StyledCardContent>
                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          Date - Local
                        </StyledTypography>
                        <StyledTypography variant="body1" align="center">
                          {`${dateResultTimeStampForm.toLocaleString()}`}
                        </StyledTypography>
                      </StyledCardContent>
                    </StyledGrid>
                    <StyledGrid item xs={4}>
                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          Date - ISO Format
                        </StyledTypography>
                        <StyledTypography variant="body1" align="center">
                          {`${dateResultTimeStampForm.toISOString()}`}
                        </StyledTypography>
                      </StyledCardContent>
                      <StyledCardContent>
                        <StyledTypography
                          className="title"
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          Date - UTC Format
                        </StyledTypography>
                        <StyledTypography variant="body1" align="center">
                          {`${dateResultTimeStampForm.toUTCString()}`}
                        </StyledTypography>
                      </StyledCardContent>
                    </StyledGrid>
                  </StyledGrid>
                </StyledExpansionPanelDetails>
              </StyledExpansionPanel>
            </StyledCard>
          </StyledGrid>
        </StyledGrid>
      </StyledContainer>
    </>
  );
};

export default Timestamp;
