import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={App} />
	</React.StrictMode>
)
