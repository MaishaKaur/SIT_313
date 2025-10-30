import React from 'react'
import { SegmentGroup, Segment, TextArea, Form } from 'semantic-ui-react'

const SegmentExampleNestedSegments = () => (
  <SegmentGroup style={{ border: '0', padding: '0', width: '100%', margin: 0, padding: '0' }}>
    <Segment style={{ backgroundImage: 'linear-gradient( 109.6deg,  rgba(75,228,255,1) 11.2%, rgba(188,204,251,1) 100.6% )', 
      width: '100%'}}>Describe your problem</Segment>
     <Form>
    <TextArea placeholder='Tell us more' style={{ minHeight: 260 }}/>
  </Form>
  </SegmentGroup>
)

export default SegmentExampleNestedSegments
