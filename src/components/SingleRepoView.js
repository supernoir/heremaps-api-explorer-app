import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

export default class SingleRepoView extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <Menu />
        <h1>{this.props.name}</h1>
        <hr />
        <h2>Languages</h2>
        <ul>
          <li>{this.props.languages}</li>
        </ul>
      </div>
    )
  }
}

SingleRepoView.propTypes = {
  name: PropTypes.string,
  languages: PropTypes.object
}
