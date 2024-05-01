import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TrafficLightsProvider } from './context/TrafficLightsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrafficLightsProvider> 
      <App />
    </TrafficLightsProvider>
   
  </React.StrictMode>,
)
