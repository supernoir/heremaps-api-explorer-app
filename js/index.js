import React from 'react'
import ReactDOM from 'react-dom'

import ListOfCards from './components/ListOfCards'
import SingleRepoView from './components/SingleRepoView'

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Here Maps API Explorer</h1>
        <hr />
        <ListOfCards />
        <SingleRepoView
          name={'Hello Friend'}
          languages={['Java', 'Python', 'Erlang']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
