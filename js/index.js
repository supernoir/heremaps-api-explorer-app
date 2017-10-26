import React from 'react'
import ReactDOM from 'react-dom'

import ListOfCards from './components/ListOfCards'

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Here Maps API Explorer</h1>
        <hr />
        <ListOfCards />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
