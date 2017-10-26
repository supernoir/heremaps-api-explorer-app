import React from 'react'
import axios from 'axios'

export default class List extends React.Component {
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
      <ul>
        {this.state.allRepos.map(repo => <li>{repo.full_name}</li>)}
      </ul>
    )
  }
}
