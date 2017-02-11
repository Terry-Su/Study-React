import React from 'react'

const {Component} = React

class CounterButton extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true
    }
    if (this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  render() {
    return (
      <div>
        <span onClick={() => {
          this.props.color = 'change'
        }}>
          更改颜色
        </span>
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
          Count: {this.state.count}
        </button>
      </div>
    )
  }
}

function ShouldComponentUpdate() {
  return <CounterButton color='' />
}


export default ShouldComponentUpdate