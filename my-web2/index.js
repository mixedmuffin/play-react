// index.js
import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './styles.scss'

export default class HelloWorld extends Component {
  render() {
    const { fullName, birthday } = this.props
    return (
      <div>
        <h1>สวัสดีชาวโลก ผมชื่อ {fullName}</h1>
        <time datetime={birthday.toISOString()}>
          {birthday.toLocaleDateString()}
        </time>
      </div>
    )
  }
}

render(<HelloWorld 
  fullName='Nuttavut Thongjor'
  birthday={new Date()}/>, document.getElementById('app'))