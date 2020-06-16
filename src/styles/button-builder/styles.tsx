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
  Switch,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Checkbox,
} from '@material-ui/core';

import { ChromePicker, TwitterPicker } from 'react-color';

interface RGB {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface PropsVirtualButton {
  horizontalpadding: number | string | Array<number | string>;
  verticalpadding: number | string | Array<number | string>;
  cursorpointer: boolean;

  shadowhorizontallength: number | string | Array<number | string>;
  shadowverticallength: number | string | Array<number | string>;
  shadowblurradius: number | string | Array<number | string>;
  shadowspreadradius: number | string | Array<number | string>;
  shadowcolor: RGB;
  boxcolor: RGB;
  fontcolor: RGB;
  fontweight: number | string;
  fontsize: number | string | Array<number | string>;

  // border
  borderradius: number | string | Array<number | string>;
  borderwidth: number | string | Array<number | string>;
  borderstyle: string;
  bordercolor: RGB;

  // hover
  hoverboxcolor: RGB;
  hoverfontcolor: RGB;
  hoverbordercolor: RGB;

  // active
  activeboxcolor: RGB;
  activefontcolor: RGB;
  activebordercolor: RGB;
}

interface CustomGridBackgroundProps {
  backgroundcolor: string;
}

export const Title = styled.h1`
  font-weight: 100;
  text-align: center;
  padding: 25px 0;
  font-family: 'Montserrat', sans-serif;
`;

export const StyledContainer = styled(Container)``;

export const StyledBox = styled(Box)``;

export const StyledTypography = styled(Typography)`
  &&.heading {
    font-size: ${props => props.theme.typography.pxToRem(15)};
    font-weight: ${props => props.theme.typography.fontWeightRegular};
  }
`;

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

export const ExampleButton = styled.button<PropsVirtualButton>`
  cursor: ${props => (props.cursorpointer ? 'pointer' : 'default')};
  padding: ${props =>
    `${props.verticalpadding}px ${props.horizontalpadding}px`};

  font-size: ${props => props.fontsize}px;
  font-weight: ${props => props.fontweight};
  color: ${props =>
    `rgba(${props.fontcolor.r}, ${props.fontcolor.g}, ${props.fontcolor.b}, ${props.fontcolor.a})`};
  background-color: ${props =>
    `rgba(${props.boxcolor.r}, ${props.boxcolor.g}, ${props.boxcolor.b}, ${props.boxcolor.a})`};
  box-shadow: ${props =>
    `${props.shadowhorizontallength}px ${props.shadowverticallength}px ${props.shadowblurradius}px ${props.shadowspreadradius}px rgba(${props.shadowcolor.r}, ${props.shadowcolor.g}, ${props.shadowcolor.b}, ${props.shadowcolor.a})`};

  /* border  */
  border-radius: ${props => props.borderradius}px;

  border: ${props =>
    `${props.borderwidth}px ${props.borderstyle} rgba(${props.bordercolor.r}, ${props.bordercolor.g}, ${props.bordercolor.b}, ${props.bordercolor.a})`};

  :hover {
    color: ${props =>
      `rgba(${props.hoverfontcolor.r}, ${props.hoverfontcolor.g}, ${props.hoverfontcolor.b}, ${props.hoverfontcolor.a})`};
    background-color: ${props =>
      `rgba(${props.hoverboxcolor.r}, ${props.hoverboxcolor.g}, ${props.hoverboxcolor.b}, ${props.hoverboxcolor.a})`};
    border-color: ${props =>
      `rgba(${props.hoverbordercolor.r}, ${props.hoverbordercolor.g}, ${props.hoverbordercolor.b}, ${props.hoverbordercolor.a})`};
  }

  :active {
    color: ${props =>
      `rgba(${props.activefontcolor.r}, ${props.activefontcolor.g}, ${props.activefontcolor.b}, ${props.activefontcolor.a})`};
    background-color: ${props =>
      `rgba(${props.activeboxcolor.r}, ${props.activeboxcolor.g}, ${props.activeboxcolor.b}, ${props.activeboxcolor.a})`};
    border-color: ${props =>
      `rgba(${props.activebordercolor.r}, ${props.activebordercolor.g}, ${props.activebordercolor.b}, ${props.activebordercolor.a})`};
  }
`;

export const CustomGridBackground = styled(StyledBox)<
  CustomGridBackgroundProps
>`
  background-color: ${props => props.backgroundcolor};
`;

export const StyledChromePicker = styled(ChromePicker)``;

export const StyledTwitterPicker = styled(TwitterPicker)``;

export const StyledSwitch = styled(Switch)``;

export const StyledTable = styled(Table)``;

export const StyledTableBody = styled(TableBody)``;

export const StyledTableCell = styled(TableCell)``;

export const StyledTableHead = styled(TableHead)`
  background-color: ${props => props.theme.palette.common.black};

  ${StyledTableCell} {
    color: ${props => props.theme.palette.common.white};
  }
`;

export const StyledTableContainer = styled(TableContainer)``;

export const StyledCardHeader = styled(CardHeader)``;

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.palette.action.hover};
  }
`;

export const StyledExpansionPanel = styled(ExpansionPanel)``;

export const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)``;

export const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)``;

export const StyledCheckbox = styled(Checkbox)``;
