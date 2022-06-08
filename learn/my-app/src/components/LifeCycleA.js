import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Aniket'
      }
      console.log('LifeCycleA constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA   getDerivedStateFromProps');
        return null;
    }
    componentDidMount() {
        console.log('LifeCycleA ComponentDidMount')
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
    changeState = () => {
        this.setState({
            name: 'Aniket is Coder'
        })
    }

  render() {
      console.log('LifecycleA render');
    return (
        <div>
            <div>LifeCycleA</div>
            <button onClick={this.changeState}>Change State</button>
            <LifeCycleB />
        </div>
          )
  }
}

export default LifeCycleA