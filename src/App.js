import { useState } from 'react';
import './App.css';

function App() {

  const [wordCount, setWordCount]=useState(0);

  const onChangeHandler= (event)=>{
    let c=event.target.value;
    let arr = c.split(' ')
    setWordCount(arr.filter(word => word !== '').length)
  }

  return (
    <div className='app'>
    <div className='wrap'>
      <div className='title'>Responsive Paragraph Word counter</div>
      <input onChange={onChangeHandler} className='text_field'></input>
      <div>Word count: {wordCount}</div>
    </div>
      
    </div>
  );
}

export default App;
