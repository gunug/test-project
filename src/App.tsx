import { Routes, Route, Link } from 'react-router-dom';
import Intro from './Intro';
import Test2 from './Test2';

function App() {
  return (
    <div>
      <nav>
        <Link to="/intro">Intro</Link> | {" "}
        <Link to="/test2">Test 2</Link>
      </nav>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </div>
  );
}

export default App
