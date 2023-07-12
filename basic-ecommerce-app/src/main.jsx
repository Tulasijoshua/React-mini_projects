import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SingleProvider } from './context/SingleProductContext.jsx'
import FilterContextProvider from './context/FilterContext.jsx'
import ShopContextProvider from './context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SingleProvider>
      <FilterContextProvider>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </FilterContextProvider>
    </SingleProvider>
  </React.StrictMode>,
)
