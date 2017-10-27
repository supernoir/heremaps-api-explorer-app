import React from 'react'

import axios from 'axios'

export default class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      specificRepo: [],
      allLanguages: []
    }
  }

  componentDidMount () {
    console.log(this.props.name)
    const specificRepoName = 'deployment-api'
    axios
      .get(
        `https://api.github.com/repos/heremaps/${specificRepoName}/languages`
      )
      .then(response => this.setState({ allLanguages: response.data }))
      .catch(err => console.log(err))
  }

  render () {
    console.log(this.state.allLanguages)
    console.log(typeof this.state.allLanguages)
    // {this.allLanguages.map(lang => <p>{lang}</p>)}
    return (
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>{this.props.name}</h4>
          <p className='card-text'>
            {this.props.fullname}
          </p>
          <a href='#' className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  name: React.PropTypes.string,
  fullname: React.PropTypes.string
}
