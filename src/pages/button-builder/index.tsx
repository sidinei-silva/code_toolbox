/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Head from 'next/head';
import bootstrapPreset from '../../utils/button-builder/presets/bootstrap';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import optionsFontWeight from '../../utils/button-builder/options-font-weight';

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
  StyledTwitterPicker,
  StyledChromePicker,
  CustomGridBackground,
  ExampleButton,
  StyledExpansionPanel,
  StyledExpansionPanelSummary,
  StyledExpansionPanelDetails,
  StyledSwitch,
} from '../../styles/button-builder/styles';

interface RGB {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface ButtonBuilder {
  horizontalPadding: number | string | Array<number | string>;
  verticalPadding: number | string | Array<number | string>;
  fontColor: RGB;
  boxColor: RGB;
  fontWeight: number | string;
  fontSize: number | string | Array<number | string>;
  pointerCheck: boolean;

  // shadow
  shadowHorizontalLength: number | string | Array<number | string>;
  shadowVerticalLength: number | string | Array<number | string>;
  shadowBlurRadius: number | string | Array<number | string>;
  shadowSpreadRadius: number | string | Array<number | string>;
  shadowColor: RGB;

  // Border Radius
  borderRadius: number | string | Array<number | string>;
  borderWidth: number | string | Array<number | string>;
  borderStyle: string;
  borderColor: RGB;

  // Hover Options
  hoverFontColor: RGB;
  hoverBoxColor: RGB;
  hoverBorderColor: RGB;

  // active Options
  activeFontColor: RGB;
  activeBoxColor: RGB;
  activeBorderColor: RGB;
}

export default function ButtonBuilder() {
  const [buttonState, setButtonState] = useState<ButtonBuilder>({
    // Size
    horizontalPadding: 20,
    verticalPadding: 12,
    pointerCheck: true,

    fontColor: { r: 0, g: 0, b: 0, a: 1 },
    fontWeight: 'normal',
    shadowHorizontalLength: 5,
    shadowVerticalLength: 5,
    shadowBlurRadius: 10,
    shadowSpreadRadius: 0,
    shadowColor: { r: 0, g: 0, b: 0, a: 0.5 },
    boxColor: { r: 255, g: 255, b: 255, a: 1 },
    fontSize: 15,

    // Border Radius
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'outset',
    borderColor: { r: 0, g: 0, b: 0, a: 1 },

    // Hover
    hoverFontColor: { r: 255, g: 255, b: 255, a: 1 },
    hoverBoxColor: { r: 9, g: 8, b: 86, a: 1 },
    hoverBorderColor: { r: 255, g: 255, b: 255, a: 1 },

    // active
    activeFontColor: { r: 0, g: 0, b: 0, a: 1 },
    activeBoxColor: { r: 255, g: 255, b: 255, a: 1 },
    activeBorderColor: { r: 0, g: 0, b: 0, a: 1 },
  });

  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const [textButton, setTextButton] = useState('click me');

  // horizontalPadding
  const horizontalPaddingHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { horizontalPadding, ...rest } = buttonState;

    setButtonState({
      horizontalPadding: newValue,
      ...rest,
    });
  };

  const horizontalPaddingHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { horizontalPadding, ...rest } = buttonState;

    const newValue =
      event.target.value === '' ? '' : Number(event.target.value);

