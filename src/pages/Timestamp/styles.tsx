import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export const Container = styled.div`
  padding: 25px;
`;

export const Title = styled.h1`
  font-weight: 100;
  text-align: center;
  padding: 25px 0;
  font-family: 'Montserrat', sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 25px 0;
`;

export const StyledTypography = styled(Typography)``;

export const StyledCard = styled(Card)``;

export const StyledCardContent = styled(CardContent)`
  .title {
    font-size: 14;
  }
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
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

export const Form = styled.form`
  width: 600px;

  input {
    border-radius: 5px;
    height: 40px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &::placeholder {
      color: #999;
    }
  }
`;
