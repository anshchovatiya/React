import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Massage from './custom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App topic="Coding" tittle="Generative Ai" />
    <App topic="racing" tittle="Formula Racing Car" /> */}
    {/* <App/> */}
     <Massage ma="this is given by props"></Massage>

  </React.StrictMode>,
)
