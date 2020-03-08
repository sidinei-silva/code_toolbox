import styled from 'styled-components';

export const Container = styled.div`
  background: #090856;
  padding: 5px 0;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    max-width: 250px;
    padding: 30px 0;
  }
  nav {
    width: 100%;
    text-align: center;
    padding: 20px 0 60px 0;

    a {
      color: #fff;
      padding: 0 40px;
      font-weight: 300;
      text-decoration: none;
      font-size: 15px;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
