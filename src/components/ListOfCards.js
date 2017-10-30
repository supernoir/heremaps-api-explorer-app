import React from 'react'
import axios from 'axios'

import Card from './Card'
import Menu from './Menu'

export default class ListOfCards extends React.Component {
  constructor () {
    super()
    this.state = {
      allRepos: []
    }
  }

  componentDidMount () {
    axios
      .get('https://api.github.com/users/heremaps/repos')
      .then(response => {
        this.setState({ allRepos: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='container-fluid'>
        <Menu />
        {this.state.allRepos.map(repo => (
          <div className='card-group'>
            <Card name={repo.name} fullname={repo.full_name} />
          </div>
        ))}

      </div>
    )
  }
}
