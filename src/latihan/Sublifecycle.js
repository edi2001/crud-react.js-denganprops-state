import React, { Component } from 'react'

export default class 
 extends Component {
     componentWillUnmount(){
         this.props.ubahMakanan('sate')
     }
  render() {
    return (
      <div>
<h2>component sublifecycle</h2>
      </div>
    )
  }
}
