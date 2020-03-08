import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 400px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  cursor: pointer;
`;

export const ImgContent = styled.div`
  background: #090856;
  width: 250px;
  height: 115px;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);

  ${Content}:hover & {
    background-color: #ddd;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25) !important;
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25) !important;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25) !important;
  }
`;

export const DescriptionContent = styled.div`
  padding: 25px 0;
  text-align: center;
  h2 {
    color: #333;
    padding: 5px 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
  }
  p {
    color: #333;
    padding: 5px 0;
  }

  ${Content}:hover & {
    h2 {
      text-decoration: underline !important;
      text-decoration-color: #333 !important;
    }
  }
`;
