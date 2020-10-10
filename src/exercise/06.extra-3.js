// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  const handleChange = e => {
    const value = e.target.value
    setInputValue(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          id="username"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