    setButtonState({
      horizontalPadding: newValue,
      ...rest,
    });
  };

  const horizontalPaddingHandleBlur = () => {
    const { horizontalPadding, ...rest } = buttonState;
    if (horizontalPadding < 0) {
      setButtonState({ horizontalPadding: 0, ...rest });
    } else if (horizontalPadding > 200) {
      setButtonState({ horizontalPadding: 200, ...rest });
    }
  };

  // verticalPadding
  const verticalPaddingHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { verticalPadding, ...rest } = buttonState;

    setButtonState({
      verticalPadding: newValue,
      ...rest,
    });
  };

  const verticalPaddingHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { verticalPadding, ...rest } = buttonState;

    const newValue =
      event.target.value === '' ? '' : Number(event.target.value);

    setButtonState({
      verticalPadding: newValue,
      ...rest,
    });
  };

  const verticalPaddingHandleBlur = () => {
    const { verticalPadding, ...rest } = buttonState;
    if (verticalPadding < 0) {
      setButtonState({ verticalPadding: 0, ...rest });
    } else if (verticalPadding > 200) {
      setButtonState({ verticalPadding: 200, ...rest });
    }
  };

  // ==== pointerCheck ====
  const pointerCheckHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { pointerCheck, ...rest } = buttonState;

    setButtonState({
      pointerCheck: event.target.checked,
      ...rest,
    });
  };

  // ===== shadowHorizontalLength =====
  const shadowHorizontalLengthHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { shadowHorizontalLength, ...rest } = buttonState;
    setButtonState({ shadowHorizontalLength: newValue, ...rest });
  };

  const shadowHorizontalLengthHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { shadowHorizontalLength, ...rest } = buttonState;
    setButtonState({
      shadowHorizontalLength:
        event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const shadowHorizontalLengthHandleBlur = () => {
    const { shadowHorizontalLength, ...rest } = buttonState;
    if (shadowHorizontalLength < -200) {
      setButtonState({ shadowHorizontalLength: -200, ...rest });
    } else if (shadowHorizontalLength > 200) {
      setButtonState({ shadowHorizontalLength: 200, ...rest });
    }
  };

  // ==== shadowVerticalLength ====
  const shadowVerticalLengthHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { shadowVerticalLength, ...rest } = buttonState;
    setButtonState({ shadowVerticalLength: newValue, ...rest });
  };

  const shadowVerticalLengthHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { shadowVerticalLength, ...rest } = buttonState;
    setButtonState({
      shadowVerticalLength:
        event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const shadowVerticalLengthHandleBlur = () => {
    const { shadowVerticalLength, ...rest } = buttonState;
    if (shadowVerticalLength < -200) {
      setButtonState({ shadowVerticalLength: -200, ...rest });
    } else if (shadowVerticalLength > 200) {
      setButtonState({ shadowVerticalLength: 200, ...rest });
    }
  };
  // ==== End shadowVerticalLength ====

  // ===== shadowBlurRadius =====
  const shadowBlurRadiusHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { shadowBlurRadius, ...rest } = buttonState;
    setButtonState({ shadowBlurRadius: newValue, ...rest });
  };

  const shadowBlurRadiusHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { shadowBlurRadius, ...rest } = buttonState;
    setButtonState({
      shadowBlurRadius:
        event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const shadowBlurRadiusHandleBlur = () => {
    const { shadowBlurRadius, ...rest } = buttonState;
    if (shadowBlurRadius < 0) {
      setButtonState({ shadowBlurRadius: 0, ...rest });
    } else if (shadowBlurRadius > 200) {
      setButtonState({ shadowBlurRadius: 200, ...rest });
    }
  };
  // ==== End shadowBlurRadius ====

  // ==== shadowSpreadRadius ====
  const shadowSpreadRadiusHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { shadowSpreadRadius, ...rest } = buttonState;
    setButtonState({ shadowSpreadRadius: newValue, ...rest });
  };

  const shadowSpreadRadiusHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { shadowSpreadRadius, ...rest } = buttonState;
    setButtonState({
      shadowSpreadRadius:
        event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };
  // End shadowSpreadRadius

  const shadowSpreadRadiusHandleBlur = () => {
    const { shadowSpreadRadius, ...rest } = buttonState;
    if (shadowSpreadRadius < -200) {
      setButtonState({ shadowSpreadRadius: -200, ...rest });
    } else if (shadowSpreadRadius > 200) {
      setButtonState({ shadowSpreadRadius: 200, ...rest });
    }
  };
  // ==== End shadowSpreadRadius ====

  // ==== shadowColor ====
  const shadowColorHandleInputChange = (color: any) => {
    const { shadowColor, ...rest } = buttonState;
    setButtonState({
      shadowColor: color.rgb,
      ...rest,
    });
  };

  // ==== backgrounColor ====
  const boxColorHandleInputChange = (color: any) => {
    const { boxColor, ...rest } = buttonState;
    setButtonState({
      boxColor: color.rgb,
      ...rest,
    });
  };

  // ==== backgrounColor ====
  const backgroundColorHandleInputChange = (color: any) => {
    setBackgroundColor(color.hex);
  };

  const textButtonHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTextButton(event.target.value);
  };

  const fontWeightHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { fontWeight, ...rest } = buttonState;
    setButtonState({ fontWeight: event.target.value, ...rest });
  };

  // ==== fontSize ====
  const fontSizeHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { fontSize, ...rest } = buttonState;
    setButtonState({ fontSize: newValue, ...rest });
  };

  const fontSizeHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { fontSize, ...rest } = buttonState;
    setButtonState({
      fontSize: event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const fontSizeHandleBlur = () => {
    const { fontSize, ...rest } = buttonState;
    if (fontSize < 10) {
      setButtonState({ fontSize: 10, ...rest });
    } else if (fontSize > 50) {
      setButtonState({ fontSize: 50, ...rest });
    }
  };

  // ==== textColor ====
  const fontColorHandleInputChange = (color: any) => {
    const { fontColor, ...rest } = buttonState;
    setButtonState({
      fontColor: color.rgb,
      ...rest,
    });
  };

  // Border Radius
  const borderRadiusHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { borderRadius, ...rest } = buttonState;

    setButtonState({
      borderRadius: newValue,
      ...rest,
    });
  };

  const borderRadiusHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { borderRadius, ...rest } = buttonState;

    const newValue =
      event.target.value === '' ? '' : Number(event.target.value);

    setButtonState({
      borderRadius: newValue,
      ...rest,
    });
  };

  const borderRadiusHandleBlur = () => {
    const { borderRadius, ...rest } = buttonState;
    if (borderRadius < 0) {
      setButtonState({ borderRadius: 0, ...rest });
    } else if (borderRadius > 200) {
      setButtonState({ borderRadius: 200, ...rest });
    }
  };

  // ===== borderWidth =====
  const borderWidthHandleSliderChange = (
    event: any,
    newValue: number | number[],
  ) => {
    const { borderWidth, ...rest } = buttonState;
    setButtonState({ borderWidth: newValue, ...rest });
  };

  const borderWidthHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { borderWidth, ...rest } = buttonState;
    setButtonState({
      borderWidth: event.target.value === '' ? '' : Number(event.target.value),
      ...rest,
    });
  };

  const borderWidthHandleBlur = () => {
    const { borderWidth, ...rest } = buttonState;
    if (borderWidth < 0) {
      setButtonState({ borderWidth: 0, ...rest });
    } else if (borderWidth > 200) {
      setButtonState({ borderWidth: 200, ...rest });
    }
  };

  // ==== shadowColor ====
  const borderColorHandleInputChange = (color: any) => {
    const { borderColor, ...rest } = buttonState;
    setButtonState({
      borderColor: color.rgb,
      ...rest,
    });
  };

  // ==== borderStyle ====
  const borderStyleHandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { borderStyle, ...rest } = buttonState;
    setButtonState({
      borderStyle: event.target.value,
      ...rest,
    });
  };

  // ====== Hover =======
  // ==== backgrounColor ====
  const hoverBoxColorHandleInputChange = (color: any) => {
    const { hoverBoxColor, ...rest } = buttonState;
    setButtonState({
      hoverBoxColor: color.rgb,
      ...rest,
    });
  };

  // ==== borderColor =====
  const hoverBorderColorHandleInputChange = (color: any) => {
    const { hoverBorderColor, ...rest } = buttonState;
    setButtonState({
      hoverBorderColor: color.rgb,
      ...rest,
    });
  };

  // ==== hoverFontColor ====
  const hoverFontColorHandleInputChange = (color: any) => {
    const { hoverFontColor, ...rest } = buttonState;
    setButtonState({
      hoverFontColor: color.rgb,
      ...rest,
    });
  };

  // ====== active =======
  // ==== backgrounColor ====
  const activeBoxColorHandleInputChange = (color: any) => {
    const { activeBoxColor, ...rest } = buttonState;
    setButtonState({
      activeBoxColor: color.rgb,
      ...rest,
    });
  };

  // ==== borderColor =====
  const activeBorderColorHandleInputChange = (color: any) => {
    const { activeBorderColor, ...rest } = buttonState;
    setButtonState({
      activeBorderColor: color.rgb,
      ...rest,
    });
  };

  // ==== activeFontColor ====
  const activeFontColorHandleInputChange = (color: any) => {
    const { activeFontColor, ...rest } = buttonState;
    setButtonState({
      activeFontColor: color.rgb,
      ...rest,
    });
  };

  // Presets

  const onClickBootstrapBtnPrimary = () => {
    setButtonState(bootstrapPreset.btnPrimary);
    setTextButton('Primary');
  };

  const onClickBootstrapBtnSecondary = () => {
    setButtonState(bootstrapPreset.btnSecondary);
    setTextButton('Secondary');
  };

  const onClickBootstrapBtnSuccess = () => {
    setButtonState(bootstrapPreset.btnSuccess);
    setTextButton('Success');
  };

  const onClickBootstrapBtnWarning = () => {
    setButtonState(bootstrapPreset.btnWarning);
    setTextButton('Warning');
  };

  const onClickBootstrapBtnDanger = () => {
    setButtonState(bootstrapPreset.btnDanger);
    setTextButton('Danger');
  };

  const onClickBootstrapBtnLight = () => {
    setButtonState(bootstrapPreset.btnLight);
    setTextButton('Light');
  };

  const onClickBootstrapBtnLink = () => {
    setButtonState(bootstrapPreset.btnLink);
    setTextButton('Link');
  };

  const onClickBootstrapBtnInfo = () => {
    setButtonState(bootstrapPreset.btnInfo);
    setTextButton('Info');
  };

  const onClickBootstrapBtnDark = () => {
    setButtonState(bootstrapPreset.btnDark);
    setTextButton('Dark');
  };

  // onClickBoostrapOutlines
  const onClickBootstrapBtnOutlinePrimary = () => {
    setButtonState(bootstrapPreset.btnOutlinePrimary);
    setTextButton('Primary');
  };

  const onClickBootstrapBtnOutlineSecondary = () => {
    setButtonState(bootstrapPreset.btnOutlineSecondary);
    setTextButton('Secondary');
  };

  const onClickBootstrapBtnOutlineSuccess = () => {
    setButtonState(bootstrapPreset.btnOutlineSuccess);
    setTextButton('Success');
  };

  const onClickBootstrapBtnOutlineWarning = () => {
    setButtonState(bootstrapPreset.btnOutlineWarning);
    setTextButton('Warning');
  };

  const onClickBootstrapBtnOutlineDanger = () => {
    setButtonState(bootstrapPreset.btnOutlineDanger);
    setTextButton('Danger');
  };

  const onClickBootstrapBtnOutlineLight = () => {
    setButtonState(bootstrapPreset.btnOutlineLight);
    setTextButton('Light');
  };

  const onClickBootstrapBtnOutlineInfo = () => {
    setButtonState(bootstrapPreset.btnOutlineInfo);
    setTextButton('Info');
  };

  const onClickBootstrapBtnOutlineDark = () => {
    setButtonState(bootstrapPreset.btnOutlineDark);
    setTextButton('Dark');
  };

  return (
    <>
      <Head>
        <title>Button Builder - Code Toolbox</title>
        <meta
          name="keywords"
          content="Code, code, toolbox, Toolbox, Code Toolbox, code toolbox, CodeToolbox, codetoolbox,button,HTML, button css, Button CSS, Botão, botão, CSS, JavaScript"
        />
        <meta name="description" content="Generator CSS and View to Button" />
      </Head>
      <Header />

      <StyledContainer>
        <Title>Button Builder - CSS</Title>
        <StyledGrid container justify="center" spacing={5}>
          <StyledGrid item md={12} lg={12} xs={12}>
            <StyledCard>
              <StyledCardContent>
                <StyledGrid
                  spacing={3}
                  container
                  direction="row"
                  justify="center"
                  alignItems="baseline"
                >
                  <StyledGrid item md={6} lg={6}>
                    {/* Button Size and Color */}
                    <StyledExpansionPanel>
                      <StyledExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <StyledTypography
                          align="center"
                          variant="button"
                          className="heading"
                        >
                          Button Size, Color
                        </StyledTypography>
                      </StyledExpansionPanelSummary>
                      <StyledExpansionPanelDetails>
                        <StyledGrid container spacing={0}>
                          <StyledGrid item xs={12} md={12} lg={12}>
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
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Horizontal Padding
                                  </StyledTypography>
                                  <StyledSlider
                                    value={
                                      typeof buttonState.horizontalPadding ===
                                      'number'
                                        ? buttonState.horizontalPadding
                                        : 0
                                    }
                                    min={0}
                                    max={200}
                                    step={1}
                                    onChange={
                                      horizontalPaddingHandleSliderChange
                                    }
                                    aria-labelledby="input-slider"
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={3} md={2} lg={2}>
                                  <StyledTextField
                                    margin="dense"
                                    id="horizontalPadding"
                                    label="px"
                                    variant="outlined"
                                    size="small"
                                    value={buttonState.horizontalPadding}
                                    onChange={
                                      horizontalPaddingHandleInputChange
                                    }
                                    onBlur={horizontalPaddingHandleBlur}
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
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Vertical Padding
                                  </StyledTypography>
                                  <StyledSlider
                                    value={
                                      typeof buttonState.verticalPadding ===
                                      'number'
                                        ? buttonState.verticalPadding
                                        : 0
                                    }
                                    min={0}
                                    max={200}
                                    step={1}
                                    onChange={verticalPaddingHandleSliderChange}
                                    aria-labelledby="input-slider"
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={3} md={2} lg={2}>
                                  <StyledTextField
                                    margin="dense"
                                    id="verticalPadding"
                                    label="px"
                                    variant="outlined"
                                    size="small"
                                    value={buttonState.verticalPadding}
                                    onChange={verticalPaddingHandleInputChange}
                                    onBlur={verticalPaddingHandleBlur}
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
                            {/* Pointer Check */}
                            <StyledCardContent>
                              <StyledTypography
                                align="center"
                                id="input-slider"
                                gutterBottom
                              >
                                Cursor
                              </StyledTypography>
                              <StyledGrid
                                container
                                alignItems="center"
                                justify="center"
                                spacing={1}
                              >
                                <StyledGrid item>Default</StyledGrid>
                                <StyledGrid item>
                                  <StyledSwitch
                                    checked={buttonState.pointerCheck}
                                    onChange={pointerCheckHandleInputChange}
                                    name="checkedC"
                                  />
                                </StyledGrid>
                                <StyledGrid item>Pointer</StyledGrid>
                              </StyledGrid>
                            </StyledCardContent>

                            <StyledDivider />
                            <StyledCardContent>
                              <StyledGrid
                                container
                                spacing={0}
                                justify="center"
                              >
                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Button Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.boxColor}
                                    onChange={boxColorHandleInputChange}
                                  />
                                </StyledGrid>
                              </StyledGrid>
                            </StyledCardContent>
                          </StyledGrid>
                        </StyledGrid>
                      </StyledExpansionPanelDetails>
                    </StyledExpansionPanel>

                    {/* Button Text */}
                    <StyledExpansionPanel>
                      <StyledExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <StyledTypography
                          align="center"
                          variant="button"
                          className="heading"
                        >
                          Button Text
                        </StyledTypography>
                      </StyledExpansionPanelSummary>
                      <StyledExpansionPanelDetails>
                        <StyledGrid container spacing={0}>
                          <StyledGrid item xs={12} md={12} lg={12}>
                            {/* Text Button */}
                            <StyledCardContent>
                              <StyledGrid
                                container
                                spacing={2}
                                justify="center"
                                alignItems="flex-end"
                                direction="row"
                              >
                                <StyledGrid item md={5} lg={5} xs={5}>
                                  <StyledTypography id="input-slider">
                                    Text Button
                                  </StyledTypography>
                                  <StyledTextField
                                    fullWidth
                                    margin="dense"
                                    id="shadowHorizontalLength"
                                    variant="outlined"
                                    size="small"
                                    value={textButton}
                                    onChange={textButtonHandleInputChange}
                                    inputProps={{
                                      maxLength: 15,
                                      'aria-labelledby': 'input-slider',
                                    }}
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={5} md={5} lg={5}>
                                  <StyledTypography id="input-slider">
                                    Font Weight
                                  </StyledTypography>
                                  <StyledTextField
                                    id="outlined-select-currency"
                                    select
                                    value={buttonState.fontWeight}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    SelectProps={{
                                      native: true,
                                    }}
                                    onChange={fontWeightHandleInputChange}
                                  >
                                    {optionsFontWeight.map(option => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    ))}
                                  </StyledTextField>
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
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Font Size
                                  </StyledTypography>
                                  <StyledSlider
                                    value={
                                      typeof buttonState.fontSize === 'number'
                                        ? buttonState.fontSize
                                        : 0
                                    }
                                    min={10}
                                    max={50}
                                    step={1}
                                    onChange={fontSizeHandleSliderChange}
                                    aria-labelledby="input-slider"
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={3} md={2} lg={2}>
                                  <StyledTextField
                                    margin="dense"
                                    id="fontSize"
                                    label="px"
                                    variant="outlined"
                                    size="small"
                                    value={buttonState.fontSize}
                                    onChange={fontSizeHandleInputChange}
                                    onBlur={fontSizeHandleBlur}
                                    inputProps={{
                                      step: 1,
                                      min: 10,
                                      max: 50,
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
                                spacing={0}
                                justify="center"
                              >
                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Font Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.fontColor}
                                    onChange={fontColorHandleInputChange}
                                  />
                                </StyledGrid>
                              </StyledGrid>
                            </StyledCardContent>
                          </StyledGrid>
                        </StyledGrid>
                      </StyledExpansionPanelDetails>
                    </StyledExpansionPanel>

                    {/* Button Shadow */}
                    <StyledExpansionPanel>
                      <StyledExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <StyledTypography
                          align="center"
                          variant="button"
                          className="heading"
                        >
                          Button Shadow
                        </StyledTypography>
                      </StyledExpansionPanelSummary>
                      <StyledExpansionPanelDetails>
                        <StyledGrid container spacing={0}>
                          <StyledGrid item xs={12} md={12} lg={12}>
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
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Horizontal Length
                                  </StyledTypography>
                                  <StyledSlider
                                    value={
                                      typeof buttonState.shadowHorizontalLength ===
                                      'number'
                                        ? buttonState.shadowHorizontalLength
                                        : 0
                                    }
                                    min={-200}
                                    max={200}
                                    step={1}
                                    onChange={
                                      shadowHorizontalLengthHandleSliderChange
                                    }
                                    aria-labelledby="input-slider"
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={3} md={2} lg={2}>
                                  <StyledTextField
                                    margin="dense"
                                    id="shadowHorizontalLength"
                                    label="px"
                                    variant="outlined"
                                    size="small"
                                    value={buttonState.shadowHorizontalLength}
                                    onChange={
                                      shadowHorizontalLengthHandleInputChange
                                    }
                                    onBlur={shadowHorizontalLengthHandleBlur}
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
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Vertical Length
                                  </StyledTypography>
                                  <StyledSlider
                                    value={
                                      typeof buttonState.shadowVerticalLength ===
                                      'number'
                                        ? buttonState.shadowVerticalLength
                                        : 0
                                    }
                                    min={-200}
                                    max={200}
                                    step={1}
                                    onChange={
                                      shadowVerticalLengthHandleSliderChange
                                    }
                                    aria-labelledby="input-slider"
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={3} md={2} lg={2}>
                                  <StyledTextField
                                    margin="dense"
                                    id="shadowVerticalLength"
                                    label="px"
                                    variant="outlined"
                                    size="small"
                                    value={buttonState.shadowVerticalLength}
                                    onChange={
                                      shadowVerticalLengthHandleInputChange
                                    }
                                    onBlur={shadowVerticalLengthHandleBlur}
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
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Blur Radius
                                  </StyledTypography>
                                  <StyledSlider
                                    value={
                                      typeof buttonState.shadowBlurRadius ===
                                      'number'
                                        ? buttonState.shadowBlurRadius
                                        : 0
                                    }
                                    min={0}
                                    max={200}
                                    step={1}
                                    onChange={
                                      shadowBlurRadiusHandleSliderChange
                                    }
                                    aria-labelledby="input-slider"
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={3} md={2} lg={2}>
                                  <StyledTextField
                                    margin="dense"
                                    id="shadowBlurRadius"
                                    label="px"
                                    variant="outlined"
                                    size="small"
                                    value={buttonState.shadowBlurRadius}
                                    onChange={shadowBlurRadiusHandleInputChange}
                                    onBlur={shadowBlurRadiusHandleBlur}
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
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Spread Radius
                                  </StyledTypography>
                                  <StyledSlider
                                    value={
                                      typeof buttonState.shadowSpreadRadius ===
                                      'number'
                                        ? buttonState.shadowSpreadRadius
                                        : 0
                                    }
                                    min={-200}
                                    max={200}
                                    step={1}
                                    onChange={
                                      shadowSpreadRadiusHandleSliderChange
                                    }
                                    aria-labelledby="input-slider"
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={3} md={2} lg={2}>
                                  <StyledTextField
                                    margin="dense"
                                    id="shadowSpreadRadius"
                                    label="px"
                                    variant="outlined"
                                    size="small"
                                    value={buttonState.shadowSpreadRadius}
                                    onChange={
                                      shadowSpreadRadiusHandleInputChange
                                    }
                                    onBlur={shadowSpreadRadiusHandleBlur}
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
                                spacing={0}
                                justify="center"
                              >
                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Shadow Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.shadowColor}
                                    onChange={shadowColorHandleInputChange}
                                  />
                                </StyledGrid>
                              </StyledGrid>
                            </StyledCardContent>
                          </StyledGrid>
                        </StyledGrid>
                      </StyledExpansionPanelDetails>
                    </StyledExpansionPanel>

                    {/* Button Border */}
                    <StyledExpansionPanel>
                      <StyledExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <StyledTypography
                          align="center"
                          variant="button"
                          className="heading"
                        >
                          Button Border
                        </StyledTypography>
                      </StyledExpansionPanelSummary>
                      <StyledExpansionPanelDetails>
                        <StyledGrid container spacing={0}>
                          <StyledGrid item xs={12} md={12} lg={12}>
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
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Border Radius
                                  </StyledTypography>
                                  <StyledSlider
                                    value={
                                      typeof buttonState.borderRadius ===
                                      'number'
                                        ? buttonState.borderRadius
                                        : 0
                                    }
                                    min={0}
                                    max={200}
                                    step={1}
                                    onChange={borderRadiusHandleSliderChange}
                                    aria-labelledby="input-slider"
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={3} md={2} lg={2}>
                                  <StyledTextField
                                    margin="dense"
                                    id="borderRadius"
                                    label="px"
                                    variant="outlined"
                                    size="small"
                                    value={buttonState.borderRadius}
                                    onChange={borderRadiusHandleInputChange}
                                    onBlur={borderRadiusHandleBlur}
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
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Border Width
                                  </StyledTypography>
                                  <StyledSlider
                                    value={
                                      typeof buttonState.borderWidth ===
                                      'number'
                                        ? buttonState.borderWidth
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
                                    value={buttonState.borderWidth}
                                    onChange={borderWidthHandleInputChange}
                                    onBlur={borderWidthHandleBlur}
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
                                spacing={0}
                                justify="center"
                              >
                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Border Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.borderColor}
                                    onChange={borderColorHandleInputChange}
                                  />
                                </StyledGrid>

                                <StyledGrid item xs={6} md={2} lg={2}>
                                  <StyledTextField
                                    className="digit-4"
                                    id="outlined-select-currency"
                                    select
                                    label="Border Style"
                                    value={buttonState.borderStyle}
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
                          </StyledGrid>
                        </StyledGrid>
                      </StyledExpansionPanelDetails>
                    </StyledExpansionPanel>

                    {/* Hover Effect */}
                    <StyledExpansionPanel>
                      <StyledExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <StyledTypography
                          align="center"
                          variant="button"
                          className="heading"
                        >
                          Hover Effect
                        </StyledTypography>
                      </StyledExpansionPanelSummary>
                      <StyledExpansionPanelDetails>
                        <StyledGrid container spacing={0}>
                          <StyledGrid item xs={12} md={12} lg={12}>
                            <StyledCardContent>
                              <StyledGrid
                                container
                                spacing={3}
                                justify="center"
                                alignContent="center"
                              >
                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Hover Font Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.hoverFontColor}
                                    onChange={hoverFontColorHandleInputChange}
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Hover Button Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.hoverBoxColor}
                                    onChange={hoverBoxColorHandleInputChange}
                                  />
                                </StyledGrid>

                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Hover Border Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.hoverBorderColor}
                                    onChange={hoverBorderColorHandleInputChange}
                                  />
                                </StyledGrid>
                              </StyledGrid>
                            </StyledCardContent>
                          </StyledGrid>
                        </StyledGrid>
                      </StyledExpansionPanelDetails>
                    </StyledExpansionPanel>

                    {/* Active Effect */}
                    <StyledExpansionPanel>
                      <StyledExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <StyledTypography
                          align="center"
                          variant="button"
                          className="heading"
                        >
                          Active/Click Effect
                        </StyledTypography>
                      </StyledExpansionPanelSummary>
                      <StyledExpansionPanelDetails>
                        <StyledGrid container spacing={0}>
                          <StyledGrid item xs={12} md={12} lg={12}>
                            <StyledCardContent>
                              <StyledGrid
                                container
                                spacing={3}
                                justify="center"
                                alignContent="center"
                              >
                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Active/Click Font Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.activeFontColor}
                                    onChange={activeFontColorHandleInputChange}
                                  />
                                </StyledGrid>
                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Active/Click Button Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.activeBoxColor}
                                    onChange={activeBoxColorHandleInputChange}
                                  />
                                </StyledGrid>

                                <StyledGrid item xs={12} md={6} lg={6}>
                                  <StyledTypography
                                    id="input-slider"
                                    gutterBottom
                                  >
                                    Active/Click Border Color
                                  </StyledTypography>
                                  <StyledChromePicker
                                    color={buttonState.activeBorderColor}
                                    onChange={
                                      activeBorderColorHandleInputChange
                                    }
                                  />
                                </StyledGrid>
                              </StyledGrid>
                            </StyledCardContent>
                          </StyledGrid>
                        </StyledGrid>
                      </StyledExpansionPanelDetails>
                    </StyledExpansionPanel>

                    {/* Presets */}
                    <StyledExpansionPanel>
                      <StyledExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <StyledTypography
                          align="center"
                          variant="button"
                          className="heading"
                        >
                          Presets
                        </StyledTypography>
                      </StyledExpansionPanelSummary>
                      <StyledExpansionPanelDetails>
                        <StyledGrid container spacing={0}>
                          <StyledGrid item xs={12} md={12} lg={12}>
                            <StyledCardContent>
                              <StyledTypography variant="body2">
                                *Click on a button to incorporate preset
                              </StyledTypography>
                            </StyledCardContent>
                          </StyledGrid>
                          <StyledGrid item xs={12} md={12} lg={12}>
                            <StyledTypography variant="body1">
                              <b>Bootstrap default:</b>
                            </StyledTypography>
                            <StyledCardContent>
                              <StyledGrid
                                container
                                spacing={2}
                                justify="center"
                                alignContent="center"
                              >
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnPrimary}
                                    className="btn btn-primary"
                                  >
                                    Primary
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnSecondary}
                                    className="btn btn-secondary"
                                  >
                                    Secondary
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnSuccess}
                                    className="btn btn-success"
                                  >
                                    Success
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnWarning}
                                    className="btn btn-warning"
                                  >
                                    Warning
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnDanger}
                                    className="btn btn-danger"
                                  >
                                    Danger
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnLight}
                                    className="btn btn-light"
                                  >
                                    Light
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnLink}
                                    className="btn btn-link"
                                  >
                                    Link
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnInfo}
                                    className="btn btn-info"
                                  >
                                    Info
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnDark}
                                    className="btn btn-dark"
                                  >
                                    Dark
                                  </button>
                                </StyledGrid>
                              </StyledGrid>
                            </StyledCardContent>
                          </StyledGrid>
                          <StyledGrid item xs={12} md={12} lg={12}>
                            <StyledTypography variant="body1">
                              <b>Bootstrap outline:</b>
                            </StyledTypography>
                            <StyledCardContent>
                              <StyledGrid
                                container
                                spacing={2}
                                justify="center"
                                alignContent="center"
                              >
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnOutlinePrimary}
                                    className="btn btn-outline-primary"
                                  >
                                    Primary
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={
                                      onClickBootstrapBtnOutlineSecondary
                                    }
                                    className="btn btn-outline-secondary"
                                  >
                                    Secondary
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnOutlineSuccess}
                                    className="btn btn-outline-success"
                                  >
                                    Success
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnOutlineWarning}
                                    className="btn btn-outline-warning"
                                  >
                                    Warning
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnOutlineDanger}
                                    className="btn btn-outline-danger"
                                  >
                                    Danger
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnOutlineLight}
                                    className="btn btn-outline-light"
                                  >
                                    Light
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnOutlineInfo}
                                    className="btn btn-outline-info"
                                  >
                                    Info
                                  </button>
                                </StyledGrid>
                                <StyledGrid item xs={3} md={3} lg={3}>
                                  <button
                                    onClick={onClickBootstrapBtnOutlineDark}
                                    className="btn btn-outline-dark"
                                  >
                                    Dark
                                  </button>
                                </StyledGrid>
                              </StyledGrid>
                            </StyledCardContent>
                          </StyledGrid>
                        </StyledGrid>
                      </StyledExpansionPanelDetails>
                    </StyledExpansionPanel>

                    <StyledCardContent>
                      <StyledGrid
                        container
                        spacing={5}
                        justify="center"
                        alignContent="center"
                        alignItems="center"
                      >
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
                        <StyledGrid
                          id="grid-example-div"
                          item
                          md={12}
                          lg={12}
                          xs={12}
                        >
                          <ExampleButton
                            id="example-div"
                            horizontalpadding={buttonState.horizontalPadding}
                            verticalpadding={buttonState.verticalPadding}
                            shadowhorizontallength={
                              buttonState.shadowHorizontalLength
                            }
                            shadowverticallength={
                              buttonState.shadowVerticalLength
                            }
                            shadowblurradius={buttonState.shadowBlurRadius}
                            shadowspreadradius={buttonState.shadowSpreadRadius}
                            shadowcolor={buttonState.shadowColor}
                            boxcolor={buttonState.boxColor}
                            fontcolor={buttonState.fontColor}
                            fontweight={buttonState.fontWeight}
                            fontsize={buttonState.fontSize}
                            borderradius={buttonState.borderRadius}
                            borderwidth={buttonState.borderWidth}
                            borderstyle={buttonState.borderStyle}
                            bordercolor={buttonState.borderColor}
                            hoverfontcolor={buttonState.hoverFontColor}
                            hoverboxcolor={buttonState.hoverBoxColor}
                            hoverbordercolor={buttonState.hoverBorderColor}
                            activefontcolor={buttonState.activeFontColor}
                            activeboxcolor={buttonState.activeBoxColor}
                            activebordercolor={buttonState.activeBorderColor}
                            cursorpointer={buttonState.pointerCheck}
                          >
                            {textButton}
                          </ExampleButton>
                        </StyledGrid>
                        <StyledCardContent />
                        <StyledGrid item md={12} lg={12} xs={12}>
                          <StyledCard>
                            <StyledCardContent>
                              {'button {'}

                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`cursor: ${
                                  buttonState.pointerCheck
                                    ? 'pointer'
                                    : 'default'
                                };`}
                              </StyledTypography>

                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`padding: ${buttonState.verticalPadding}px ${buttonState.horizontalPadding}px;`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`font-size: ${buttonState.fontSize}px;`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`color: rgba(${buttonState.fontColor.r}, ${buttonState.fontColor.g}, ${buttonState.fontColor.b}, ${buttonState.fontColor.a});`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`font-weight: ${buttonState.fontWeight};`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`background-color: rgba(${buttonState.boxColor.r}, ${buttonState.boxColor.g}, ${buttonState.boxColor.b}, ${buttonState.boxColor.a});`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`-webkit-box-shadow: ${buttonState.shadowHorizontalLength}px ${buttonState.shadowVerticalLength}px ${buttonState.shadowBlurRadius}px ${buttonState.shadowSpreadRadius}px rgba(${buttonState.shadowColor.r}, ${buttonState.shadowColor.g}, ${buttonState.shadowColor.b}, ${buttonState.shadowColor.a});`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`-moz-box-shadow:  ${buttonState.shadowHorizontalLength}px ${buttonState.shadowVerticalLength}px ${buttonState.shadowBlurRadius}px ${buttonState.shadowSpreadRadius}px rgba(${buttonState.shadowColor.r}, ${buttonState.shadowColor.g}, ${buttonState.shadowColor.b}, ${buttonState.shadowColor.a});`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`box-shadow: ${buttonState.shadowHorizontalLength}px ${buttonState.shadowVerticalLength}px ${buttonState.shadowBlurRadius}px ${buttonState.shadowSpreadRadius}px rgba(${buttonState.shadowColor.r}, ${buttonState.shadowColor.g}, ${buttonState.shadowColor.b}, ${buttonState.shadowColor.a});`}
                              </StyledTypography>
                              <br />
                              <StyledTypography variant="caption">
                                &nbsp; &nbsp; /* border radius */
                              </StyledTypography>
                              <br />
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`border-radius: ${buttonState.borderRadius}px;`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`-moz-border-radius: ${buttonState.borderRadius}px;`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`-webkit-border-radius: ${buttonState.borderRadius}px;`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`border: ${buttonState.borderWidth}px  ${buttonState.borderStyle} rgba(${buttonState.borderColor.r}, ${buttonState.borderColor.g}, ${buttonState.borderColor.b}, ${buttonState.borderColor.a});`}
                              </StyledTypography>
                              {'}'}
                              <br />
                              <br />
                              <StyledTypography variant="caption">
                                /* hover effect */
                              </StyledTypography>
                              <br />
                              <StyledTypography variant="body2">
                                button:hover &nbsp;
                                {'{'}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`color: rgba(${buttonState.hoverFontColor.r}, ${buttonState.hoverFontColor.g}, ${buttonState.hoverFontColor.b}, ${buttonState.hoverFontColor.a});`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`background-color: rgba(${buttonState.hoverBoxColor.r}, ${buttonState.hoverBoxColor.g}, ${buttonState.hoverBoxColor.b}, ${buttonState.hoverBoxColor.a});`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`border-color: rgba(${buttonState.borderColor.r}, ${buttonState.borderColor.g}, ${buttonState.borderColor.b}, ${buttonState.borderColor.a});`}
                              </StyledTypography>
                              {'}'}
                              <br />
                              <br />
                              <StyledTypography variant="caption">
                                /* active/click effect */
                              </StyledTypography>
                              <br />
                              <StyledTypography variant="body2">
                                button:active &nbsp;
                                {'{'}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`color: rgba(${buttonState.activeFontColor.r}, ${buttonState.activeFontColor.g}, ${buttonState.activeFontColor.b}, ${buttonState.activeFontColor.a});`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`background-color: rgba(${buttonState.activeBoxColor.r}, ${buttonState.activeBoxColor.g}, ${buttonState.activeBoxColor.b}, ${buttonState.activeBoxColor.a});`}
                              </StyledTypography>
                              <StyledTypography variant="body2">
                                &nbsp; &nbsp;
                                {`border-color: rgba(${buttonState.activeBorderColor.r}, ${buttonState.activeBorderColor.g}, ${buttonState.activeBorderColor.b}, ${buttonState.activeBorderColor.a});`}
                              </StyledTypography>
                              {'}'}
                            </StyledCardContent>
                          </StyledCard>
                        </StyledGrid>
                      </StyledGrid>
                    </CustomGridBackground>
                  </StyledGrid>
                </StyledGrid>
              </StyledCardContent>
            </StyledCard>
          </StyledGrid>
        </StyledGrid>
      </StyledContainer>
      <Footer />
    </>
  );
}
