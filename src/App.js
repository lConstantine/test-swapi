import { Switch, Route } from 'react-router-dom'

import { DataDisplay } from './Pages/DataDisplay'
import { Home } from './Pages/Home'
import './App.css'

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
