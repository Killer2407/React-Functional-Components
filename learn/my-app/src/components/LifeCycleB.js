import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Aniket'
      }
      console.log('LifeCycleB constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps');
        return null;
    }
    componentDidMount() {
        console.log('LifeCycleB ComponentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentDidUpdate')
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    } 

  render() {
      console.log('LifecycleB render');
    return (
      <div>LifeCycle B</div>
      
    //   </div>
    )
  }
}

export default LifeCycleB