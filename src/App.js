import logo from './logo.svg';
import './App.css';
import Addvisitor from './components/Addvisitor';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div >
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addvisitor/>}/>
        <Route path='view' element={<Viewall/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
