import React from 'react'
import renderer from 'react-test-renderer'
import Card from '../components/Card.js'

describe('Card (Snapshot)', () => {
  it('Card renders hello world', () => {
    const component = renderer.create(<Card />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
