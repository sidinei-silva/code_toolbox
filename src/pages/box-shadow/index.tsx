import React, { useState } from 'react';

import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  StyledContainer,
  Title,
  StyledGrid,
  StyledTypography,
  StyledSlider,
  StyledTextField,
  StyledDivider,
  StyledCardContent,
  StyledCard,
  ExampleDiv,
  StyledTwitterPicker,
  StyledChromePicker,
  CustomGridBackground,
  StyledSwitch,
  StyledCardHeader,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableCell,
  StyledTableRow,
  StyledTableContainer,
} from '../../styles/box-shadow/styles';

interface RGB {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface BoxShadow {
  horizontalLength: number | string | Array<number | string>;
  verticalLength: number | string | Array<number | string>;
  blurRadius: number | string | Array<number | string>;
  spreadRadius: number | string | Array<number | string>;
  shadowColor: RGB;
  boxColor: RGB;
  insetCheck: boolean;
}

export default function BoxShadow() {
  const [boxShadow, setBoxShadow] = useState<BoxShadow>({
    horizontalLength: 10,
    verticalLength: 10,
    blurRadius: 5,
    spreadRadius: 0,
    shadowColor: { r: 0, g: 0, b: 0, a: 0.75 },
    boxColor: { r: 9, g: 8, b: 86, a: 1 },
    insetCheck: false,
  });

  const [backgroundColor, setBackgroundColor] = useState('#fff');

  // ===== horizontalLength =====
  const horizontalLengthHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { horizontalLength, ...rest } = boxShadow;
    setBoxShadow({ horizontalLength: newValue, ...rest });
  };

