import React from 'react'

import { InputContainer } from "./style";

function Input({value, onChange}) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} placeholder="nome-usuario/nome-repositorio"/>
    </InputContainer>
  )
}

export default Input