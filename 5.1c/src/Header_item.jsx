import React from 'react'
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const HeaderExampleBlock = (props) => (
  <Header as='h3' block
  style={
    { margin: 0, padding: '0.5em' , 
    backgroundImage: 'linear-gradient( 109.6deg,  rgba(75,228,255,1) 11.2%, rgba(188,204,251,1) 100.6% )'}}>
    {props.title}
  </Header>
)

export default HeaderExampleBlock