import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <Home />
    </ChakraProvider>
  </React.StrictMode>,
)
