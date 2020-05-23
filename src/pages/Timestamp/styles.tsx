import styled from 'styled-components';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Container,
  TextField,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';

export const Title = styled.h1`
  font-weight: 100;
  text-align: center;
  padding: 25px 0;
  font-family: 'Montserrat', sans-serif;
`;

export const Form = styled.form`
  &&#timezone-convert,
  &&#timestamp-convert {
    display: flex;
    justify-content: center;
    align-items: baseline;
    .submit {
      margin: 0 10px;
    }
  }
`;

export const StyledContainer = styled(Container)``;

export const StyledTypography = styled(Typography)`
  && code {
    font-family: Consolas, 'courier new';
    color: crimson;
    background-color: #f1f1f1;
    padding: 2px;
    font-size: 105%;
  }

  &&.list-languages {
    margin: 10px 0px;
  }
`;

export const StyledCard = styled(Card)``;

export const StyledCardContent = styled(CardContent)`
  .title {
    font-size: 14;
  }
  &&.text-content {
    text-align: justify;
  }
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const StyledCardHeader = styled(CardHeader)``;

export const StyledDivider = styled(Divider)``;

export const StyledButton = styled(Button)`
  background-color: #090856;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

export const StyledTextField = styled(TextField)`
  &&.digit-4 {
    width: 100px !important;
  }
  &&.digit-2 {
    width: 80px !important;
  }
  margin-left: 10px !important;
`;

export const StyledGrid = styled(Grid)``;

export const StyledExpansionPanel = styled(ExpansionPanel)``;

export const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)``;

export const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)``;
