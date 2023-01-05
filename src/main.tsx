import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BlogApp } from './demos/BlogDemoApp'
import { NcaabDemoApp } from './demos/NcaabDemoApp';
import './index.css'
import './main.css'
import './github.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <NcaabDemoApp/>
)
