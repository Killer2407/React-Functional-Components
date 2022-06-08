import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    focusInput() {
        this.input.current.focus()
    }
    
  render() {
    return (
      <div>
          <input type = 'text' />
      </div>
    )
  }
}

export default Input