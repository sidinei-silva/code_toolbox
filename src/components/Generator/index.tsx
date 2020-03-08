import React from 'react';

import { Container, Content, ImgContent, DescriptionContent } from './styles';

type GeneratorProps = {
  title: string;
  description: string;
};

const Generator = ({ title, description }: GeneratorProps) => {
  return (
    <Container>
      <Content>
        <ImgContent>
          <img src="" alt="" />
        </ImgContent>
        <DescriptionContent>
          <h2>{title}</h2>
          <p>{description}</p>
        </DescriptionContent>
      </Content>
    </Container>
  );
};

export default Generator;
