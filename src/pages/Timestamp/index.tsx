/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Head from 'next/head';

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
import Footer from '../../components/Footer';

import timezones from './timezones';

const Timestamp: React.FC = () => {
  // document.title = 'Timestamp - Code Toolbox';
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
      <Head>
        <title>Timestamp - Code Toolbox</title>
        <meta
          name="keywords"
          content="Code, code, toolbox, Toolbox, Code Toolbox, code toolbox, CodeToolbox, codetoolbox, timestamp, Timestamp, Time Stamp, time stamp, time ,CSS, JavaScript"
        />
        <meta
          name="description"
          content="Convert date/time local or inputed to timestamp javascript"
        />
      </Head>
      <Header />
      <StyledContainer>
        <Title>Timestamp - Javascript</Title>
        <StyledGrid container alignItems="stretch" justify="center" spacing={3}>
          <StyledGrid item md={11} xs={12}>
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
                  <StyledGrid container justify="center" alignContent="center">
                    <StyledGrid item xs>
                      <StyledCardContent>
                        <Form
                          onSubmit={convertDateTimezone}
                          id="timezone-convert"
                        >
                          <StyledGrid container spacing={1} justify="center">
                            <StyledGrid item lg={3} md={3}>
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
                            </StyledGrid>
                            <StyledGrid item lg={2} md={2}>
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
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </StyledTextField>
                            </StyledGrid>
                            <StyledGrid item lg={1} md={1}>
                              <StyledButton
                                className="submit"
                                type="submit"
                                color="primary"
                                form="timezone-convert"
                              >
                                Get TimeStamp
                              </StyledButton>
                            </StyledGrid>
                          </StyledGrid>
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
          <StyledGrid item md={11} xs={12}>
            <StyledCard>
              <StyledExpansionPanel defaultExpanded>
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
                    <StyledGrid item lg={4}>
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
                    <StyledGrid item lg={4}>
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
          <StyledGrid item md={11} xs={12}>
            <StyledCard>
              <StyledExpansionPanel defaultExpanded>
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
                          <StyledGrid container spacing={2} justify="center">
                            <StyledGrid item md={2} lg={2}>
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
                            </StyledGrid>
                            <StyledGrid item md={1} lg={1}>
                              <StyledButton
                                className="submit"
                                type="submit"
                                color="primary"
                                form="timestamp-convert"
                              >
                                Get TimeStamp
                              </StyledButton>
                            </StyledGrid>
                          </StyledGrid>
                        </Form>
                      </StyledCardContent>
                    </StyledGrid>
                    <StyledGrid item lg={4}>
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
                    <StyledGrid item lg={4}>
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
          <StyledGrid item md={11} xs={12}>
            <StyledCard>
              <StyledContainer>
                <StyledCardHeader title="What is timestamp?" />
                <StyledCardContent className="text-content">
                  <StyledTypography>
                    <q>
                      A timestamp is a sequence of characters or encoded
                      information identifying when a certain event occurred,
                      usually giving date and time of day, sometimes accurate to
                      a small fraction of a second. The term derives from rubber
                      stamps used in offices to stamp the current date, and
                      sometimes time, in ink on paper documents, to record when
                      the document was received. Common examples of this type of
                      timestamp are a postmark on a letter or the &quot;in&quot;
                      and &quot;out&quot; times on a time card. In modern times
                      usage of the term has expanded to refer to digital date
                      and time information attached to digital data. For
                      example, computer files contain timestamps that tell when
                      the file was last modified, and digital cameras add
                      timestamps to the pictures they take, recording the date
                      and time the picture was taken.
                    </q>
                    <span> - </span>
                    <a href="https://en.wikipedia.org/wiki/Timestamp">
                      Timestamp - Wikipedia
                    </a>
                  </StyledTypography>
                </StyledCardContent>
                <StyledCardHeader title="Javascript Timestamp vs Unix Timestamp" />
                <StyledCardContent className="text-content">
                  <StyledTypography>
                    The javascript timestamp obtained by the getTime() or
                    Date.now() function is a 13-character string, representing
                    the number of milliseconds passed since January 1, 1970
                    00:00:00 UTC known as
                    <span> </span>
                    <a href="https://en.wikipedia.org/wiki/Unix_time">
                      Unix Epoch.
                    </a>
                    <span> </span>
                    The unix timestamp uses the seconds containing only 10
                    characters as a unit of measurement.
                  </StyledTypography>
                  <br />
                  <StyledTypography>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime">
                      Monzila Developer - getTime()
                    </a>
                  </StyledTypography>
                  <StyledTypography>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now">
                      Monzila Developer - Date.Now() reference
                    </a>
                  </StyledTypography>
                  <br />
                  <br />
                  <StyledTypography>
                    <q>
                      * JavaScript uses milliseconds as the unit of measurement,
                      whereas Unix Time is in seconds.
                    </q>
                    <span> - </span>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime">
                      MDN web docs
                    </a>
                  </StyledTypography>
                </StyledCardContent>
                <StyledDivider />
              </StyledContainer>
            </StyledCard>
          </StyledGrid>
          <StyledGrid item md={11} xs={12}>
            <StyledCard>
              <StyledContainer>
                <StyledCardHeader title="Timestamp Unix (seconds) anothers languages" />
                <StyledCardContent>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>JavaScript: </b>
                    </span>
                    <code>Math.floor(new Date().getTime()/1000.0)</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>PHP: </b>
                    </span>
                    <code>time()</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>Python: </b>
                    </span>
                    <code>import time; time.time()</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>Java: </b>
                    </span>
                    <code>long epoch = System.currentTimeMillis()/1000;</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>C#: </b>
                    </span>
                    <code>DateTimeOffset.Now.ToUnixTimeSeconds()</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>PowerShell: </b>
                    </span>
                    <code>
                      [int][double]::Parse((Get-Date
                      (get-date).touniversaltime() -UFormat %s))
                    </code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>Unix/Linux Shell: </b>
                    </span>
                    <code>date +%s</code>
                  </StyledTypography>
                </StyledCardContent>
              </StyledContainer>
            </StyledCard>
          </StyledGrid>
          <StyledGrid item md={11} xs={12}>
            <StyledCard>
              <StyledContainer>
                <StyledCardHeader title="Timestamp Unix (milliseconds) anothers languages" />
                <StyledCardContent>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>JavaScript: </b>
                    </span>
                    <code> Date.now() // or: new Date().getTime()</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>PHP: </b>
                    </span>
                    <code>round(microtime(true) * 1000)</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>Python: </b>
                    </span>
                    <code>int(round(time.time() * 1000))</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>Java: </b>
                    </span>
                    <code>System.currentTimeMillis()</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>C#: </b>
                    </span>
                    <code>DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()</code>
                  </StyledTypography>
                  <StyledTypography className="list-languages">
                    <span>
                      <b>PowerShell: </b>
                    </span>
                    <code>
                      [double](Get-Date -Date ((Get-Date).ToUniversalTime())
                      -UFormat %s) * 1000
                    </code>
                  </StyledTypography>
                </StyledCardContent>
              </StyledContainer>
            </StyledCard>
          </StyledGrid>
        </StyledGrid>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Timestamp;
