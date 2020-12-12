import React from 'react';
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  position: relative;
`;

const TextQuotation = styled.p`
  color: #0038ff;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const ResultQuotation = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127,234,237);
`;
const Result = ({quotation}) => {
  return (
    !quotation
      ? <Message>Elige marca, año y tipo de seguro</Message>
      : ( 
          <TransitionGroup
            component='p'
            className='resultado'
          >
          <CSSTransition
            classNames='resultado'
            key={quotation}
            timeout={{enter:500, exit:500}}
          >
            <ResultQuotation>
              <TextQuotation>El total es: ${quotation}</TextQuotation>
            </ResultQuotation> 
          </CSSTransition>
          </TransitionGroup>
        )
  ) 
}

export default Result;
