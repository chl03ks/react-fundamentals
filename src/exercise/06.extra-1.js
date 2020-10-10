// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInput = useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    const value = usernameInput.current.value
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={usernameInput} type="text" id="username" />
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
