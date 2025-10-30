import React, { Component, createRef } from 'react'
import { GridColumn, Button} from 'semantic-ui-react'

export default class ButtonExampleFocus extends Component {
  buttonRef = createRef()
  handleClick = () => this.buttonRef.current.focus()

  render() {
    return (
        <GridColumn width={8}>
          <Button content='Set focused' onClick={this.handleClick} 
          style={{ backgroundImage: 'linear-gradient( 109.6deg,  rgba(75,228,255,1) 11.2%, rgba(188,204,251,1) 100.6% )', 
          color: 'white' }} />
        </GridColumn>
    )
  }
}