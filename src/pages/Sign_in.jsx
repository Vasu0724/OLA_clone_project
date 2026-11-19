import React, { useState } from 'react'

import olaLoginImg from '../assets/s1_pro_gen3_tenets_design_web_image_01.webp'

function Sign_in() {
  const [isLogin, setIsLogin] = useState(true)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  
  function getUsers() {
    return JSON.parse(localStorage.getItem('olaUsers')) || []
  }

  function handleSignup() {
    if (name.trim() === '') {
      alert('Please enter your name')
      return
    }

    if (email.trim() === '') {
      alert('Please enter your email')
      return
    }

    if (password.trim() === '') {
      alert('Please enter your password')
      return
    }

    const users = getUsers()

    const userExists = users.find(
      (user) => user.email.toLowerCase() === email.trim().toLowerCase()
    )

    if (userExists) {
      alert('Account already exists. Please login.')
      setIsLogin(true)
      return
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: password
    }

    users.push(newUser)

    localStorage.setItem('olaUsers', JSON.stringify(users))

    alert('Account created successfully! Please login.')

    setName('')
    setEmail('')
    setPassword('')
    setIsLogin(true)
  }

  function handleLogin() {
    if (email.trim() === '') {
      alert('Please enter your email')
      return
    }

    if (password.trim() === '') {
      alert('Please enter your password')
      return
    }

    const users = getUsers()

    const loggedUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase() &&
        user.password === password
    )

    if (loggedUser) {
      alert(`Welcome ${loggedUser.name}! Login successful.`)

      // Save logged-in user locally
      localStorage.setItem(
        'olaLoggedInUser',
        JSON.stringify({
          id: loggedUser.id,
          name: loggedUser.name,
          email: loggedUser.email
        })
      )

      setName('')
      setEmail('')
      setPassword('')
    } else {
      alert('Invalid email or password')
    }
  }

  function switchMode() {
    setIsLogin(!isLogin)
    setName('')
    setEmail('')
    setPassword('')
    setShowPassword(false)
  }

  return (
    <div className="ola_auth_page">

      <div className="ola_auth_card">

        <div className="ola_auth_image">

          <img src={olaLoginImg} alt="Ola Electric scooter" />

          <div className="ola_auth_overlay">
            <h1>Ride into the future.</h1>
            <p>Experience electric. Experience Ola.</p>
          </div>

        </div>

        <div className="ola_auth_content">

          <div className="ola_auth_heading">

            <p>{isLogin ? 'Welcome back' : 'Join the electric revolution'}</p>

            <h2>
              {isLogin ? 'Login to your account' : 'Create your account'}
            </h2>

          </div>

          <div className="ola_auth_form">

            {!isLogin && (
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="ola_auth_password">

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>

            </div>

          </div>

          <button
            className="ola_auth_button"
            onClick={isLogin ? handleLogin : handleSignup}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          {/* SWITCH LOGIN / SIGNUP */}
          <div className="ola_auth_switch">

            <p>
              {isLogin
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>

            <button onClick={switchMode}>
              {isLogin ? 'Sign Up' : 'Login'}
            </button>

          </div>

          <p className="ola_auth_footer">
            Ride into the future. Ride electric.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Sign_in