  const horizontalLengthHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { horizontalLength, ...rest } = boxShadow;
    setBoxShadow({
      horizontalLength:
        event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const horizontalLengthHandleBlur = () => {
    const { horizontalLength, ...rest } = boxShadow;
    if (horizontalLength < -200) {
      setBoxShadow({ horizontalLength: -200, ...rest });
    } else if (horizontalLength > 200) {
      setBoxShadow({ horizontalLength: 200, ...rest });
    }
  };

  // ==== End horizontalLength ====

  // ==== verticalLength ====
  const verticalLengthHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { verticalLength, ...rest } = boxShadow;
    setBoxShadow({ verticalLength: newValue, ...rest });
  };

  const verticalLengthHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { verticalLength, ...rest } = boxShadow;
    setBoxShadow({
      verticalLength:
        event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const verticalLengthHandleBlur = () => {
    const { verticalLength, ...rest } = boxShadow;
    if (verticalLength < -200) {
      setBoxShadow({ verticalLength: -200, ...rest });
    } else if (verticalLength > 200) {
      setBoxShadow({ verticalLength: 0, ...rest });
    }
  };
  // ==== End verticalLength ====

  // ===== blurRadius =====
  const blurRadiusHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { blurRadius, ...rest } = boxShadow;
    setBoxShadow({ blurRadius: newValue, ...rest });
  };

  const blurRadiusHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { blurRadius, ...rest } = boxShadow;
    setBoxShadow({
      blurRadius: event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const blurRadiusHandleBlur = () => {
    const { blurRadius, ...rest } = boxShadow;
    if (blurRadius < 0) {
      setBoxShadow({ blurRadius: 0, ...rest });
    } else if (blurRadius > 200) {
      setBoxShadow({ blurRadius: 200, ...rest });
    }
  };
  // ==== End blurRadius ====

  // ==== spreadRadius ====
  const spreadRadiusHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { spreadRadius, ...rest } = boxShadow;
    setBoxShadow({ spreadRadius: newValue, ...rest });
  };

  const spreadRadiusHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { spreadRadius, ...rest } = boxShadow;
    setBoxShadow({
      spreadRadius: event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };
  // End spreadRadius

  const spreadRadiusHandleBlur = () => {
    const { spreadRadius, ...rest } = boxShadow;
    if (spreadRadius < -200) {
      setBoxShadow({ spreadRadius: -200, ...rest });
    } else if (spreadRadius > 200) {
      setBoxShadow({ spreadRadius: 0, ...rest });
    }
  };
  // ==== End spreadRadius ====

  // ==== shadowColor ====
  const shadowColorHandleInputChange = (color: any) => {
    const { shadowColor, ...rest } = boxShadow;
    setBoxShadow({
      shadowColor: color.rgb,
      ...rest,
    });
  };

  // ==== backgrounColor ====
  const boxColorHandleInputChange = (color: any) => {
    const { boxColor, ...rest } = boxShadow;
    setBoxShadow({
      boxColor: color.rgb,
      ...rest,
    });
  };

  // ==== insetCheck ====
  const insetCheckHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { insetCheck, ...rest } = boxShadow;

    setBoxShadow({
      insetCheck: event.target.checked,
      ...rest,
    });
  };

  // ==== backgrounColor ====
  const backgroundColorHandleInputChange = (color: any) => {
    setBackgroundColor(color.hex);
  };

  return (
    <>
      <Head>
        <title>Box Shadow - Code Toolbox</title>
        <meta
          name="keywords"
          content="Code, code, toolbox, Toolbox, Code Toolbox, code toolbox, CodeToolbox, codetoolbox, boxshadow, shadowbox, BoxShadow, ShadowBox, Shadow Box, shadow box, Box Shadow, box shadow , Box, Shadow, shadow, box,CSS, JavaScript"
        />
        <meta
          name="description"
          content="Generator CSS and View to Box Shadow"
        />
      </Head>
      <Header />

      <StyledContainer>
        <Title>Box Shadow - CSS</Title>
        <StyledGrid container justify="center" spacing={5}>
          <StyledGrid item md={12} lg={12} xs={12}>
            <StyledCard>
              <StyledCardContent>
                <StyledGrid
                  spacing={3}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <StyledGrid item md={6} lg={6}>
                    {/* Horizontal Length */}
                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={2}
                        justify="center"
                        alignItems="flex-end"
                        direction="row"
                      >
                        <StyledGrid item md={8} lg={8} xs={8}>
                          <StyledTypography id="input-slider" gutterBottom>
                            Horizontal Length
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof boxShadow.horizontalLength === 'number'
                                ? boxShadow.horizontalLength
                                : 0
                            }
                            min={-200}
                            max={200}
                            step={1}
                            onChange={horizontalLengthHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="horizontalLength"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={boxShadow.horizontalLength}
                            onChange={horizontalLengthHandleInputChange}
                            onBlur={horizontalLengthHandleBlur}
                            inputProps={{
                              step: 1,
                              min: -200,
                              max: 200,
                              type: 'number',
                              'aria-labelledby': 'input-slider',
                            }}
                          />
                        </StyledGrid>
                      </StyledGrid>
                    </StyledCardContent>
                    {/* Vertical Length */}
                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={2}
                        justify="center"
                        alignItems="flex-end"
                        direction="row"
                      >
                        <StyledGrid item md={8} lg={8} xs={8}>
                          <StyledTypography id="input-slider" gutterBottom>
                            Vertical Length
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof boxShadow.verticalLength === 'number'
                                ? boxShadow.verticalLength
                                : 0
                            }
                            min={-200}
                            max={200}
                            step={1}
                            onChange={verticalLengthHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="verticalLength"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={boxShadow.verticalLength}
                            onChange={verticalLengthHandleInputChange}
                            onBlur={verticalLengthHandleBlur}
                            inputProps={{
                              step: 1,
                              min: -200,
                              max: 200,
                              type: 'number',
                              'aria-labelledby': 'input-slider',
                            }}
                          />
                        </StyledGrid>
                      </StyledGrid>
                    </StyledCardContent>
                    <StyledDivider />
                    {/* Blur Radius */}
                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={2}
                        justify="center"
                        alignItems="flex-end"
                        direction="row"
                      >
                        <StyledGrid item md={8} lg={8} xs={8}>
                          <StyledTypography id="input-slider" gutterBottom>
                            Blur Radius
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof boxShadow.blurRadius === 'number'
                                ? boxShadow.blurRadius
                                : 0
                            }
                            min={0}
                            max={200}
                            step={1}
                            onChange={blurRadiusHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="blurRadius"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={boxShadow.blurRadius}
                            onChange={blurRadiusHandleInputChange}
                            onBlur={blurRadiusHandleBlur}
                            inputProps={{
                              step: 1,
                              min: 0,
                              max: 200,
                              type: 'number',
                              'aria-labelledby': 'input-slider',
                            }}
                          />
                        </StyledGrid>
                      </StyledGrid>
                    </StyledCardContent>
                    {/* Spread Radius */}
                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={2}
                        justify="center"
                        alignItems="flex-end"
                        direction="row"
                      >
                        <StyledGrid item md={8} lg={8} xs={8}>
                          <StyledTypography id="input-slider" gutterBottom>
                            Spread Radius
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof boxShadow.spreadRadius === 'number'
                                ? boxShadow.spreadRadius
                                : 0
                            }
                            min={-200}
                            max={200}
                            step={1}
                            onChange={spreadRadiusHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="spreadRadius"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={boxShadow.spreadRadius}
                            onChange={spreadRadiusHandleInputChange}
                            onBlur={spreadRadiusHandleBlur}
                            inputProps={{
                              step: 1,
                              min: -200,
                              max: 200,
                              type: 'number',
                              'aria-labelledby': 'input-slider',
                            }}
                          />
                        </StyledGrid>
                      </StyledGrid>
                    </StyledCardContent>
                    <StyledDivider />

                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={4}
                        justify="center"
                        alignContent="center"
                      >
                        <StyledGrid item md={5} lg={5} xs={11}>
                          <StyledTypography id="input-slider" gutterBottom>
                            Shadow Color
                          </StyledTypography>
                          <StyledChromePicker
                            color={boxShadow.shadowColor}
                            onChange={shadowColorHandleInputChange}
                          />
                        </StyledGrid>

                        <StyledGrid item md={5} lg={5} xs={11}>
                          <StyledTypography id="input-slider" gutterBottom>
                            Background Box
                          </StyledTypography>
                          <StyledChromePicker
                            color={boxShadow.boxColor}
                            onChange={boxColorHandleInputChange}
                          />
                        </StyledGrid>
                      </StyledGrid>
                    </StyledCardContent>
                    <StyledDivider />
                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={5}
                        justify="center"
                        alignContent="center"
                        alignItems="center"
                      >
                        <StyledGrid item xs={11} md={4} lg={4}>
                          <StyledGrid container alignItems="center" spacing={1}>
                            <StyledGrid item>Outline</StyledGrid>
                            <StyledGrid item>
                              <StyledSwitch
                                checked={boxShadow.insetCheck}
                                onChange={insetCheckHandleInputChange}
                                name="checkedC"
                              />
                            </StyledGrid>
                            <StyledGrid item>Inset</StyledGrid>
                          </StyledGrid>
                        </StyledGrid>
                        <StyledGrid item md={6} lg={6} xs={11}>
                          <StyledTypography id="input-slider" gutterBottom>
                            Background Application
                          </StyledTypography>
                          <StyledTwitterPicker
                            color={backgroundColor}
                            onChange={backgroundColorHandleInputChange}
                          />
                        </StyledGrid>
                      </StyledGrid>
                    </StyledCardContent>
                  </StyledGrid>

                  <StyledGrid item md={6} lg={6}>
                    <CustomGridBackground backgroundcolor={backgroundColor}>
                      <StyledGrid
                        container
                        justify="center"
                        direction="column"
                        alignItems="center"
                        spacing={3}
                      >
                        <StyledGrid item md={12} lg={12} xs={12}>
                          <StyledCard>
                            <StyledCardContent>
                              <StyledTypography variant="body2">
                                {`background-color: rgba(${boxShadow.boxColor.r}, ${boxShadow.boxColor.g}, ${boxShadow.boxColor.b}, ${boxShadow.boxColor.a})`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                {`-webkit-box-shadow: ${
                                  boxShadow.insetCheck ? 'inset' : ''
                                } ${boxShadow.horizontalLength}px ${
                                  boxShadow.verticalLength
                                }px ${boxShadow.blurRadius}px ${
                                  boxShadow.spreadRadius
                                }px rgba(${boxShadow.shadowColor.r}, ${
                                  boxShadow.shadowColor.g
                                }, ${boxShadow.shadowColor.b}, ${
                                  boxShadow.shadowColor.a
                                })`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                {`-moz-box-shadow: ${
                                  boxShadow.insetCheck ? 'inset' : ''
                                } ${boxShadow.horizontalLength}px ${
                                  boxShadow.verticalLength
                                }px ${boxShadow.blurRadius}px ${
                                  boxShadow.spreadRadius
                                }px rgba(${boxShadow.shadowColor.r}, ${
                                  boxShadow.shadowColor.g
                                }, ${boxShadow.shadowColor.b}, ${
                                  boxShadow.shadowColor.a
                                })`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                {`box-shadow: ${
                                  boxShadow.insetCheck ? 'inset' : ''
                                } ${boxShadow.horizontalLength}px ${
                                  boxShadow.verticalLength
                                }px ${boxShadow.blurRadius}px ${
                                  boxShadow.spreadRadius
                                }px rgba(${boxShadow.shadowColor.r}, ${
                                  boxShadow.shadowColor.g
                                }, ${boxShadow.shadowColor.b}, ${
                                  boxShadow.shadowColor.a
                                })`}
                              </StyledTypography>
                            </StyledCardContent>
                          </StyledCard>
                        </StyledGrid>
                        <StyledGrid
                          id="grid-example-div"
                          item
                          md={12}
                          lg={12}
                          xs={12}
                        >
                          <ExampleDiv
                            id="example-div"
                            horizontallength={boxShadow.horizontalLength}
                            verticallength={boxShadow.verticalLength}
                            blurradius={boxShadow.blurRadius}
                            spreadradius={boxShadow.spreadRadius}
                            shadowcolor={boxShadow.shadowColor}
                            boxcolor={boxShadow.boxColor}
                            inset={boxShadow.insetCheck}
                          />
                        </StyledGrid>
                      </StyledGrid>
                    </CustomGridBackground>
                  </StyledGrid>
                </StyledGrid>
              </StyledCardContent>
            </StyledCard>
          </StyledGrid>
          <StyledGrid item md={12} lg={12} xs={12}>
            <StyledCard>
              <StyledContainer>
                <StyledCardHeader title="What is Box Shadow?" />
                <StyledCardContent className="text-content">
                  <StyledTypography>
                    <q>
                      The box-shadow CSS property adds shadow effects around an
                      element&apos;s frame. You can set multiple effects
                      separated by commas. A box shadow is described by X and Y
                      offsets relative to the element, blur and spread radius,
                      and color.
                    </q>
                    <span> - </span>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow">
                      MDN web docs - box-shadow
                    </a>
                  </StyledTypography>
                </StyledCardContent>
                <StyledCardHeader title="Values" />
                <StyledCardContent className="text-content">
                  <StyledTableContainer>
                    <StyledTable>
                      <caption>
                        <StyledTypography align="right">
                          <a href="https://htmldog.com/references/css/properties/box-shadow/">
                            Font - HTML Dog - CSS Property: box-shadow
                          </a>
                        </StyledTypography>
                      </caption>
                      <StyledTableHead>
                        <StyledTableRow>
                          <StyledTableCell>Value</StyledTableCell>
                          <StyledTableCell>Note</StyledTableCell>
                          <StyledTableCell>Example</StyledTableCell>
                        </StyledTableRow>
                      </StyledTableHead>
                      <StyledTableBody>
                        <StyledTableRow>
                          <StyledTableCell>none</StyledTableCell>
                          <StyledTableCell>No shadow. Default.</StyledTableCell>
                          <StyledTableCell />
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell>
                            inset [length] [length]
                          </StyledTableCell>
                          <StyledTableCell>
                            <ul>
                              <li>
                                inset is optional — if used, this specifies that
                                the shadow falls inwards, rather than outwards.
                              </li>
                              <li>
                                <span>First length is the </span>
                                <b>horizontal offset. </b>
                                <span>
                                  A positive . A positive value pushes the
                                  shadow to the right. A negative value pushes
                                  it to the left. Required.
                                </span>
                              </li>
                              <li>
                                <span>Second length is the </span>

                                <strong>vertical offset </strong>
                                <span>
                                  . A positive value pushes the shadow down. A
                                  negative value pushes it up. Required.
                                </span>
                              </li>
                              <li>
                                <span>Third length is the </span>

                                <strong>blur radius </strong>
                                <span>
                                  . The higher the value, the greater the blur.
                                  Should not be negative. Optional — if unused,
                                  defaults to 0 blur).
                                </span>
                              </li>
                              <li>
                                <span>Fourth length is the </span>
                                <strong>spread distance. </strong>
                                <span>
                                  A positive value expands the shadow. A
                                  negative value contracts it. Optional — if
                                  unused, defaults to 0 (no spread).
                                </span>
                              </li>
                              <li>
                                <span>
                                  Color is the shadow color. Optional — if
                                  unused, defaults to the computed value of
                                  color.
                                </span>
                              </li>
                            </ul>
                          </StyledTableCell>
                          <StyledTableCell>
                            <code>
                              inset 5px -5px 10px 10px rgba(0,0,0,0.2)
                            </code>
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell>
                            [value]&nbsp;[value]
                          </StyledTableCell>
                          <StyledTableCell>
                            Multiple shadows. A list of shadow values can be
                            separated by commas. The first value set will define
                            the top shadow, the second the shadow generated
                            underneath that, and so on.
                          </StyledTableCell>
                          <StyledTableCell>
                            <code>2px 2px 3px red, 4px 4px 3px blue</code>
                          </StyledTableCell>
                        </StyledTableRow>
                      </StyledTableBody>
                    </StyledTable>
                  </StyledTableContainer>
                </StyledCardContent>
                <StyledDivider />
              </StyledContainer>
            </StyledCard>
          </StyledGrid>
        </StyledGrid>
      </StyledContainer>
      <Footer />
    </>
  );
}
