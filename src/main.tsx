import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BlogApp } from './demos/BlogDemoApp'
import { NcaabDemoApp } from './demos/NcaabDemoApp';
import './index.css'
import './main.css'
import './github.css'
import './App.css'
import { PlaygroundApp } from './demos/Playground';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <PlaygroundApp/>
)
