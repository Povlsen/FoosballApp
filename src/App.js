import React from 'react'
import { Link } from 'react-router-dom'
import './App.scss'

const App = _ => (
  <div className='App min-vh-100 d-flex flex-wrap align-content-center justify-content-center overflow-y-scroll'>
    <div className='d-flex flex-wrap justify-content-center'>
      <Link className='d-flex justify-content-center align-items-center m-3 m-sm-4' to='/admin'>Administration</Link>
      <Link className='d-flex justify-content-center align-items-center m-3 m-sm-4' to='/register'>Register</Link>
    </div>
    <div className='d-flex flex-wrap justify-content-center'>
      <Link className='d-flex justify-content-center align-items-center m-3 m-sm-4' to='/status'>Status</Link>
      <Link className='d-flex justify-content-center align-items-center m-3 m-sm-4' to='/inout'>In/out</Link>
    </div>
  </div>
)

export default App