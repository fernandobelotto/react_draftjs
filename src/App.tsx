import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import React from 'react';


export default function App() {
  return (
    <div style={{ border: '1px solid gray', width: '50vw' }}>
      <MyEditor />
    </div>
  )
}


function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}