import styled from 'styled-components';

import {
  Card,
  CardContent,
  Typography,
  Divider,
  Container,
  TextField,
  Grid,
  Slider,
  Input,
  Box,
} from '@material-ui/core';

import { HuePicker } from 'react-color';

interface PropsVirtualDiv {
  topleft: number | string | Array<number | string>;
  topright: number | string | Array<number | string>;
  bottomleft: number | string | Array<number | string>;
  bottomright: number | string | Array<number | string>;
  borderwidth: number | string | Array<number | string>;
  borderstyle: string;
  bordercolor: string;
}

export const Title = styled.h1`
  font-weight: 100;
  text-align: center;
  padding: 25px 0;
  font-family: 'Montserrat', sans-serif;
`;

export const StyledContainer = styled(Container)``;

export const StyledBox = styled(Box)``;

export const StyledTypography = styled(Typography)``;

export const StyledGrid = styled(Grid)``;

export const StyledSlider = styled(Slider)``;

export const StyledInput = styled(Input)``;

export const StyledTextField = styled(TextField)`
  &&.digit-4 {
    width: 100px !important;
  }
  &&.digit-2 {
    width: 80px !important;
  }
  margin-left: 10px !important;
`;

export const StyledDivider = styled(Divider)``;

export const StyledCardContent = styled(CardContent)`
  .title {
    font-size: 14;
  }
`;

export const StyledCard = styled(Card)``;

export const ExampleDiv = styled(StyledBox)<PropsVirtualDiv>`
  width: 400px;
  height: 400px;
  background: #090856;
  border: ${props => props.borderwidth}px ${props => props.borderstyle}
    ${props => props.bordercolor};
  border-top-left-radius: ${props => props.topleft}px;
  border-top-right-radius: ${props => props.topright}px;
  border-bottom-left-radius: ${props => props.bottomleft}px;
  border-bottom-right-radius: ${props => props.bottomright}px;
`;

export const StyledHuePicker = styled(HuePicker)``;
