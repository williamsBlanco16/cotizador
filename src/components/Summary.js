import React from 'react'
import styled from '@emotion/styled';
import { firstUpperCase } from '../../helper';

const ContainerSummary = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

export default function Summary({brand ='', plan='', year='' }) {
  return (
    <ContainerSummary>
      <h1>Quotation summary </h1>
      <ul>
        <li> Brand: { firstUpperCase(brand) } </li>
        <li> Plan: { firstUpperCase(plan) } </li>
        <li> Year: { firstUpperCase(year) } </li>
      </ul>
    </ContainerSummary>
  )
}
