import React from 'react'

export default class Card extends React.Component {
  render () {
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
