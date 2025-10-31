import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './custonm.css';
import { Controlled as CodeMirror } from 'react-codemirror2'; // this is used to import the codemirror component which is a code editor component for react applications
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import ReactMarkdown from 'react-markdown'; // this is used to import the react markdown component which allows us to render markdown content in react applications

function CustomBar() {
  const [title, setTitle] = useState(''); // State for the question title{ general idea for the usestate // is that tile is the varible that is being changed and settile is the function which is the chaning the value of the tilte according to our requirment  usestate is a react hook that allows us to manage state in functional components and for now it has set the default value for the tilte as empty string ''  }
  const [desc, setDesc] = useState(''); // State for the question description and same as above explained
  const [tag, setTag] = useState(''); // State for the question tag and same as above explained
  const [code, setCode] = useState(''); // State for the code snippet and same as above explained
  const [markdown, setMarkdown] = useState(''); // State for the markdown content and same as above explained
  const [imageUrl, setImageUrl] = useState(''); // State for the image URL and same as above explained
  const [url, setUrl] = useState(''); // State for the related URL and same as above explained

  const userCollectionRef = collection(db, 'questions'); // here i have created a reference to the 'questions' collection in firestore database 
  // collection is a function from firebase/firestore that allows us to specify which collection we want to interact with
  const writeUserData = async () => { 
    if (!title || !desc || !tag || !url) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      await addDoc(userCollectionRef, {
        title: title,
        desc: desc,
        tag: tag,
        code: code,
        imageUrl: imageUrl,
        url: url,
        markdown: markdown,
        createdAt: new Date()
      });
      alert('Question posted successfully!');
      setTitle('');
      setDesc('');
      setTag('');
      setCode('');
      setImageUrl('');
      setUrl('');
      setMarkdown('');
    } catch (error) {
      alert('Error posting question: ' + (error.message || error));
    }
  };

  return (
    <div >
      <h2 className="cb-header">What do you want to share or ask?</h2>

      <label className="cb-label">Title:</label>
      <input
        className="cb-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // this is basically saying when a change happen to the input field, update the title state with the new value// e=>It contains everything about the event: what triggered it, which element was involved, and what data changed.target=> The target property of the event object refers to the specific HTML element that triggered the event.value=> The value property of the target element contains the current content of that element, such as the text inside an input field.then through settitle function the value is updated

        placeholder="Enter a descriptive title"
      />

      <label className="cb-label">Description:</label>
      <textarea
        className="cb-textarea"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}// this is basically saying when a change happen to the input field, update the title state with the new value
        // e=>It contains everything about the event: what triggered it, which element was involved, and what data changed.
        // target=> The target property of the event object refers to the specific HTML element that triggered the event.
        // value=> The value property of the target element contains the current content of that element, such as the text inside an input field.
        // then through setDesc function the value is updated
        placeholder="Describe your problem"
      />

        <label>Code Snippet:</label>
      <CodeMirror // this is the codemirror component that renders a code editor
        value={code}
        options={{
          mode: "javascript", // this sets the syntax highlighting mode to javascript
          theme: "material", // this sets the theme of the code editor to material (WHAT IS MATERIAL THEME? its a dark theme for code editor)
          lineNumbers: true, // this enables line numbers in the code editor
        }}
        onBeforeChange={(editor, data, value) => { // this event is triggered before the content of the editor changes
          setCode(value); // here we update the code state with the new value from the editor
        }}
      />
       <label>Markdown Content:</label>
      <textarea
        style={{ width: "100%", padding: "8px", minHeight: "100px" }}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <h4>Live Preview:</h4>
      <div style={{ background: "#f5f5f5", padding: "10px", borderRadius: "4px" }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>


      <label className="cb-label">Tags:</label>
      <input
        className="cb-input"
        value={tag}
        onChange={(e) => setTag(e.target.value)}// this is basically saying when a change happen to the input field, update the title state with the new value
        // e=>It contains everything about the event: what triggered it, which element was involved, and what data changed.
        // target=> The target property of the event object refers to the specific HTML element that triggered the event.
        // value=> The value property of the target element contains the current content of that element, such as the text inside an input field.
        // then through setTag function the value is updated
        placeholder="Add up to 3 tags e.g., Java"
      />

      <label className="cb-label">URL:</label>
      <input
        className="cb-input"
        value={url}
        onChange={(e) => setUrl(e.target.value)}// this is basically saying when a change happen to the input field, update the title state with the new value
        // e=>It contains everything about the event: what triggered it, which element was involved, and what data changed.
        // target=> The target property of the event object refers to the specific HTML element that triggered the event.
        // value=> The value property of the target element contains the current content of that element, such as the text inside an input field.
        // then through setUrl function the value is updated
        placeholder="Add a related URL"
      />

      <div className="cb-btn-row">
        <button onClick={writeUserData} className="cb-post-btn">
          Post
        </button>
      </div>
    </div>
  );
}

export default CustomBar;