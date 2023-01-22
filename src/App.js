import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";
import Login from "./Pages/login/Login";
import GlobalStyle from './Pages/GlobalStyle/styles'
import Main from './Pages/main/index'
import Applications from './Pages/Applications';
import Calculadora from './Pages/Applications/Calculadora';

function App() {
  return (<>
    <GlobalStyle />
    <Router>
      <Routes>

        <Route exact path='/' element={<Main />}></Route>
        <Route path='/Applications' element={<Applications />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Calculadora' element={<Calculadora />}></Route>

      </Routes>
    </Router>




  </>);
}

export default App;
