import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import HeaderExampleBlock from './Header_item';
import CheckboxExampleRadioGroup from './Option';
import HeaderExamplePage from './Normal_text';
import InputExampleLabeled from './Input';
import TextAreaExample from './Description';
import ButtonExampleFocus from './Button';

function App() {
  const [postType, setPostType] = useState("question");

  return (
    <div style={{ padding: "1em" }}>
      <div style={{ textAlign: "center" }}>
      <HeaderExampleBlock title="New Post" />
      </div>

      <CheckboxExampleRadioGroup postType={postType} setPostType={setPostType} />

      <HeaderExampleBlock title="What do you want to ask or share?" />

      <HeaderExamplePage title4="This section is designed based on the type of the post. 
        It could be developed by conditional rendering." />

      {postType === "question" && (
        <>

          <InputExampleLabeled 
            label='Title' 
            placeholder='Start your question with how, what, why, etc.' 
          />
          <TextAreaExample />
          <InputExampleLabeled 
            label='Tags' 
            placeholder='Please add up to 3 tags about your question e.g., Java' 
          />
          <ButtonExampleFocus />
        </>
      )}

      {postType === "article" && (
        <>
          <InputExampleLabeled style={{ width: '100%' }}
            label='Title' 
            placeholder='Enter a descriptive title for your article' 
          />
          <TextAreaExample />
          <InputExampleLabeled 
            label='Tags' 
            placeholder='Add up to 3 tags about your article e.g., React' 
          />
          <ButtonExampleFocus />
        </>
      )}
    </div>
  );
}

export default App;
