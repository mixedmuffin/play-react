import React, { Component } from 'react'

class NumberList extends Component {
    render() {
        const numbers = this.props.numbers

        return (
            <ul>
                {numbers.map((number) =>
                    <li key={number.toString()}>{number}</li>
                )}
            </ul>
        )
    }
}
export default NumberList