import styled from 'styled-components';

import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

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
} from '@material-ui/core';

import { ChromePicker, TwitterPicker } from 'react-color';

interface RGB {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface PropsVirtualDiv {
  horizontallength: number | string | Array<number | string>;
  verticallength: number | string | Array<number | string>;
  blurradius: number | string | Array<number | string>;
  spreadradius: number | string | Array<number | string>;
  shadowcolor: RGB;
  boxcolor: RGB;
  inset: boolean;
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
  width: 75vw;
  height: 75vw;
  max-width: 400px;
  max-height: 400px;

  background-color: ${props =>
    `rgba(${props.boxcolor.r}, ${props.boxcolor.g}, ${props.boxcolor.b}, ${props.boxcolor.a})`};
  box-shadow: ${props =>
    `${props.inset ? 'inset' : ''}  ${props.horizontallength}px ${
      props.verticallength
    }px ${props.blurradius}px ${props.spreadradius}px rgba(${
      props.shadowcolor.r
    }, ${props.shadowcolor.g}, ${props.shadowcolor.b}, ${
      props.shadowcolor.a
    })`};
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

export const StyledTableHead = styled(TableHead)``;

export const StyledTableContainer = styled(TableContainer)``;

export const StyledCardHeader = styled(CardHeader)``;

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);
