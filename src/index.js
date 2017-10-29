import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Route } from 'react-router-dom'

import ListOfCards from './components/ListOfCards'
import SingleRepoView from './components/SingleRepoView'

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={ListOfCards} />
          <Route exact path='/repos' component={ListOfCards} />
          <Route exact path='/repos/:repo' component={SingleRepoView} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
