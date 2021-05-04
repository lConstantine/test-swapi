import './App.css'

import { Switch, Route } from 'react-router-dom'

import { Home } from './Pages/Home'
import { DataDisplay } from './Pages/DataDisplay'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/:selection' component={() => <DataDisplay />} />
      </Switch>
    </div>
  )
}

export default App
