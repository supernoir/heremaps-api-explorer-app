import React from 'react'

export default class SingleRepoView extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>{this.props.name}</h1>
        <ul>
          {this.props.languages.map(language => <li>{language}</li>)}
        </ul>
      </div>
    )
  }
}

SingleRepoView.propTypes = {
  name: React.PropTypes.string,
  languages: React.PropTypes.array
}
