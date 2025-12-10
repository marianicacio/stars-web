import planets from './assets/images/planets.png'
import logo from './assets/images/logo.png'
import './App.css'
import Button from './components/button/Button'
import Card from './components/Card/Card'
import Input from './components/Input/input'
import LoginPage from './layouts/LoginPage/index'
import '../src/assets/fonts/font.css';
import RegisterPage from './layouts/RegisterPage'
import EntryPage from './layouts/EntryPage'
import ExitPage from './layouts/ExitPage'
import ListPage from './layouts/ListPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/exit" element={<ExitPage />} />
        <Route path="/entry" element={<EntryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
