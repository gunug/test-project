import {useState, type MouseEventHandler} from 'react'
import './App.css'

function App() {
  function test1(){
    return 1000;
  }
  function test2():MouseEventHandler{
    b('바지');
    d(['아이템1','아이템2','아이템3']);
    return () => {console.log('데이터 변경 완료')}
  }
  let [a,b] = useState('코트'); //[state 데이터, state 데이터 변경 함수]
  let [c,d] = useState(['변수1','변수2','변수3']);
  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div className="test">Hello</div>
      <div onClick={() => alert('안녕')}>Hello</div>
      <div onClick={() => test2()}>데이터 변경</div>
      test-project
      {
        //test2()
      }
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
