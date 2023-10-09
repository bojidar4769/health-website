import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0);


  const [username, setUsername] = React.useState('');
  const [email, setEmai] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(e)
  }
  return (
    <>    <img src="./assets/react.svg" alt="React" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <form action='GET' onSubmit={handleLogin}>
        <h2>Zdravete v zdravelogiq</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" />
      <br/>
      <br/>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />
      <br/>
      <br/>
      <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default App
