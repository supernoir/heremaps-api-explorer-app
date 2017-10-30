import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

export const SingleRepoView = ({ match }) => {
  return (
    <div className='container-fluid'>
      <Menu />
      <h1>{this.props.match.params.repo}</h1>
      <hr />
      <h2>Languages</h2>
      <ul>
        <li>Hello</li>
      </ul>
    </div>
  )
}

SingleRepoView.propTypes = {
  match: PropTypes.object
}
