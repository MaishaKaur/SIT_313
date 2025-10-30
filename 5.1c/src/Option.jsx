import React from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

function CheckboxExampleRadioGroup({ postType, setPostType }) {
  return (
    <Form style={{ padding: '1em' }}>
      Selected Post Type: <b>{postType}</b>
      <div>
        <Checkbox
          radio
          label='Question'
          name='checkboxRadioGroup'
          value='question'
          checked={postType === 'question'}
          onChange={() => setPostType('question')}
          style={{ paddingRight: '1em' }}
        />
        <Checkbox
          radio
          label='Article'
          name='checkboxRadioGroup'
          value='article'
          checked={postType === 'article'}
          onChange={() => setPostType('article')}
          style={{ paddingRight: '1em' }}
        />
      </div>
    </Form>
  );
}

export default CheckboxExampleRadioGroup;
