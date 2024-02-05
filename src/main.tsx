import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './main.css'
import './github.css'
import './App.css'
import { PlaygroundApp } from './demos/Playground';
import { NcaabDemoApp } from './demos/NcaabDemoApp'
import { DownForMaintain } from './demos/DownForMaintain'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <NcaabDemoApp/>
)
