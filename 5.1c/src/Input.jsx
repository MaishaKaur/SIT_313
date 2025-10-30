import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleLabeled = (props) => (
  <Input label={props.label} placeholder={props.placeholder} 
  style={{ width: '100%', margin: 0, padding: '1em' }}/>
)

export default InputExampleLabeled