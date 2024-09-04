import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


let username = " ansh";

let customElement = React.createElement("a",{
  href : "https://www.youtube.com",
  target : "_blank",
},"click me",username)


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App/>
// )
ReactDOM.createRoot(document.getElementById('root')).render(
    customElement
)
