import React from 'react'

const {Component} = React

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}

class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.customTextInput.focus();
  }

  render() {
    return (
      <CustomTextInput
        ref={(a, b, c) => { this.customTextInput = a }} />
    );
  }
}


function Ref() {
  return <AutoFocusTextInput />
}


export default Ref