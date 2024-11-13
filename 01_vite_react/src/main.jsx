//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import React from 'react'

// function MyApp(){
//   return(<>
//   <h1>akshat bhatt</h1>
//   </>)
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//        href: 'https://www.google.com/',
//        target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href = 'https://www.google.com/' target='_blank'>Visit Google</a>
// )

const anotherUser = ' Google Link'
const reactElement = React.createElement(
  'a',{href: 'https://www.google.com/', target: '_blank'},'click for google', anotherUser
)


createRoot(document.getElementById('root')).render(
  //<StrictMode>
  //<App/>
    //<MyApp />,
    //ReactElement
    //anotherElement
    reactElement
  //</StrictMode>,
)
