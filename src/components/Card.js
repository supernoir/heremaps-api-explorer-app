import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
    return (
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>{this.props.name}</h4>
          <p className='card-text'>
            Full Name: {this.props.fullname}
            Languages: {this.state.allLanguages.map(lang => <p>{[lang]}</p>)}
          </p>
          <Link to={`/repos/${this.props.name}`} className='btn btn-primary'>
            {'View Repository'}
          </Link>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string,
  fullname: PropTypes.string
}
