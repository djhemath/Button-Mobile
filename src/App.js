import { useState } from 'react';
import './App.css';

function Buttons(props) {
  // const buttons = new Array(12).fill('*');

  const { onBtnClick } = props;

  const buttons = [
    {
      number: '1',
      alphabets: '.,?!1;:/@'.split(''),
      text: ' '
    },
    {
      number: '2',
      alphabets: 'abc2'.split('')
    },
    {
      number: '3',
      alphabets: 'def3'.split('')
    },
    {
      number: '4',
      alphabets: 'ghi4'.split('')
    },
    {
      number: '5',
      alphabets: 'jkl5'.split('')
    },
    {
      number: '6',
      alphabets: 'mno6'.split('')
    },
    {
      number: '7',
      alphabets: 'pqrs7'.split('')
    },
    {
      number: '8',
      alphabets: 'tuv8'.split('')
    },
    {
      number: '9',
      alphabets: 'wxyz9'.split('')
    },
    {
      number: '*',
      alphabets: ''.split('')
    },
    {
      number: '0',
      alphabets: ' 0'.split('')
    },
    {
      number: '#',
      alphabets: ''.split('')
    },
  ];

  return buttons.map((button) => {
    return (
      <button key={button.number} className='btn' onClick={() => onBtnClick(button)}>
        {button.number}
        <br />
        {Boolean(button.text) ? '' : button.alphabets.slice(0, button.alphabets.length-1).join('').toLocaleUpperCase()}
      </button>
    )
  })
}

let previousBtn = '';
let previousBtnActionCount = 0;

let timer;

function App() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = (button) => {

    if(previousBtn === button.number) {
      if(previousBtnActionCount < button.alphabets.length - 1) {
        previousBtnActionCount += 1;
      } else {
        previousBtnActionCount = 0;
      }
    } else {
      previousBtnActionCount = 0;
    }

    if(timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setDisplayText(displayText + button.alphabets[previousBtnActionCount]);
      previousBtn = '';
      previousBtnActionCount = 0;
    }, 300);

    previousBtn = button.number;
  };

  const handleBackSpace = () => {
    previousBtn = '';
    previousBtnActionCount = 0;
    setDisplayText(displayText.substring(0, displayText.length-1));
  }

  return (
    <div className="App">
      <div className='display'>
        <textarea rows={3} value={displayText}></textarea>
      </div>
      
      <div className='btn-container'>
        <div></div>
        <div></div>
        <button className='btn' onClick={handleBackSpace}>&lt;</button>
        <Buttons onBtnClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
