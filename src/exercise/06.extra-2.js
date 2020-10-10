// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInput = useRef(null)
  const [isValid, setValid] = useState(true)

  const handleSubmit = event => {
    event.preventDefault()
    const value = usernameInput.current.value
    onSubmitUsername(value)
  }

  const handleChange = e => {
    const value = e.target.value
    setValid(value === value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameInput}
          onChange={handleChange}
          type="text"
          id="username"
        />

        {isValid ? null : (
          <div role="alert" style={{color: 'red'}}>
            'Username must be lower case'{' '}
          </div>
        )}
      </div>
      <button disabled={!isValid} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
