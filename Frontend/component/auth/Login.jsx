import React from 'react'

export default function Login() {
  return (
    <div>
      <h1>Welcome to shopping SARA...</h1>
      <h3>Login to continue</h3>
      <form>
        <label>
          User Name:
          <input type="text" />
        </label>
        <br/><br/>
        <label>
          Password:
          <input type="password" />
        </label>
      </form>
      <br/>
      <button>New Registration</button>
    </div>
  )
}
