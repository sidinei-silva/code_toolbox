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
  StyledCardHeader,
  ExampleDiv,
  StyledHuePicker,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableCell,
  StyledTableRow,
  StyledTableContainer,
} from './styles';

interface BorderRadius {
  topLeft: number | string | Array<number | string>;
  topRight: number | string | Array<number | string>;
  bottomLeft: number | string | Array<number | string>;
  bottomRight: number | string | Array<number | string>;
  borderWidth: number | string | Array<number | string>;
  borderStyle: string;
  borderColor: string;
  backgroundColor: string;
}

export default function BorderRadius() {
  const [borderRadius, setBorderRadius] = useState<BorderRadius>({
    topLeft: 30,
    topRight: 30,
    bottomLeft: 30,
    bottomRight: 30,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#000000',
    backgroundColor: '#090856',
  });

  const [allCorners, setAllCorners] = useState<
    number | string | Array<number | string>
  >(30);

  // Functions
  const allCornersHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      ...rest
    } = borderRadius;

    setAllCorners(newValue);

    setBorderRadius({
      topLeft: newValue,
      topRight: newValue,
      bottomLeft: newValue,
      bottomRight: newValue,
      ...rest,
    });
  };

  const allCornersHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      ...rest
    } = borderRadius;

    const newValue =
      event.target.value === '' ? '' : Number(event.target.value);

    setAllCorners(newValue);

    setBorderRadius({
      topLeft: newValue,
      topRight: newValue,
      bottomLeft: newValue,
      bottomRight: newValue,
      ...rest,
    });
  };

  const allCornersHandleBlur = () => {
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      ...rest
    } = borderRadius;

    if (allCorners < 0) {
      setAllCorners(0);
      setBorderRadius({
        topLeft: 0,
        topRight: 0,
        bottomLeft: 0,
        bottomRight: 0,
        ...rest,
      });
    } else if (allCorners > 200) {
      setAllCorners(200);
      setBorderRadius({
        topLeft: 200,
        topRight: 200,
        bottomLeft: 200,
        bottomRight: 200,
        ...rest,
      });
    }
  };

  // ===== topLeft =====
  const topLeftHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { topLeft, ...rest } = borderRadius;
    setBorderRadius({ topLeft: newValue, ...rest });
  };

  const topLeftHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { topLeft, ...rest } = borderRadius;
    setBorderRadius({
      topLeft: event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const topLeftHandleBlur = () => {
    const { topLeft, ...rest } = borderRadius;
    if (topLeft < 0) {
      setBorderRadius({ topLeft: 0, ...rest });
    } else if (topLeft > 200) {
      setBorderRadius({ topLeft: 200, ...rest });
    }
  };

  // ==== End topLeft ====

  // ==== topRight ====
  const topRightHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { topRight, ...rest } = borderRadius;
    setBorderRadius({ topRight: newValue, ...rest });
  };

  const topRightHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { topRight, ...rest } = borderRadius;
    setBorderRadius({
      topRight: event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const topRightHandleBlur = () => {
    const { topRight, ...rest } = borderRadius;
    if (topRight < 0) {
      setBorderRadius({ topRight: 0, ...rest });
    } else if (topRight > 200) {
      setBorderRadius({ topRight: 0, ...rest });
    }
  };
  // ==== End topRight ====

  // ===== bottomLeft =====
  const bottomLeftHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { bottomLeft, ...rest } = borderRadius;
    setBorderRadius({ bottomLeft: newValue, ...rest });
  };

  const bottomLeftHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { bottomLeft, ...rest } = borderRadius;
    setBorderRadius({
      bottomLeft: event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const bottomLeftHandleBlur = () => {
    const { bottomLeft, ...rest } = borderRadius;
    if (bottomLeft < 0) {
      setBorderRadius({ bottomLeft: 0, ...rest });
    } else if (bottomLeft > 200) {
      setBorderRadius({ bottomLeft: 200, ...rest });
    }
  };

  // ==== End bottomLeft ====

  // ==== bottomRight ====
  const bottomRightHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { bottomRight, ...rest } = borderRadius;
    setBorderRadius({ bottomRight: newValue, ...rest });
  };

  const bottomRightHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { bottomRight, ...rest } = borderRadius;
    setBorderRadius({
      bottomRight: event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  // End bottomRight

  // ===== borderWidth =====
  const borderWidthHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { borderWidth, ...rest } = borderRadius;
    setBorderRadius({ borderWidth: newValue, ...rest });
  };

  const borderWidthHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { borderWidth, ...rest } = borderRadius;
    setBorderRadius({
      borderWidth: event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const borderWidthHandleBlur = () => {
    const { borderWidth, ...rest } = borderRadius;
    if (borderWidth < 0) {
      setBorderRadius({ borderWidth: 0, ...rest });
    } else if (borderWidth > 200) {
      setBorderRadius({ borderWidth: 200, ...rest });
    }
  };

  // ==== End topLeft ====

  const bottomRightHandleBlur = () => {
    const { bottomRight, ...rest } = borderRadius;
    if (bottomRight < 0) {
      setBorderRadius({ bottomRight: 0, ...rest });
    } else if (bottomRight > 200) {
      setBorderRadius({ bottomRight: 0, ...rest });
    }
  };
  // ==== End bottomRight ====

  // ==== borderStyle ====
  const borderStyleHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { borderStyle, ...rest } = borderRadius;
    setBorderRadius({
      borderStyle: event.target.value,
      ...rest,
    });
  };

  // ==== borderStyle ====
  const borderColorHandleInputChange = (color: any) => {
    const { borderColor, ...rest } = borderRadius;
    setBorderRadius({
      borderColor: color.hex,
      ...rest,
    });
  };

  // ==== backgrounColor ====
  const backgroundColorHandleInputChange = (color: any) => {
    const { backgroundColor, ...rest } = borderRadius;
    setBorderRadius({
      backgroundColor: color.hex,
      ...rest,
    });
  };

  return (
    <>
      <Head>
        <title>Border Radius - Code Toolbox</title>
        <meta
          name="keywords"
          content="Code, code, toolbox, Toolbox, Code Toolbox, code toolbox, CodeToolbox, codetoolbox, BorderRadius, RadiusBorder, borderradius, radiusborder, Border Radius, Border, border, radius, Radius, Radius Border, radius border,CSS, JavaScript"
        />
        <meta
          name="description"
          content="Generator CSS and View to Border Radius"
        />
      </Head>
      <Header />

      <StyledContainer>
        <Title>Border Radius - CSS</Title>
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
                    {/* allCorners */}
                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={2}
                        justify="center"
                        alignItems="flex-end"
                        direction="row"
                      >
                        <StyledGrid item xs={8} md={8} lg={8}>
                          <StyledTypography id="input-slider" gutterBottom>
                            All Corners
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof allCorners === 'number' ? allCorners : 0
                            }
                            min={0}
                            max={200}
                            step={1}
                            onChange={allCornersHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="allCorners"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={allCorners}
                            onChange={allCornersHandleInputChange}
                            onBlur={allCornersHandleBlur}
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
                    <StyledDivider />
                    {/* Top Left */}
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
                            Top Left
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof borderRadius.topLeft === 'number'
                                ? borderRadius.topLeft
                                : 0
                            }
                            min={0}
                            max={200}
                            step={1}
                            onChange={topLeftHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="topLeft"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={borderRadius.topLeft}
                            onChange={topLeftHandleInputChange}
                            onBlur={topLeftHandleBlur}
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
                    {/* Top Right */}
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
                            Top Right
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof borderRadius.topRight === 'number'
                                ? borderRadius.topRight
                                : 0
                            }
                            min={0}
                            max={200}
                            step={1}
                            onChange={topRightHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="topRight"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={borderRadius.topRight}
                            onChange={topRightHandleInputChange}
                            onBlur={topRightHandleBlur}
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
                    {/* Bottom Left */}
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
                            Bottom Left
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof borderRadius.bottomLeft === 'number'
                                ? borderRadius.bottomLeft
                                : 0
                            }
                            min={0}
                            max={200}
                            step={1}
                            onChange={bottomLeftHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="bottomLeft"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={borderRadius.bottomLeft}
                            onChange={bottomLeftHandleInputChange}
                            onBlur={bottomLeftHandleBlur}
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
                    {/* Bottom Right */}
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
                            Bottom Right
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof borderRadius.bottomRight === 'number'
                                ? borderRadius.bottomRight
                                : 0
                            }
                            min={0}
                            max={200}
                            step={1}
                            onChange={bottomRightHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="bottomRight"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={borderRadius.bottomRight}
                            onChange={bottomRightHandleInputChange}
                            onBlur={bottomRightHandleBlur}
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
                    <StyledDivider />
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
                            Border Width (Optional)
                          </StyledTypography>
                          <StyledSlider
                            value={
                              typeof borderRadius.borderWidth === 'number'
                                ? borderRadius.borderWidth
                                : 0
                            }
                            min={0}
                            max={200}
                            step={1}
                            onChange={borderWidthHandleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </StyledGrid>
                        <StyledGrid item xs={3} md={2} lg={2}>
                          <StyledTextField
                            margin="dense"
                            id="borderWidth"
                            label="px"
                            variant="outlined"
                            size="small"
                            value={borderRadius.borderWidth}
                            onChange={borderWidthHandleInputChange}
                            onBlur={borderWidthHandleBlur}
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
                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={2}
                        justify="center"
                        alignContent="center"
                      >
                        <StyledGrid item md={8} lg={8} xs={11}>
                          <StyledTypography id="input-slider" gutterBottom>
                            Border Color (Optional)
                          </StyledTypography>
                          <StyledHuePicker
                            color={borderRadius.borderColor}
                            onChange={borderColorHandleInputChange}
                          />
                        </StyledGrid>
                        <StyledGrid item xs={6} md={2} lg={2}>
                          <StyledTextField
                            className="digit-4"
                            id="outlined-select-currency"
                            select
                            label="Border Style"
                            value={borderRadius.borderStyle}
                            margin="dense"
                            variant="outlined"
                            size="small"
                            SelectProps={{
                              native: true,
                            }}
                            onChange={borderStyleHandleInputChange}
                          >
                            <option key="solid" value="solid">
                              solid
                            </option>
                            <option key="dotted" value="dotted">
                              dotted
                            </option>
                            <option key="dashed" value="dashed">
                              dashed
                            </option>
                            <option key="double" value="double">
                              double
                            </option>
                            <option key="groove" value="groove">
                              groove
                            </option>
                            <option key="ridge" value="ridge">
                              ridge
                            </option>
                            <option key="inset" value="inset">
                              inset
                            </option>
                            <option key="outset" value="outset">
                              outset
                            </option>
                            <option key="inherit" value="inherit">
                              inherit
                            </option>
                            <option key="hidden" value="hidden">
                              hidden
                            </option>
                            <option key="none" value="none">
                              none
                            </option>
                          </StyledTextField>
                        </StyledGrid>
                      </StyledGrid>
                    </StyledCardContent>
                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={2}
                        justify="center"
                        alignContent="center"
                      >
                        <StyledGrid item md={10} lg={10} xs={11}>
                          <StyledTypography id="input-slider" gutterBottom>
                            Background Color (Optional)
                          </StyledTypography>
                          <StyledHuePicker
                            color={borderRadius.backgroundColor}
                            onChange={backgroundColorHandleInputChange}
                          />
                        </StyledGrid>
                      </StyledGrid>
                    </StyledCardContent>
                  </StyledGrid>

                  <StyledGrid item md={6} lg={6}>
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
                              {`background-color: ${borderRadius.backgroundColor}`}
                            </StyledTypography>
                            <StyledTypography variant="body2">
                              {`border-radius: ${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomLeft}px ${borderRadius.bottomRight}px;`}
                            </StyledTypography>
                            <StyledTypography variant="body2">
                              {`-moz-border-radius: ${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomLeft}px ${borderRadius.bottomRight}px;`}
                            </StyledTypography>
                            <StyledTypography variant="body2">
                              {`-webkit-border-radius: ${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomLeft}px ${borderRadius.bottomRight}px;`}
                            </StyledTypography>
                            {borderRadius.borderWidth ? (
                              <StyledTypography variant="body2">{`border: ${borderRadius.borderWidth}px  ${borderRadius.borderStyle} ${borderRadius.borderColor};`}</StyledTypography>
                            ) : null}
                          </StyledCardContent>
                        </StyledCard>
                      </StyledGrid>
                      <StyledGrid item md={12} lg={12} xs={12}>
                        <ExampleDiv
                          id="example-div"
                          borderwidth={borderRadius.borderWidth}
                          topleft={borderRadius.topLeft}
                          topright={borderRadius.topRight}
                          bottomleft={borderRadius.bottomLeft}
                          bottomright={borderRadius.bottomRight}
                          borderstyle={borderRadius.borderStyle}
                          bordercolor={borderRadius.borderColor}
                          backgroundcolor={borderRadius.backgroundColor}
                        />
                      </StyledGrid>
                    </StyledGrid>
                  </StyledGrid>
                </StyledGrid>
              </StyledCardContent>
            </StyledCard>
          </StyledGrid>
          <StyledGrid item md={12} lg={12} xs={12}>
            <StyledCard>
              <StyledContainer>
                <StyledCardHeader title="What is Border Radius?" />
                <StyledCardContent className="text-content">
                  <StyledTypography>
                    <q>
                      The border-radius CSS property rounds the corners of an
                      element&apos;s outer border edge. You can set a single
                      radius to make circular corners, or two radii to make
                      elliptical corners.
                    </q>
                    <span> - </span>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius">
                      MDN web docs - border-radius
                    </a>
                  </StyledTypography>
                </StyledCardContent>
                <StyledCardHeader title="Values" />
                <StyledCardContent className="text-content">
                  <StyledTableContainer>
                    <StyledTable>
                      <caption>
                        <StyledTypography align="right">
                          <a href="https://htmldog.com/references/css/properties/border-radius/">
                            Font - HTML Dog - CSS Property: border-radius
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
                          <StyledTableCell>length</StyledTableCell>
                          <StyledTableCell>
                            Uniform circle radius for every corner.
                          </StyledTableCell>
                          <StyledTableCell>
                            <code>1em</code>
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell>percentage</StyledTableCell>
                          <StyledTableCell>
                            Uniform ellipse radius for every corner. Horizontal
                            radius is calculated as a percentage of the border
                            box’s width. Vertical radius is calculated as a
                            percentage of the border box’s height.
                          </StyledTableCell>
                          <StyledTableCell>
                            <code>50%</code>
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell>
                            [value]&nbsp;[value]
                          </StyledTableCell>
                          <StyledTableCell>
                            First value is top-left and bottom-right corners.
                            Second value is top-right and bottom-left corners.
                          </StyledTableCell>
                          <StyledTableCell>
                            <code>10px&nbsp;20px</code>
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell>
                            [value]&nbsp;[value]&nbsp;[value]
                          </StyledTableCell>
                          <StyledTableCell>
                            First value is top-left corner. Second value is
                            top-right and bottom-left corners. Third value is
                            bottom-right corner.
                          </StyledTableCell>
                          <StyledTableCell>
                            <code>10px&nbsp;20px&nbsp;30px</code>
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell>
                            [value]&nbsp;[value]&nbsp;[value]&nbsp;[value]
                          </StyledTableCell>
                          <StyledTableCell>
                            First value is top-left corner. Second value is
                            top-right corner. Third value is bottom-right
                            corner. Fourth value is bottom-left corner.
                          </StyledTableCell>
                          <StyledTableCell>
                            <code>10px&nbsp;20px&nbsp;30px&nbsp;40px</code>
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell>
                            [values]&nbsp;
                            <code>/</code>
                            &nbsp;[values]
                          </StyledTableCell>
                          <StyledTableCell>
                            First set of values specifies horizontal radii.
                            Second set of values specifies vertical radii.
                          </StyledTableCell>
                          <StyledTableCell>
                            <code>
                              10px&nbsp;20px&nbsp;/&nbsp;5px&nbsp;10px
                            </code>
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
