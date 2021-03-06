import React from 'react';
import { ContainerHeader, Title, SubTitle } from './styled';

interface IHeaderInformation {
  title: string;
  subtitle?: string;
}

export const HeaderInformation = (props: IHeaderInformation) => {
  return (
    <ContainerHeader>
      <Title>{props.title}</Title>
      {props.subtitle && <SubTitle>{props.subtitle}</SubTitle>}
    </ContainerHeader>
  );
};
