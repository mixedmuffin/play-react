import React, { Component } from 'react'
import Comment  from './Comment'
import Clock  from './Clock'
import Toggle  from './Toggle'
import NumberList  from './NumberList'
import NameForm  from './NameForm'
import EssayForm  from './EssayForm'
import FlavorForm  from './FlavorForm'
import LoginControl  from './LoginControl'
import Reservation  from './Reservation'
import Calculator  from './Calculator'
import FilterableProductTable, {PRODUCTS}  from './product/FilterableProductTable'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  formatName(firstName, lastName) {
    return firstName + ' ' +lastName;
  }

  render() {
    
    const numbers = [1, 2, 3, 4, 5];
    const author = {name:'mix', avatarUrl:'http://img25.photobucket.com/albums/v75/Evil_Vin/clp27.jpg'}
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Test</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <FilterableProductTable products={PRODUCTS} />
        </div>
        <div>
          <Calculator />
        </div>
        <div>
          {this.formatName('aaac', 'bbbc')}
        </div>
        <div>
          <Reservation />
        </div>
        <div>
          <Comment text='my text' author={author} date={new Date()}/>
        </div>
        <div>
          <Clock />
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <LoginControl />
        </div>
        <div>
          <NumberList numbers={numbers} />
        </div>
        <div>
          <NameForm />
        </div>
        <div>
          <EssayForm />
        </div>
        <div>
          <FlavorForm />
        </div>
      </div>
      
    )
  }
}

export default App
