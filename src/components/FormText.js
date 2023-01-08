import React, { useState } from 'react'

export default function FormText(props) {console.log(props)
  
  console.log(props)
  const [text, settext] = useState('')
  const Upclick = () => {
    let newText = text.toUpperCase()
    settext(newText)
    props.showAlert("Text Uppercase successful !", "success")
  }
  const Loclick = () => {
    let newText = text.toLowerCase()
    settext(newText)
    props.showAlert("Text Lowercase successful !", "success")
  }
  const clearclick = () => {
    let newText = ''
    settext(newText)
    props.showAlert("Text clear successful !", "success")
  }
  const handleonchange = (event) => {
    console.log('on change')
    settext(event.target.value)
  }
  const handleCopy = () => {
    let text = document.getElementById('text')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied successful !", "success")
  }
  const handleRemoveSpace = () => {
    let newtext = text.split(/[ ]+/)
    settext(newtext.join(' '))
    props.showAlert("Extra Space Remove successful !", "success")
  }
  return (
    <>
      <div className="container my-3" style={{
        color: props.mode === 'light' ? 'black' : 'white',
      }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="text"
            rows="5"
            value={text}
            style={{
              backgroundColor: props.mode === 'dark' ? '#080526' : 'white',
              color: props.mode === 'light' ? 'black' : 'white'
            }}
            onChange={handleonchange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={Upclick}>
          {' '}
          Convert Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={Loclick}>
          {' '}
          Convert lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearclick}>
          {' '}
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          {' '}
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleRemoveSpace}
        >
          {' '}
          Remove Extra Space
        </button>
       
      </div>
      <div className="container" style={{
        color: props.mode === 'light' ? 'black' : 'white',
      }}>
        <h5>Text-Details</h5>
        <p>
          {' '}
          Total words : {text.split(' ').length} and Total characters :{' '}
          {text.length}{' '}
        </p>
      </div>
    </>
  )
}
