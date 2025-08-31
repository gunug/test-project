import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function test1(){
    return 1000;
  }
  let [a,b] = useState('코트'); //[state 데이터, state 데이터 변경 함수]
  let [c,d] = useState(['변수1','변수2','변수3']);
  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div className="test">Hello</div>
      <div onClick={() => alert('안녕')}>Hello</div>
      test-project
      { count }
      {test1()}
      { a }
      {c}{c[1]}
      <span onClick={() => {setCounter(counter + 1)}}>버튼</span> {counter}
      <Hello></Hello>
      <Hello></Hello>
      <input type="text" onChange={(event)=>console.log(event.target.value)}></input>
    </div>
  )
}

function Hello(){
  return <div>안녕하세요</div>
}

export default App
