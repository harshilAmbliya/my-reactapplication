import React, { useState } from 'react'
// import Navbar from './components/Navbar'
import About from './components/About'
import Alert from './components/Alert'
import FormText from './components/FormText'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Wrapper } from './components/Wrapper'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#080526'
      showAlert("DarkMode has been enabled !", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("LightMode has been enabled !", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper title="TextUtils" aboutText="About" mode={mode} changeMode={changeMode}  />}>
            <Route path='/' element={<Alert alert={alert} />} />
            <Route index exact path='/' element={<FormText showAlert={showAlert} heading="Enter the text to analize" mode={mode} />  } />
            <Route exact path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

App.propTypes = {}
export default App
