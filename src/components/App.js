import React, { useState } from 'react'
import Header from './Header'
import styled from '@emotion/styled'
import Form from './Form';
import Summary from './Summary';
import Result from './Result';
import Spinner from './Spinner';

const Container = styled.div`
  max-width:600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
export default function App() {
  const [dataFrm, setDataFrm] = useState({});
  const {data, quotation=0} = dataFrm;
  const [spinner, setSpinner] = useState(false);
  return (
    <Container>
      <Header title='Cotizador de seguros'/>
      <ContainerForm>
        <Form 
          setDataFrm={setDataFrm}
          setSpinner={setSpinner}
        />
       { data && <Summary {...data}/>}
       {spinner && <Spinner/>}
       {!spinner && <Result quotation={quotation}/>}
      </ContainerForm>
    </Container>
  )
}
