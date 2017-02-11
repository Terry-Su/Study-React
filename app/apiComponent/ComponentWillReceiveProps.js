import React from 'react'

const {Component} = React

class B extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
  }
  render() {
    return (
      <div>
        <br/>数量为：{this.props.customProp}
      </div>
    )
  }
}

class A extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }
  }
  render() {
    const customProp = this.state.count
    // console.log('更新数据：', customProp)
    return (
      <div>
        <span onClick={() => {
          this.setState({
            count: ++this.state.count
          })
        }}>刷新State</span>
        <B customProp={customProp} />
      </div>
    )
  }
}

function ComponentWillReceiveProps() {
  return <A />
}


export default ComponentWillReceiveProps