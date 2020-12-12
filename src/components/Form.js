import React, {useState} from 'react';
import styled from '@emotion/styled'
import { calculateByBrand, yearDifference, getPlan } from '../../helper'
import PropTypes from 'prop-types'

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  &:hover{
    background-color: #26c6da;
    cursor: pointer;
    transition: background-color .3s easy;
  }
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;
const initialState = {
  brand: '',
  year: '',
  plan: 'basic'
}

const Error = styled.div`
  background-color: red;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-bottom: 2rem;

`;

const Form = ({setDataFrm, setSpinner}) => {
  const [data, setData] = useState(initialState)
  const [error, setError] = useState(false);
  const {brand, year, plan } = data;
  
  const onChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  
  const onSubmit = e =>{
    e.preventDefault()
    if(!brand || !year || !plan) {
      setError(true)
      return
    }

    setSpinner(true)
    setError(false)
    setDataFrm({})

    let result = 2000
    // get year difference
    const yearDiff = yearDifference(year)
  
    // for each year is -3%
    result -= ((yearDiff * 3) * 3) / 100

    // 15% by american
    // Asian 5%
    // European 30%
    result *= calculateByBrand(brand)
    
    //basic increment 20%
    //complete increment 50%
    result = parseFloat(result * getPlan(plan))
    .toFixed(2)
    
    setTimeout(() => {
      setSpinner(false)
      setDataFrm({
        quotation:result,
        data
      })
    },1000)

  }
  return (
    <form onSubmit={onSubmit}>
      { error && <Error>Todos los campos son obligatorios</Error>}
      <Field>
        <Label>Brand</Label>
        <Select name='brand' value={brand} onChange={onChange}>
          <option value="">--Seleccione--</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select name='year' value={year} onChange={onChange}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name='plan'
          value='basic'
          checked={plan === 'basic'}
          onChange={onChange}
        /> Basic

        <InputRadio
          type="radio"
          name='plan'
          value='complete'
          checked={plan === 'complete'}
          onChange={onChange}
        /> Complete
      </Field>
      <Button type="submit"> Cotizar </Button>
    </form>
  );
}

Form.propTypes = {
  setDataFrm: PropTypes.func.isRequired,
  setSpinner: PropTypes.func.isRequired
}

export default Form;
